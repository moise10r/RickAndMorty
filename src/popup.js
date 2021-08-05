/* eslint-disable import/prefer-default-export */
import { getComment, postComment } from './controllers';
import { getCommentsCounter } from './utils';

const createElem = (tag, cl) => {
  const elem = document.createElement(tag);
  elem.classList.add(...cl);
  return elem;
};

const wrapper = createElem('section', ['popup']); // popup wrapper
let comments = []; // comments array

const mainContainer = createElem('div', ['main-popup', 'flex', 'flex-col']);

const updateCommentCounts = () => {
  wrapper.querySelector('.comments-count').innerHTML = comments.length;
};

const removePopup = () => {
  const main = document.querySelector('main');
  main.removeChild(main.lastChild);
};

const setCloseEvent = (element) => {
  element.querySelector('.close').addEventListener('click', () => {
    removePopup();
  });
};

const createDate = () => {
  const d = new Date();
  const day = (`0${d.getDate()}`).slice(-2);
  const month = (`0${d.getMonth() + 1}`).slice(-2);
  const year = d.getFullYear();

  return `${year}-${month}-${day}`;
};

const updateComments = () => {
  const ul = wrapper.querySelector('.comments-ul');
  const li = document.createElement('li');
  const date = createDate();
  const comment = comments[comments.length - 1];
  li.innerHTML = `<span class='comment-date'>${date}</span>
    <span class='comment-user'>${comment.username}: </span>
    <span class='comment-comment'>${comment.comment}</span>`;
  ul.append(li);
};

const addComment = async (content, id) => {
  const nameInp = wrapper.querySelector('.name-inp');
  const commentInp = wrapper.querySelector('.comment-inp');
  const name = nameInp.value;
  const comment = commentInp.value;
  if (name && comment) {
    comments.push({ item_id: id, username: name, comment });
    updateComments();
    updateCommentCounts();
    nameInp.value = '';
    commentInp.value = '';
    postComment({ item_id: id, username: name, comment });
  }
};

const setAddComentEvent = (content, id) => {
  wrapper.querySelector('.add-comment-btn').addEventListener('click', () => {
    addComment(content, id);
  });
};

const createImageWrapper = (img) => {
  const imageWrapper = createElem('article', ['image-wrapper', 'flex', 'flex-row']);
  imageWrapper.innerHTML = `<div class='image'>
        <img src="${img}" alt="image of an character">
      </div>
      <div class='close-btn'>
        <span class="material-icons close">
close
</span>
      </div>`;
  return imageWrapper;
};

const createCharInfoWrapper = (info) => {
  const elem = createElem('article', ['char-info-wrapper']);
  elem.innerHTML = `<div class='char-name padding-20 text-center'>
        <h2>${info.name}</h2>
      </div>
      <ul class='char-info-ul flex flex-row'>
        <li>Gender: ${info.gender}</li>
        <li>Species: ${info.species}</li>
        <li>Status: ${info.status}</li>
        <li>Created: ${info.created}</li>
        <li>Location: ${info.location.name}</li>
        <li>Origin: ${info.origin.name}</li>
      </ul>`;
  return elem;
};

const createCommentsWrapper = async (id) => {
  comments = await getComment(id);
  if (!Array.isArray(comments)) comments = [];
  const elem = createElem('article', ['flex', 'flex-col', 'comment-wrapper']);
  elem.innerHTML = `<div class='text-center padding-20'>
        <h3>Comments (<span class='comments-count'>${getCommentsCounter(comments)}</span>)</h3>
      </div>`;

  const ul = createElem('ul', ['flex', 'flex-col', 'comments-ul']);
  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class='comment-date'>${comment.creation_date}</span>
    <span class='comment-user'>${comment.username}: </span>
    <span class='comment-comment'>${comment.comment}</span>`;
    ul.append(li);
  });
  elem.append(ul);
  return elem;
};

const createAddCommentSection = () => {
  const wrap = createElem('section', ['add-comment-section', 'flex', 'flex-col']);
  wrap.innerHTML = `<div class="container">
          <h3 class='text-center'>Add a comment</h3>
        </div>

        <div class="container">
          <input type='text' placeholder='Your name' class='name-inp'>
        </div>

        <div class="container">
          <textarea name="comment"  id="comment" cols="30" rows="10" placeholder='Your comment here' class='comment-inp'>
          </textarea>
        </div>

        <div class="container">
          <input type="button" value='Comment' class='add-comment-btn btn'>
        </div>`;
  return wrap;
};

export const createPopup = async (content, id) => {
  mainContainer.innerHTML = '';
  wrapper.innerHTML = '';
  mainContainer.append(
    createImageWrapper(content.image),
    createCharInfoWrapper(content),
    await createCommentsWrapper(id),
    createAddCommentSection(),
  );
  wrapper.append(mainContainer);
  setCloseEvent(wrapper);
  setAddComentEvent(content, id);

  document.querySelector('main').append(wrapper);
};