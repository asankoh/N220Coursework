let colors = ["#FF5733", "#33FFFC", "#6CFF33" ]

function setup() {
createCanvas(300,300);

    for(var i = 0; i < colors.length; i++){
        fill(colors[i])
        noStroke();
        rect( 50 * i, 150, 50);
    }

}
