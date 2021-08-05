/* eslint-disable import/prefer-default-export */

export const get = async (url, endPoint) => {
  const result = await fetch(`${url}${endPoint}`);
  return result.json();
};

export const post = async (url, endPoint, body) => {
  const result = await fetch(`${url}${endPoint}`, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://localhost:8080/',
    },
  });
  return result;
};