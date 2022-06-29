import { Stack, StackProps ,} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { join } from 'path';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';




export class GraphqlLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const graphqlLambda = new NodejsFunction(this, 'GraphqlLambda', {
      entry: join(__dirname,"../lambda/graphql.ts"),
      handler: "graphql.handler",
      
    });

    new LambdaRestApi(this, "graphqlEndpoint", {
      handler: graphqlLambda,
    });

   
    
     
    }
  }


