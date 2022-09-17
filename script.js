const palette = document.querySelector('.palette');
const header = document.querySelector('.header');
const sizeText = document.querySelector('.grid-size-tex');
const colorPicker = document.querySelector('.color-picker');
const rangePicker = document.querySelector('.range-picker');
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', reset);

//Controls color
let color = `#000000`;

//listener to color change
colorPicker.addEventListener('input', (e) => {
  setColor(e.target.value);
});

//changes color
function setColor(newColor) {
  color = newColor;
}

//draws grid
const drawGrid = (size) => {
  palette.innerHTML = '';
  sizeText.innerHTML = `${size} X ${size}`;

  palette.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  palette.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'white';
    square.style.border = 'none';
    square.style.border = '1px solid #cccccc';
    square.classList.add('colorSquare');
    palette.appendChild(square);

    //listener to grid click
    square.addEventListener('mousedown', draw);
  }
};

//listener to grid hovering
palette.addEventListener('mouseover', (e) => {
  if (e.target.className == 'colorSquare' && e.buttons == 1) draw(e);
});

//changes square color
function draw(e) {
  e.target.style.backgroundColor = color;
}

//listener to grid size
rangePicker.addEventListener('input', (e) => drawGrid(Number(e.target.value)));

//Draw grid at start
drawGrid(rangePicker.value);

//Reset function
function reset() {
  color = `#000000`;
  colorPicker.value = `#000000`;
  drawGrid(16);
}
