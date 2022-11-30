import {
  aws_s3 as s3,
  Stack,
  RemovalPolicy
} from 'aws-cdk-lib'

/**
 * Configuring myBucket bucket
 */
export const myBucket = (stack: Stack): s3.Bucket => {
  return new s3.Bucket(stack, 'my-bucket', {
    removalPolicy: RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
    versioned: true
  })
}
