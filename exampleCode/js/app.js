var x = 0
function setup() {
background(0);
    createCanvas (500,400);

}

//  function draw(){
//  background(204);
    // quad(158,55,199,14,392,66,351,107);
    // triangle(347,54,392,9,392,66);
    // triangle(158,55,290,91,290,112)
    // Shows how to make shapes and the coordinates for each shape. A Quad has 8 parameters
    //  Quad(x1,y1,x2,y2,x3,y3,x4,y4). A triangle has 6 parameters. triangle(x1,y1,x2,y2,x3,y3)
    
// }

function draw(){
    background(0);
    noFill();
// for loop syntax with if statement inside
    for(var x = 0; x <= 20; x = x + 4){
    stroke(255 -(x * 2))
circle(mouseX, mouseY, x * 5);
console.log(circle)
if (mouseX > 250){
fill(243,65,75);




}
}

}