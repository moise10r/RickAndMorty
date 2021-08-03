import './style.css';
import logo from './assets/R&M-logo.png';
import { getCharacters, getComment, postComment } from './controllers';

const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = logo;
logoWrapper.append(img);

getCharacters().then((items) => {
  console.log(items);
});

postComment({
  item_id: 'Moise',
}).then((res) => {
  console.log(res);
});
