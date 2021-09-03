let radius = 10;
let size = 500;
let color = FF5733; 

function setup() {
stroke (50);
background (0);
createCanvas(800,800);

}


function draw() {
    
rect(mouseX,mouseY,radius)
circle(mouseX,mouseY,radius)
stroke(mouseX, mouseY, radius)
triangle(mouseX, mouseY, radius)
}

function mousePressed(){
background(85);
if (radius <= 100) {
radius=radius + 5
}
}

function keyPressed(){
if (radius <= 100){
    radius = radius - 2
}
}
