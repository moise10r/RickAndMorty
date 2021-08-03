import './style.css';
import logo from './assets/R&M-logo.png';
import { getCharacters } from './controllers';
import { createPopup } from './popup';

const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = logo;
logoWrapper.append(img);

let items = [];
const render = async () => {
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
      <span><i class="fas fa-heart"></i></span>
      <span>
          <span>Like</span>
          <span>2</span>
        </span>
      </div>
    </div>
    <div class="comment"><button id='${item.id}' class="btn">Comment</button></div>
    <div class="reserv"><button class="btn">Reservation</button></div>`;
    list.appendChild(li);
  });
  [...document.querySelectorAll('.btn')].forEach((elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('main').append(createPopup(items[elem.id - 1]));
    });
  });
};

render();