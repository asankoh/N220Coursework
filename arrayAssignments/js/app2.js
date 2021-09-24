let positions =[5,0,0,]
let positionsTwo =[0,0,0,0,0]
function setup(){
    createCanvas(300,300);
    fill(45,250,20)
}
function draw() {
background(150)
    positionsTwo.push(mouseY)
    positionsTwo.shift(mouseX)
    positions.push(mouseX)
    positions.shift(mouseY)
    for(var i = 0; i < positionsTwo.length; i++){
        circle(positions[i], positionsTwo[i], 20 - i);
    }
}
