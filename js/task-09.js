function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorChangeBtn: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  colorCode: document.querySelector('.color'),
}

refs.colorChangeBtn.addEventListener('click', onClickColorChange);

function onClickColorChange(event) {
  const color = getRandomHexColor();
  refs.colorCode.textContent = color;
  refs.body.setAttribute('style', `background-color:${color}`)
}