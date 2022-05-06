import { APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export const lambdaHandler = async (req: APIGatewayEvent): Promise<APIGatewayProxyResult> =>{
  return {"body": JSON.stringify('Hello world'), statusCode: 200}
}