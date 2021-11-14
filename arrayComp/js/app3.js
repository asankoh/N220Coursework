let txtInput = document.getElementById("txtInput")
let dvText = document.getElementById("dvText")
function search(){

let stringwords = txtInput.value
let wordArray = stringwords.split (" ")

let badWords = [ "Clear" , "Water" , "Tires" ]

var element = badWords.find( function(item) {
    return item == "Clear" + "Water" + "Tires"
})

dvText.innerHTML = "We Have Found" + element + "Bad Words"
console.log(element);

}