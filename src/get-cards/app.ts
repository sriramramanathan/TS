import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import { getConnection } from "../database/db_connection";
import { Card } from "../database/entities/card";

export const lambdaHandler = async (
  req: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  try {
    let conn = await getConnection();
    let cardRepo = await conn.getRepository(Card);

    let res = await cardRepo.find();

    return { body: JSON.stringify(res), statusCode: 200 };
  } catch (exception) {
    return { body: `{exception: ${exception.stack}}`, statusCode: 500 };
  }
};
