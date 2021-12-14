let squareDiv = document.querySelectorAll("square");
squareDiv.addEventListener("click", itsChange);

//function itsChange(event){
  //  event.target.innerHTML = event.target.dataset.count
    //event.target.dataset.count ++
//}

function itsChange(event){
squareDiv.style.backgroundColor = "#FF0000"
}