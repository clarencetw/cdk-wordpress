import * as cdk from '@aws-cdk/core';
import { Ecs } from './index';

export class IntegTesting {
  readonly stack: cdk.Stack[];

  constructor() {
    const app = new cdk.App();

    const env = {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    };

    const stack = new cdk.Stack(app, 'testing-stack', { env });

    const wordpress = new Ecs(stack, 'WordPressEcs');

    new cdk.CfnOutput(stack, 'Endpoint', {
      value: wordpress.endpoint,
    });
    this.stack = [stack];
  }
}

new IntegTesting();