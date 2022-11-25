import {
  Stack,
  SecretValue,
  aws_codebuild as codebuild
} from 'aws-cdk-lib'
import * as amplify from '@aws-cdk/aws-amplify-alpha'
import { OWNER, REPOSITORY, PATH } from '../constants/repositoryInfo'

/**
 * Configuring myAmplify frontend
 */

export const myAmplify = (stack: Stack): amplify.App => {
  return new amplify.App(stack, 'my-amplify-frontend', {
    sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
      owner: OWNER,
      repository: REPOSITORY,
      oauthToken: SecretValue.secretsManager('mygithubtoken16BEBD28-GVTzICqZejPy')
    }),
    buildSpec: codebuild.BuildSpec.fromObjectToYaml({
      version: '1.0',
      env: {
        variables: {
          AMPLIFY_DIFF_DEPLOY: 'false',
          AMPLIFY_MONOREPO_APP_ROOT: PATH
        }
      },
      frontend: {
        phases: {
          preBuild: {
            commands: [
              'npm ci'
            ]
          },
          build: {
            commands: [
              'npm run build'
            ]
          }
        },
        artifacts: {
          baseDirectory: 'dist/app',
          files:
          -'**/*'
        },
        cache: {
          paths:
          -'node_modules/**/*'
        },
        paths: PATH
      }
    })
  })
}
