let dvSquare = document.getElementById("square")


dvSquare.innerHTML="ICE";
dvSquare.style.backgroundColor = "#00FF00";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

function pressSquare() {
    let width = Math.random();
    let height = "heads";
    if(width > .5) height ="heads"
    dvSquare.innerHTML = height;
    
    if (height == "heads"){
        dvSquare.style.backgroundColor = "#eb5634";

    } else {
        dvSquare.style.backgroundColor = "#00FF00"
    }

}
