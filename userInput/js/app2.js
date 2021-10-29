let tipInput = document.getElementById("tipInput")
function calculate(){
    let tip = 1 + Math.floor(Math.random() * 5)
    let total = Number(tipInput.value)

    console.log("Tip:$" + tip, "Total:$" + (total + tip))
}