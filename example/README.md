This simple solution creates an AppSync API that sends a message to EventBridge. A Lambda function is set as the trigger for the event. The Lamba function calls the `notify` `Mutation` for which a subscription is defined. This allows any interested third-party to receive the message.

```graphql
mutation {
  sendEvent(message: "Hello World!")
}
```
