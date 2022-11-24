import {
  aws_s3 as s3,
  aws_lambda as lambda,
  App,
  Stack,
  StackProps
} from 'aws-cdk-lib'

const lambdaOptions = {
  runtime: lambda.Runtime.NODEJS_18_X,
  handler: 'src/app.lambdaHandler',
  code: lambda.Code.fromAsset('../../backend/integration/my-lambda/dist')
}

/**
 * Creating the stack
 */
export class PROJStack extends Stack {
  constructor (scope: App, id: string, props?: StackProps) {
    super(scope, id, props)

    /**
     * Configuration of the S3 bucket
     */
    new s3.Bucket(this, 'my-bucket', {
      versioned: true
    })

    /**
     * Configuration of the lambda function
     */
    new lambda.Function(this, 'my-lambda', {
      ...lambdaOptions
    })
  }
}
