let dvSquare = document.getElementById("square")


dvSquare.innerHTML="square"
dvSquare.style.backgroundColor = "#FFED33"
dvSquare.style.width = "100px"
dvSquare.style.height = "100px"

function square () {
for(i=0; i < 100; i++){
    square(20,i * 2,20)
    fill(Math.random)
    console.log(i)
}
}