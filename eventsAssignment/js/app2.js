let colorChange = document.getElementById("eventChange");
colorChange.addEventListener("click", itsChange);
for(var i = 0; i < 3; i++){
    colorChange.style.width = "500px" 
    colorChange.style.height = "200px"
    colorChange.style.backgroundColor = "#0000FF"
    colorChange.style.margin = "5px"
    }

function itsChange(event){
colorChange.style.backgroundColor = "#FFFFFF"
}

