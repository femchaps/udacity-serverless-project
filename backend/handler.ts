"use strict";

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
            message: "Nice one! Serverless function was successfully executed",
            input: event,
        }, 
        null, 
        2
        ),
    };
};