import './style.css';
import logo from './assets/R&M-logo.png';
import {
  getCharacters, postComment, getComment, postLike,
} from './controllers';

const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = logo;
logoWrapper.append(img);

async function test() {
  const like = await postLike({
    item_id: 'Moise',
  });
  const postCom = await postComment({
    item_id: 'item1',
    username: 'Jane5',
    comment: 'Hello5',
  });
  const getCharact = await getCharacters();
  const getCom = await getComment();
  console.log({
    like,
    postCom,
    getCharact,
    getCom,
  });
}
test();