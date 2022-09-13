let palette = document.querySelector('.palette');
let header = document.querySelector('.header');

palette.style.gridTemplateColumns = `repeat(${5} , 1fr)`;
palette.style.gridTemplateRows = `repeat(${9} , 1fr)`;

console.log('Hello Etch -A-Sketch');

for (let i = 0; i < 45; i++) {
  let square = document.createElement('div');
  square.style.backgroundColor = 'green';
  square.style.border = '1px solid black';
  palette.insertAdjacentElement('beforeend', square);
}
