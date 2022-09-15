const palette = document.querySelector('.palette');
const header = document.querySelector('.header');
const colorPicker = document.querySelector('.color-picker');
const rangePicker = document.querySelector('.range-picker');

const drawGrid = (size) => {
  palette.innerHTML = '';

  palette.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  palette.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'green';
    square.style.border = '1px solid #cccccc';
    palette.appendChild(square);
  }
};

//listener to grid size
rangePicker.addEventListener('input', (e) => drawGrid(Number(e.target.value)));

//listener to drawing color
colorPicker.addEventListener('input', (e) => console.log(e.target.value));

//Draw grid at start
drawGrid(rangePicker.value);
