import {
  App,
  Stack,
  StackProps
} from 'aws-cdk-lib'

import { myIntegrationLambda } from './lambda-stack'
import { myBucket } from './s3-stack'
import { myAmplify } from './amplify-stack'

/**
 * Creating the stack
 */
export class PROJStack extends Stack {
  constructor (scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // Creating myIntegrationLambda function
    myIntegrationLambda(this)

    // Creating myBucket bucket
    myBucket(this)

    // Creating myAmplify frontend
    const myAmplifyApp = myAmplify(this)
    myAmplifyApp.addBranch('main')
  }
}
