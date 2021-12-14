let red = 0;
let green = 0;
let blue = 0;

function changeColor(event) {
    let color = event.target.getAttribute("data-color");
    let number = Number(event.target.getAttribute("data-number"));
   
    document.getElementById("colorBox").style.backgroundColor = `rgb(${red},${green},${blue})`;
       
  }
