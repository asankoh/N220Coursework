let cardDiv = document.querySelectorAll("cards")
for (let i = 0; i < cardDiv.length; i++){
cardDiv.addEventListener("click", itsChange);
}


function press(){
    
}

function itsChange(event){
    event.target.innerHTML = event.target.dataset.question;
}
