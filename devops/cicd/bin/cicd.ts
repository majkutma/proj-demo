#!/usr/bin/env node
import { App } from 'aws-cdk-lib'
import { PROJStack } from '../lib/main-stack'
import { STACK_ID_DEFAULT } from '../constants/resourceNames'
import { getBranchName, getStackId } from '../utils/parameterUtils'

const app = new App()
const stackId = getStackId() ?? STACK_ID_DEFAULT
const branchName = getBranchName()
const region = process.env.CDK_DEFAULT_REGION ?? app.node.tryGetContext('defaultRegion')
const account = process.env.CDK_DEFAULT_ACCOUNT ?? app.node.tryGetContext('defaultAccount')

console.log('-----------------------------------------------------')
console.log(' On branch: ', branchName)
console.log(' Please review the stack name: ', stackId)
console.log(' Region: ', region, ' Account: ', account)
console.log('-----------------------------------------------------')

new PROJStack(app, stackId, {
  env: {
    account,
    region
  }
})
