let dvSquare = document.getElementById("square")
let squareWidth = "100px"
let squareHeight = "100px"


dvSquare.innerHTML = "square"
dvSquare.style.backgroundColor =  "#6CFF33"
dvSquare.style.width = squareWidth
dvSquare.style.height = squareHeight
dvSquare.style.margin = "auto"


function square(id){
    if(mousePressed){
        squareWidth = squareWidth + 10;
}
}