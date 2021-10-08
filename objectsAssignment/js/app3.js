let yPos=1

let shape = [
{  width: 100, height: 100, size: 50, color: "#4c405e"},
{  width: 75, height: 25, color: "#FFFF00" },
{  width: 200, height: 25, color: "#alc4d0"}

];


function setup() {
    createCanvas(300,300);
}

function draw(){
    background(130,100,200);
    fill(shape[2].color)
    circle(mouseX,circleSize(),shape[0].width, shape[0].height,)
    rect(0,0,shape[1].width,shape[1].height)

}
function circleSize(){
    yPos = yPos + 5
    if(yPos > 200){
        shape[1].width++
        yPos = 0
    }
    for(i=0;i<100;i = i=i+.05){
        circle(yPos + [i], 150, shape[0].width, shape[0].height)
    }
    }

