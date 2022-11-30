import {
  Stack,
  SecretValue,
  aws_codebuild as codebuild
} from 'aws-cdk-lib'
import * as amplify from '@aws-cdk/aws-amplify-alpha'
import { OWNER, REPOSITORY, PATH } from '../constants/repositoryInfo'
import { getResourceId } from '../utils/parameterUtils'

/**
 * Configuring myAmplify frontend
 */
export const myAmplify = (stack: Stack): amplify.App => {
  return new amplify.App(stack, getResourceId('my-amplify-frontend'), {
    sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
      owner: OWNER,
      repository: REPOSITORY,
      oauthToken: SecretValue.secretsManager('github-token')
    }),
    buildSpec: codebuild.BuildSpec.fromObjectToYaml({
      version: 1,
      applications: [
        {
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
              files: [
                '**/*'
              ]
            },
            cache: {
              paths: [
                'node_modules/**/*'
              ]
            }
          },
          appRoot: PATH
        }
      ]
    })
  })
}
