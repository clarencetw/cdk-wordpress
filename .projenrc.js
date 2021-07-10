const { AwsCdkConstructLibrary, DependenciesUpgradeMechanism } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new AwsCdkConstructLibrary({
  authorAddress: "mr.lin.clarence@gmail.com",
  authorName: "Clarence Lin",
  cdkVersion: "1.71.0",
  name: "cdk-wordpress",
  repository: "https://github.com/clarencetw/cdk-wordpress.git",
  keywords: ['aws', 'cdk', 'wordpress'],
  defaultReleaseBranch: 'master',
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: AUTOMATION_TOKEN,
    },
  }),
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['clarencetw'],
  },
  catalog: {
    twitter: 'Clarence_Lin',
    announce: false,
  },
  python: {
    distName: 'cdk-wordpress',
    module: 'cdk_wordpress',
  },
  cdkDependencies: [
    "@aws-cdk/core",
    "@aws-cdk/aws-ec2",
    "@aws-cdk/aws-rds",
    "@aws-cdk/aws-ecs",
    "@aws-cdk/aws-ecs-patterns",
    "@aws-cdk/aws-efs"
  ],
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
