import './style.css';
import logo from './assets/R&M-logo.png';
import { getCharacters } from './controllers';

const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = logo;
logoWrapper.append(img);
const render = async () => {
  const items = await getCharacters();
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
    <div class="comment"><button class="btn">Comment</button></div>
    <div class="reserv"><button class="btn">Reservation</button></div>`;
    list.appendChild(li);
  });
};

render();
