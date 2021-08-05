/* eslint-disable import/prefer-default-export */
import * as Api from './api';

const rickMorttUrl = 'https://rickandmortyapi.com/api';
const involUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'TS0oHxL44n3MZxaNn5A7';

export const getCharacters = async () => {
  const result = await Api.get(rickMorttUrl, '/character/[1,2,3,4,5,6,7,8,9,10,11,12]');
  return result;
};

export const getComment = async (id) => {
  const result = await Api.get(involUrl, `apps/${appId}/comments?item_id=${id}`);
  return result;
};

export const postLike = async (body) => {
  const result = await Api.post(involUrl, `apps/${appId}/likes`, JSON.stringify(body));
  return result;
};

export const postComment = async (body) => {
  const result = await Api.post(involUrl, `apps/${appId}/comments`, JSON.stringify(body));
  return result;
};

export const getLikes = async () => {
  const result = await Api.get(involUrl, `apps/${appId}/likes/`);
  return result;
};