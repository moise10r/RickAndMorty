/* eslint-disable import/prefer-default-export */

export const get = async (url, endPoint) => {
  const result = await fetch(`${url}${endPoint}`);
  return result.json();
};

export const post = async (url, endPoint, body) => {
  const { result } = await fetch(`${url}${endPoint}`, {
    method: 'POST',
    body,
  });
  return result.json();
};