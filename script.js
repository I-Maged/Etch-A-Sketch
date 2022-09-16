const palette = document.querySelector('.palette');
const header = document.querySelector('.header');
const colorPicker = document.querySelector('.color-picker');
const rangePicker = document.querySelector('.range-picker');

//Controls color
let color = `#cccccc`;

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

  palette.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  palette.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'green';
    square.setAttribute('draggable', 'false');
    square.style.border = '1px solid #cccccc';
    square.classList.add('mystyle');
    palette.appendChild(square);

    //listener to grid click
    square.addEventListener('mousedown', draw);
  }
  console.log(color);
};

//listener to grid hovering
palette.addEventListener('mouseover', (e) => {
  if (e.target.className == 'mystyle' && e.buttons == 1) draw(e);
});

//changes square color
function draw(e) {
  e.target.style.backgroundColor = color;
}

//listener to grid size
rangePicker.addEventListener('input', (e) => drawGrid(Number(e.target.value)));

//Draw grid at start
drawGrid(rangePicker.value);
