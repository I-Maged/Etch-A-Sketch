const palette = document.querySelector('.palette');
const header = document.querySelector('.header');
const colorPicker = document.querySelector('.color-picker');
const rangePicker = document.querySelector('.range-picker');

const drawGrid = (size) => {
  palette.innerHTML = '';

  palette.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  palette.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size ** 2;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'green';
    square.style.border = '1px solid #cccccc';
    palette.appendChild(square);
  }
};

drawGrid(rangePicker.value);
rangePicker.onchange = (e) => drawGrid(Number(e.target.value));
