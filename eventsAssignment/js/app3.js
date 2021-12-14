function flashCards(event) {
    let answer = event.target.getAttribute("data-question");
    document.getElementById("cards").innerHTML = answer;
  }