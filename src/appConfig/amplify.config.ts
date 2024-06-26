import { ResourcesConfig } from 'aws-amplify'
import { AppConfig } from './app.configs'

export const amplifyConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: AppConfig.userPoolId,
      userPoolClientId: AppConfig.userPoolClientId
    }
  },
  API: {
    GraphQL: {
      apiKey: AppConfig.apiKey,
      endpoint: AppConfig.apiEndpoint,
      defaultAuthMode: AppConfig.authMode
    }
  }
}
