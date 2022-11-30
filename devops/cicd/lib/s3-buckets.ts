import {
  aws_s3 as s3,
  Stack
} from 'aws-cdk-lib'
// import { getResourceId } from '../utils/parameterUtils'

/**
 * Configuring myBucket bucket
 */
export const myBucket = (stack: Stack): s3.Bucket => {
  return new s3.Bucket(stack, 'my-bucket', {
    versioned: true
  })
}
