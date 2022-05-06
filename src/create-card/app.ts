import { APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import { Card } from "../database/entities/card";
import { getConnection } from "../database/db_connection";

export const lambdaHandler = async (
  req: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  try {
    let conn = await getConnection();
    let cardRepository = await conn.getRepository(Card);

    const body = JSON.parse(req.body);

    let newCard: Card = new Card();
    newCard.title = body.title;
    newCard.tablename = body.tablename;

    const res = await cardRepository.save(newCard);
    return {
      body: JSON.stringify({ success: true, id: res.id }),
      statusCode: 200,
    };
  } catch (exception) {
    return { body: `{exception: ${exception.stack}}`, statusCode: 500 };
  }
};
