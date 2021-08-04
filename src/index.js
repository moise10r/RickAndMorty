/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
import './style.css';
import logo from './assets/R&M-logo.png';
import { getCharacters, getLikes, postLike } from './controllers';
import { createPopup } from './popup';
import itemCounter from './utils';

const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = logo;
logoWrapper.append(img);

const incrementLike = (likesBtn) => {
  likesBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      await postLike({
        item_id: btn.dataset.name,
      });
      location.reload();
    });
  });
};

let items = [];
const render = async (renderLike) => {
  items = await getCharacters();
  const list = document.querySelector('.items-list');
  list.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `  <div class="img-wrapper">
    <div class="img-bg"></div>
    <img src='${item.image}' alt="Img">
  </div>
    <div class="like-content flex">
      <div class="title">${item.name}</div>
      <div class="like flex">
      <span><i id='${item.id}' data-name='${item.name}' class="fas fa-heart"></i></span>
      <span>
          <span>Like</span>
          <span>${renderLike(item)}</span>
        </span>
      </div>
    </div>
    <div class="comment"><button id='${item.id}' class="comment-btn btn">Comment</button></div>
    <div class="reserv"><button class="reserv-btn btn">Reservation</button></div>`;
    list.appendChild(li);
  });
  incrementLike(document.querySelectorAll('.fas'));
  [...document.querySelectorAll('.comment-btn')].forEach((elem) => {
    elem.addEventListener('click', async () => {
      await createPopup(items[elem.id - 1], elem.id - 1);
    });
  });
};

const count = document.querySelector('#char-count');
window.addEventListener('load', async () => {
  const likes = [...await getLikes()];
  const renderLike = (item) => {
    let count = 0;
    likes.forEach((like) => {
      if (like.item_id === item.name) {
        count = like.likes;
      }
    });
    return count;
  };
  render(renderLike);
  const characters = await getCharacters();
  count.innerHTML = `(${itemCounter(characters)})`;
});
