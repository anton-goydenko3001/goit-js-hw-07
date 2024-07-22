function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = document.querySelector('input');
const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const boxesBox = document.getElementById('boxes');


btnCreate.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  let pxSize = 30;

  for (let i = 0; i < amount; i++) {
    const item = document.createElement('div');
    item.style.width = `${pxSize}px`;
    item.style.height = `${pxSize}px`;
    item.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(item);
    pxSize += 10;
  }

  boxesBox.appendChild(fragment);
}

function destroyBoxes() {
  boxesBox.innerHTML = '';
}
