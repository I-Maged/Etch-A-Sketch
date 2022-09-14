let palette = document.querySelector('.palette');
let header = document.querySelector('.header');
let colorPicker = document.querySelector('.color-picker');

palette.style.gridTemplateColumns = `repeat(${50} , 1fr)`;
palette.style.gridTemplateRows = `repeat(${50} , 1fr)`;

console.log('Hello Etch -A-Sketch');

for (let i = 0; i < 2500; i++) {
  let square = document.createElement('div');
  square.style.backgroundColor = 'green';
  square.style.border = '1px solid #cccccc';
  palette.appendChild(square);
}

colorPicker.addEventListener('input', (e) => {
  console.log(e.target.value);
});
