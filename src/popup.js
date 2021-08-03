const createElem = (tag, cl) => {
  const elem = document.createElement(tag);
  elem.classList.add(...cl);
  return elem;
}

const createImageWrapper = (img) => {
  const imageWrapper = createElem('article', ['image-wrapper', 'flex', 'flex-row']);
  imageWrapper.innerHTML = `<div class='image'>
        <img src="${img}" alt="image of an character">
      </div>
      <dv class='close-btn'>
        X
      </dv>`;
  return imageWrapper;
}

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
      </ul>`;
  return elem;
}

export const createPopup = (content) => {
  console.log(content);
  const wrapper = createElem('section', ['popup', 'flex', 'flex-col']);
  wrapper.append(
    createImageWrapper(content.image),
    createCharInfoWrapper(content)
  );

  return wrapper;

}