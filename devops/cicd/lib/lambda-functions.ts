import {
  aws_lambda as lambda,
  Stack
} from 'aws-cdk-lib'

const lambdaOptions = {
  runtime: lambda.Runtime.NODEJS_18_X,
  handler: 'src/app.lambdaHandler',
  code: lambda.Code.fromAsset('../../backend/integration/my-integration-lambda/dist')
}

/**
 * Configuring myIntegrationLambda function
 */
export const myIntegrationLambda = (stack: Stack): lambda.Function => {
  return new lambda.Function(stack, 'my-integration-lambda', {
    ...lambdaOptions
  })
}
