# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Steps I took

- Installed aws-cdk using npm 
```
$ npm i -g aws-cdk
```
- Ran `cdk init` to create a new CDK project
- Created barometer-stack.ts file to create API gateway and 2 lambdas to handle POST, GET requests
- Created barometer.ts file to handle GET and POST requests
- Ran `cdk synth` to generate CloudFormation template file
- Ran `cdk deploy` to deploy project into AWS
- Tested endpoints using Postman

Now API is deployed on the following url.
https://k4bwfu5zd7.execute-api.us-east-1.amazonaws.com/prod/barometer

For GET request, request will be
```
{
    "status": "ok",
    "message": "This is GET handler"
}
```
For POST request, response will be
```
{
    "status": "ok",
    "message": "This is POST handler"
}
```
