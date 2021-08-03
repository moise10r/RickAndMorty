/* eslint-disable import/prefer-default-export */
import * as Api from './api';

const rickMorttUrl = 'https://rickandmortyapi.com/api';
const involUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const getCharacters = async () => {
  const result = await Api.get(rickMorttUrl, '/character/[1,2,3,4,5,6,7,8,9,10]');
  console.log(result);
  return result;
};