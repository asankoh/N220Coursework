let divDisplay = document.getElementById("divDisplay")
let random = Math.floor(Math.random() * 11)

function randomNumber(){
 random
}


function generate(){
    for(i = 100; i < 500; i++){
    randomNumber();
    }
}
generate();
console.log(random)
