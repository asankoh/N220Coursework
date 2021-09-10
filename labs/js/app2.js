function setup() {
    createCanvas (400,400);
// background(0);
}
console.log(setup)
// setup
function draw() {
//    background(200);
if (mouseX < 200){
mouseX = mouseX = 0; 
}

if (mouseY < 200){
    mouseY = mouseY = 0
}


background (0);
    fill(250,150,0);
    circle(mouseX, mouseY,40);
    // fill(orangehex)
// circle (400 -mouseX, 400 -mouseY , 50);
// noStroke();
}

// create an if statement in order to make the circle go the opposite way in which the mouse is.