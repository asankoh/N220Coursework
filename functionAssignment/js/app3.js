let divDisplay = document.getElementById("dvDisplay")
let index= ["Welcome Home", "Hears my About", "Hello Sir"]
function homeButton(){
    divDisplay.innerHTML = `Home: ${index[0]}`
}
homeButton();

function aboutButton(){
    divDisplay.innerHTML = `Home: ${index[1]}`

}

function helloButton(){
    divDisplay.innerHTML = `Home: ${index[2]}`
}
helloButton();
aboutButton();
