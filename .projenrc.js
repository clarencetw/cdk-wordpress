const { awscdk, Gitpod } = require('projen');

const AUTOMATION_TOKEN = 'PROJEN_GITHUB_TOKEN';

const project = new awscdk.AwsCdkConstructLibrary({
  authorAddress: 'mr.lin.clarence@gmail.com',
  authorName: 'Clarence Lin',
  cdkVersion: '1.71.0',
  name: 'cdk-wordpress',
  repository: 'https://github.com/clarencetw/cdk-wordpress.git',
  keywords: ['aws', 'cdk', 'wordpress'],
  defaultReleaseBranch: 'master',
  minNodeVersion: '14.17.6',
  depsUpgrade: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: AUTOMATION_TOKEN,
    },
  },
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
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-rds',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
    '@aws-cdk/aws-efs',
  ],
});

const gitpod = new Gitpod(project);
gitpod.addCustomTask({
  init: 'yarn install && yarn run build',
  command: 'npx projen upgrade',
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
