let xPos = 1
let shape = {
    width: 100,
    height: 100, 
    size: 50,
    color: "#FFED00",
}

function setup() {
    createCanvas(300,300);
}

function draw(){
    background(130);
    fill(shape.color)
    circle(moveCircle(),150,shape.height,shape.width)
}

function moveCircle(){
    xPos = xPos + 5
    if (xPos > 300){
        xPos=0
    }
    for(i=0;i<10000;i = i + .5){
        circle(xPos + [i], 150, shape.width, shape.height)
    }
}

console.log(moveCircle)