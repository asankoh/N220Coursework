let xPos = 0;
let radius= 20;

function setup(){
    background(200);
    createCanvas (800,600);
}

function draw(){
    xPos = xPos + 5;
    background (200);
    circle(xPos, 300, radius);
fill(30,30,200)
strokeWeight(5);
    if (xPos > 800){
        xPos = 0;
    }
}


