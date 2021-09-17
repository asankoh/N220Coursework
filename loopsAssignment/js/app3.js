function setup(){
createCanvas(400,400);
fill(255,0,0);
stroke(255)
}

function draw(){
    for(var x = 1; x <=4; x++) {
    for(var y = 1; y <=4;y++)  {
    square(x*20, y * 20, 20);
    }
    }
    }