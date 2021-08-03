import './style.css';
import logo from './assets/R&M-logo.png';
import imgItem from './assets/Portfolio_2.png';
import {
  getCharacters, postComment, getComment, postLike,
} from './controllers';

const logoWrapper = document.querySelector('.logo');
const img = document.createElement('img');
img.src = logo;
logoWrapper.append(img);

async function render() {
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
render();

const list = document.querySelector('.items-list');

list.innerHTML = `
<li class="item">
<div class="img-wrapper">
  <img src='${imgItem}' alt="Img">
</div>
  <div class="like-content flex">
    <div class="title">Title</div>
    <div class="like flex">
    <span><i class="fas fa-heart"></i></span>
    <span>
        <span>Like</span>
        <span>2</span>
      </span>
    </div>
  </div>
  <div class="comment"><button class="btn">Comment</button></div>
  <div class="reserv"><button class="btn">Reservation</button></div>
</li>
<li class="item">
<div class="img-wrapper">
  <img src='${imgItem}' alt="Img">
</div>
  <div class="like-content flex">
    <div class="title">Title</div>
    <div class="like flex">
    <span><i class="fas fa-heart"></i></span>
    <span>
        <span>Like</span>
        <span>2</span>
      </span>
    </div>
  </div>
  <div class="comment"><button class="btn">Comment</button></div>
  <div class="reserv"><button class="btn">Reservation</button></div>
</li>
<li class="item">
<div class="img-wrapper">
  <img src='${imgItem}' alt="Img">
</div>
  <div class="like-content flex">
    <div class="title">Title</div>
    <div class="like flex">
    <span><i class="fas fa-heart"></i></span>
    <span>
        <span>Like</span>
        <span>2</span>
      </span>
    </div>
  </div>
  <div class="comment"><button class="btn">Comment</button></div>
  <div class="reserv"><button class="btn">Reservation</button></div>
</li>
<li class="item">
<div class="img-wrapper">
  <img src='${imgItem}' alt="Img">
</div>
  <div class="like-content flex">
    <div class="title">Title</div>
    <div class="like flex">
    <span><i class="fas fa-heart"></i></span>
    <span>
        <span>Like</span>
        <span>2</span>
      </span>
    </div>
  </div>
  <div class="comment"><button class="btn">Comment</button></div>
  <div class="reserv"><button class="btn">Reservation</button></div>
</li>
<li class="item">
<div class="img-wrapper">
  <img src='${imgItem}' alt="Img">
</div>
  <div class="like-content flex">
    <div class="title">Title</div>
    <div class="like flex">
    <span><i class="fas fa-heart"></i></span>
    <span>
        <span>Like</span>
        <span>2</span>
      </span>
    </div>
  </div>
  <div class="comment"><button class="btn">Comment</button></div>
  <div class="reserv"><button class="btn">Reservation</button></div>
</li>
<li class="item">
<div class="img-wrapper">
  <img src='${imgItem}' alt="Img">
</div>
  <div class="like-content flex">
    <div class="title">Title</div>
    <div class="like flex">
    <span><i class="fas fa-heart"></i></span>
    <span>
        <span>Like</span>
        <span>2</span>
      </span>
    </div>
  </div>
  <div class="comment"><button class="btn">Comment</button></div>
  <div class="reserv"><button class="btn">Reservation</button></div>
</li>
`;