let dvSquare = document.getElementById("square")
let width = "100px"
let height = "100px"
let growth = "10px"
dvSquare.style.width = width
dvSquare.style.height = height
dvSquare.style.backgroundColor = "#00FF00" 
dvSquare.style.margin = "500px"
dvSquare.innerHTML = "grow"
function growSquare(){
   let words = "grow"
       if  (words == "grow") {
        dvSquare.style.width = "150px"
        dvSquare.style.height = "150px"
    } 
}

console.log(width)