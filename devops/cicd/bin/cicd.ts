#!/usr/bin/env node
import { App } from 'aws-cdk-lib'
import { PROJStack } from '../lib/main-stack'
import { STACK_ID_DEFAULT } from '../constants/resourceNames'
import { getStackId } from '../utils/parameterUtils'

const app = new App()
const stackId = getStackId() ?? STACK_ID_DEFAULT
const region = process.env.CDK_DEFAULT_REGION
const account = process.env.CDK_DEFAULT_ACCOUNT

new PROJStack(app, stackId, {
  env: {
    account,
    region
  }
})
