let radius = 50;

function setup() {
background(0);
createCanvas (800,800);


}

function draw() {

     background(0);

    fill(255);
    circle(mouseX,mouseY,radius);

}

function mousePressed() {
    if(radius <= 100){
        radius = radius + 5;
    }
    }