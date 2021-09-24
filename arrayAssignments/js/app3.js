let colors = ["#6033FF", "#336CFF", "#33D2FF","#6033FF", "#336CFF", "#33D2FF"]
let growth = [5, 10, 15,5,10,15,5,10,15,5,10,15,5,10,15]
var angle= 0

function setup(){
    createCanvas (600,600);
}

function draw (){
    translate(350,250)
    background(150,34,212)
    
    
    for(var i = 0; i < colors.length; i++){
    fill(colors[i])
    circle(20 * i, 150,growth[i] * 2, rotate(angle))

    if(angle < 36500){
    angle = angle + .001

}
}
}