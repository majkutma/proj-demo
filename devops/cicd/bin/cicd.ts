#!/usr/bin/env node
import { App } from 'aws-cdk-lib'
import { PROJStack } from '../lib/main-stack'
import { STACK_NAME } from '../constants/resourceNames'

const app = new App()
const stackId = STACK_NAME
const region = process.env.CDK_DEFAULT_REGION
const account = process.env.CDK_DEFAULT_ACCOUNT

new PROJStack(app, stackId, {
  env: {
    account,
    region
  }
})
