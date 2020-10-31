import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsPatterns from '@aws-cdk/aws-ecs-patterns';
import * as efs from '@aws-cdk/aws-efs';
import * as rds from '@aws-cdk/aws-rds';
import * as cdk from '@aws-cdk/core';

/**
 * The interface for all wordpress.
 */
export interface WordPressProps {
  /**
   * The WordPress VPC
   */
  readonly vpc?: ec2.IVpc;

  /**
   * The WordPress RDS
   */
  readonly rdsInstance?: rds.DatabaseInstance;

  /**
   * The WordPress cluster
   */
  readonly cluster?: ecs.Cluster;
}

export class WordPress extends cdk.Construct {
  readonly endpoint: string;
  constructor(scope: cdk.Construct, id: string, props: WordPressProps = {}) {
    super(scope, id);

    const vpc = props.vpc ?? new ec2.Vpc(this, 'Vpc', { maxAzs: 3, natGateways: 1 });

    const rdsInstance = props.rdsInstance ?? new rds.DatabaseInstance(this, 'Database', {
      engine: rds.DatabaseInstanceEngine.mysql({
        version: rds.MysqlEngineVersion.VER_8_0_21,
      }),
      vpc,
      deleteAutomatedBackups: true,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.BURSTABLE3,
        ec2.InstanceSize.MICRO,
      ),
      allocatedStorage: 10,
    });

    const cluster = props.cluster ?? new ecs.Cluster(this, 'EcsCluster', { vpc });

    const autoScalingGroup = cluster.addCapacity('ASG', {
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3A,
        ec2.InstanceSize.SMALL,
      ),
      maxCapacity: 3,
      machineImage: ecs.EcsOptimizedImage.amazonLinux2(),
    });
    autoScalingGroup.scaleOnCpuUtilization('KeepCpuHalfwayLoaded', {
      targetUtilizationPercent: 50,
    });

    const loadBalancedEcsService = new ecsPatterns.ApplicationLoadBalancedEc2Service(
      this,
      'Service',
      {
        cluster,
        memoryLimitMiB: 512,
        taskImageOptions: {
          image: ecs.ContainerImage.fromRegistry('wordpress'),
          environment: {
            WORDPRESS_DB_NAME: 'wordpress',
          },
          secrets: {
            WORDPRESS_DB_HOST: ecs.Secret.fromSecretsManager(
              rdsInstance.secret!,
              'host',
            ),
            WORDPRESS_DB_USER: ecs.Secret.fromSecretsManager(
              rdsInstance.secret!,
              'username',
            ),
            WORDPRESS_DB_PASSWORD: ecs.Secret.fromSecretsManager(
              rdsInstance.secret!,
              'password',
            ),
          },
        },
        desiredCount: 2,
      },
    );
    const scaling = loadBalancedEcsService.service.autoScaleTaskCount({
      maxCapacity: 6,
    });
    scaling.scaleOnCpuUtilization('CpuScaling', {
      targetUtilizationPercent: 50,
    });
    loadBalancedEcsService.targetGroup.healthCheck = {
      path: '/wp-includes/images/blank.gif',
      interval: cdk.Duration.minutes(1),
    };

    rdsInstance.connections.allowFrom(
      loadBalancedEcsService.cluster.connections,
      ec2.Port.tcp(3306),
    );

    const fileSystem = new efs.FileSystem(this, 'FileSystem', {
      vpc,
      encrypted: true,
    });
    fileSystem.connections.allowFrom(
      autoScalingGroup.connections.connections,
      ec2.Port.tcp(2049),
    );

    const volumeName = 'efs';
    loadBalancedEcsService.taskDefinition.addVolume({
      name: volumeName,
      efsVolumeConfiguration: {
        fileSystemId: fileSystem.fileSystemId,
      },
    });

    loadBalancedEcsService.taskDefinition.defaultContainer?.addMountPoints({
      containerPath: '/var/www/html',
      readOnly: false,
      sourceVolume: volumeName,
    });

    this.endpoint = `http://${loadBalancedEcsService.loadBalancer.loadBalancerDnsName}`;
  }
}