let txtInput = document.getElementById("txtInput")
let dvText = document.getElementById("dvText")

function search(){

let stringwords = txtInput.value
let wordArray = stringwords.split (" ")

let badWords = [ "Clear" , "Water" , "Tires" ]
let total = 0
for(i =  0; i < wordArray.length; i++){
    if (wordArray == badWords){
       total = total + 1
    }
}
dvText.innerHTML = "We Have Found" + total + "Bad Words"
console.log(total)
}