import {
  App,
  Stack,
  StackProps
} from 'aws-cdk-lib'

import { myIntegrationLambda } from './lambda-functions'
import { myBucket } from './s3-buckets'
import { myAmplify } from './amplify-apps'
import { getBranchName } from '../utils/parameterUtils'

/**
 * Creating the stack
 */
export class PROJStack extends Stack {
  constructor (scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    const branchName = getBranchName()

    // Creating myIntegrationLambda function
    myIntegrationLambda(this)

    // Creating myBucket bucket
    myBucket(this)

    // Creating myAmplify frontend
    const myAmplifyApp = myAmplify(this)
    myAmplifyApp.addBranch(branchName)
  }
}
