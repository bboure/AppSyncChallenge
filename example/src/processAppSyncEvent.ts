import { EventBridgeHandler } from 'aws-lambda';
import AWSAppSyncClient from 'aws-appsync';
import gql from 'graphql-tag';
import 'cross-fetch/polyfill';

const graphqlClient = new AWSAppSyncClient({
  url: process.env.APPSYNC_ENDPOINT!,
  region: process.env.AWS_REGION!,
  auth: {
    type: 'AWS_IAM',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      sessionToken: process.env.AWS_SESSION_TOKEN!,
    },
  },
  disableOffline: true,
});

const mutation = gql`
  mutation Notify($message: String!) {
    notify(message: $message)
  }
`;

export const handler: EventBridgeHandler<
  'AppSyncChallenge',
  { message: string },
  void
> = async (event) => {
  console.log(event);

  await graphqlClient.mutate({
    mutation,
    variables: {
      message: event.detail.message,
    },
  });
};
