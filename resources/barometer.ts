import { Handler } from "aws-lambda";

// GET /barometer handler
export const getHandler: Handler = async function(event, context) {
    console.log(event);
    const responseBody = {
        status: 'ok',
        message: 'This is GET handler'
    }
    return {
        statusCode: 200,
        headers: {},
        body: JSON.stringify(responseBody)
    };
}

// POST /barometer handler
export const postHandler: Handler = async function(event, context) {
    console.log(event);
    const responseBody = {
        status: 'ok',
        message: 'This is POST handler'
    }
    return {
        statusCode: 200,
        headers: {},
        body: JSON.stringify(responseBody)
    };
}
