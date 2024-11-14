
const reset = document.querySelector("button");

let response = 0; 

reset.addEventListener("click", () => {
  let response = parseInt(prompt("How many squares you want? "), 10) || 0;
  if (response > 100){
    alert('Please try again with a number less than 100');
  } else {
  makeGrid(response);
  }
});

const container = document.querySelector(".container");


  function makeGrid(response) {
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '600px';
    container.style.height = '600px';

    const cellSize = 600 / response; 

    for (let i = 0; i < response * response; i++) {
      
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.addEventListener("mouseenter", ()=> setBg(cell));
        cell.addEventListener("mouseover", (event) => { 
          let currentOpacity = parseFloat(event.target.style.opacity) || 1;
          if (currentOpacity > 0){
            event.target.style.opacity = (currentOpacity - 0.1).toFixed(2);
          }

        });

        container.appendChild(cell);
        console.log(response);
      }
        
      };
    
 const setBg = (cell) => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  cell.style.backgroundColor = "#" + randomColor;
  
 };
 

 