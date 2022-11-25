import {
  aws_secretsmanager as secretsmanager,
  Stack
} from 'aws-cdk-lib'

/**
 * Configuring myBucket bucket
 */
export const mySecretsManager = (stack: Stack): void => {
  // const myGitHubToken = stack.node.tryGetContext('gitHubToken')

  new secretsmanager.Secret(stack, 'my-github-token', {
    description: 'The GitHub repository access token'
  })
}
