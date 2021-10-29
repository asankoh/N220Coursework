let txtString = document.getElementById("txtString")

function doThing(){
let name = txtString.value

// make a new string
let backwards = "";

// loop backwards
for(let i = name.length - 1; i >= 0; i-- ){

// copy out each element
let char = name[i];

    // push into a new array
    backwards= backwards + char;
}
}
console.log(backwards);

// remember to comment out each section of code to help you understand
// what is being said.