let dvSquare = document.getElementById("square")


dvSquare.style.backgroundColor = "#00FF00";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

function hoverSquare() {
    let change = "BLACK"
    let off = "GREEN"
    let width = "100px";
    let height = "100px";
    if (onmouseover) 
    dvSquare.innerHTML ="BLACK"    
    

    if  (change == "BLACK") {
        dvSquare.style.backgroundColor = "#000000";

    } 
}
function offSquare() {
if (onmouseout)
dvSquare.innerHTML = "GREEN"

if (off == "GREEN"){
dvSquare.style.backgroundColor = "#00FF00";
}

}
