import {
  App,
  Stack,
  StackProps
} from 'aws-cdk-lib'

import { mySecretsManager } from './secrets-manager'
import { myIntegrationLambda } from './lambda-functions'
import { myBucket } from './s3-buckets'
import { myAmplify } from './amplify-apps'

/**
 * Creating the stack
 */
export class PROJStack extends Stack {
  constructor (scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    // Creating myBucket bucket
    mySecretsManager(this)

    // Creating myIntegrationLambda function
    myIntegrationLambda(this)

    // Creating myBucket bucket
    myBucket(this)

    // Creating myAmplify frontend
    const myAmplifyApp = myAmplify(this)
    myAmplifyApp.addBranch('main')
  }
}
