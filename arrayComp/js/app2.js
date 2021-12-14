let txtInput = document.getElementById("txtInput")
let dvText = document.getElementById("dvText")
let badWords = [ "Clear" , "Water" , "Tires" ]
words = [];
function search(){
let words = txtInput.value.split(" ")
txtInput.value = " ";
dvText.innerHTML = " ";
let total = 0
for(i =  0; i < words.length; i++){
     let element = words[i]; 
        if(badWords.includes(element)){
            total++;   
        }   
    } 
    if(total == 0){
        dvText.innerHTML = "No bad words found "; 
    }
    else{
        dvText.innerHTML = `Yes there was bad words found a total of ${total} words found. `;
    }
}
console.log(dvText.value)