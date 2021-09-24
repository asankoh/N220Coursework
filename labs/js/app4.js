let oos = [ 15, 22, 10, 5 ];
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03" ]

function setup() {
  createCanvas(400, 400);
  

    translate(200,200);
  background(50);
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 40, cos(i)* 40, oos[i], rotate(360));
    if (mouseX > 200){
rotate(180)
    }
    if (mouseY < 200){
      rotate(0)
    }

  }
  }
  

 