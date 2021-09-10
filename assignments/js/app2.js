
let radius = 20


function setup(){
    background(0)
createCanvas(400,300);


}

function draw(){
    background(0);
circle(mouseX,mouseY,radius);
if (mouseX > 200){
 fill(255,0,0);   
}
if(mouseX < 200){
    fill(0,0,255);
}
}
