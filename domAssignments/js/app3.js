let dvImage= document.getElementById("image");
let z = 0
dvImage.innerHTML = "CHANGE";
dvImage.style.width = "100px";
dvImage.style.height = "200px";
dvImage.style.backgroundColor = "#eb0072";

function changeSomething(){
    let random = Math.random();
    let change = "YES"
    if(random > .5) change = "YES"
    dvImage.innerHTML = z+=1

if (change == "YES"){
    dvImage.style.backgroundColor = "#FF0000";
}else {
    dvImage.style.backgroundColor = "#eb0072";
}

}