let txtInput = document.getElementById("txtInput")
let dvText = document.getElementById("dvText")
function search(){

let stringwords = txtInput.value
let wordArray = stringwords.split (" ")

let badWords = [ "Clear" , "Water" , "Tires" ]

dvText.innerHTML = "We Have Found" + total + "Bad Words"
console.log(total)
}