import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class BarometerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create GET /barometer lambda
    const getBarometerHandler = new lambda.Function(this, "GetBarometerHandler", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("resources"),
      handler: "barometer.getHandler",
      environment: {}
    });

    // create POST /barometer lambda
    const postBarometerHandler = new lambda.Function(this, "PostBarometerHandler", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("resources"),
      handler: "barometer.postHandler",
      environment: {}
    });

    // create API gateway for barometer API
    const api = new apigateway.RestApi(this, "barometer-api", {
      restApiName: "Barometer API",
      description: "This service serves test API"
    });

    // create lambda proxy integration with API gateway
    const getBarometerIntegration = new apigateway.LambdaIntegration(getBarometerHandler);
    const postBarometerIntegration = new apigateway.LambdaIntegration(postBarometerHandler);

    // create a new resource /barometer in API gateway
    const barometerResource = api.root.addResource('barometer');

    // add GET, POST methos for barometer resource
    barometerResource.addMethod("GET", getBarometerIntegration);
    barometerResource.addMethod("POST", postBarometerIntegration);
  }
}
