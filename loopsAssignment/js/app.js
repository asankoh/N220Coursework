function setup (){
    createCanvas(400,400);
    background(150);
}

function draw()  { 
    
// for loop syntax with if statement inside
    for(var x = 0; x <= 85; x=x+2){
circle(200, 200, x * 5,noFill());

    }
}

  // for( var x = 0; x <= 20; x++){
        // circle( 200, 200, (x * 2));
        // for(var x = 0; x <= 15; x++) {
            // circle(200,200,x * 5, stroke(0 * x));
            //  console.log(circle)