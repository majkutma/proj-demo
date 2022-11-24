import {
  aws_s3 as s3,
  Stack
} from 'aws-cdk-lib'

/**
 * Configuring myBucket bucket
 */
export const myBucket = (stack: Stack): void => {
  new s3.Bucket(stack, 'my-bucket', {
    versioned: true
  })
}
