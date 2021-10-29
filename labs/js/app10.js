let dvFortune = document.getElementById("fortune")
let myArray = ["Good Fortune is on the way!", "Time is a Virtue!", "Uhhh, Good Luck."];
let randIndex = Math.random() * myArray.length;
let randEntry = myArray[randIndex];
var i = Math.floor(Math.random() * myArray.length)

function display(){
console.log(myArray[i])
}