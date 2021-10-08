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
    circle(150,150,shape.height,shape.width)
}

console.log(draw)