import { Handler } from 'aws-lambda';

export const hello: Handler = (event: any) => {
  const response = {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: '<div><h1>Dapper</h1></div>'
  };

  return new Promise((resolve) => {
    resolve(response)
  })
}