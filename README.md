See [#AppSyncChallenge](https://twitter.com/hashtag/AppSyncChallenge) on Twitter

# The Challenge

Build an AppSync API. There are only 2 rules:

- It must call at least one AWS service of your choice (eg: Lambda, SSM, Strep Functions, S3)
- You **cannot** use Lambda resolvers. Use VTL **only**!

There are no other restrictions. Use the IaC of your choice (Serverless framework, Amplify, CDK, etc.)

When you are done, post your solution with a link to your Github repo on Twitter. Use the hashtag #AppSyncChallenge to make sure it's visible.

# Ideas

If you are out of inspiration, here are a couple of ideas for you:


- Build an API that browses an S3 Bucket

```graphql
query {
  s3(bucketName: "my-bucket", prefix: "path/to/files") {
    key
    size
  }
}
```
<br/>


- Execute a Step Function 

```graphql
query {
  startStepFunction(name: "my_task", input: "{\"foo\": \"bar\"}") {
    key
    size
  }
}
```
**Bonus**: Add a subcription endpoint to AppSync that will receive an event when the Step Functions complete.

<br/>

- Reveal a secret from SSM

```graphql
query {
  revealSecret(path: "path/to/ssm/secret")
}
```

<br/>

- Invoke a long-running Lambda function asynchroneously (AppSync will not wait for the function to return)

```graphql
query {
  runLambda(name: "myLambda", input: "{\"foo\": \"bar\"}")
}
```

**Bonus**: Add a subcription endpoint to AppSync that will receive an event when the Lmbda finishes.

<br/>
<br/>

![Good luck](https://media.giphy.com/media/j1Xyt3DHfJcmk/giphy.gif)
