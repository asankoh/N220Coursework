let dvText = document.getElementById("dvText")
let txtInput = document.getElementById("txtInput")


function average(){


var stringNums = txtInput.value;
let numberArray = stringNums.split(",");

let sum = 0;
let average = 0

for(let i = 0; i < numberArray.length; i++){
    sum +=Number(numberArray[i]);
    average = sum / numberArray.length

}




dvText.innerHTML = "Average:" + average +  "<br/>" +  "Sum:" + sum
}