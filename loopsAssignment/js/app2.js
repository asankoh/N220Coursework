
function setup(){
createCanvas(800,800)

}
function draw(){
        for(i = 1; i <26; i++) {
        if(i % 3 == 0){   
            fill(221,160,221)   
            circle(20 * i, 400,15)
            
        }else if (i % 5 == 0){
            fill(34,139,34);
            square(20 * i, 400, 10)
            console.log(square)
           
        }
        else if (i % 3 && i % 5 == 0){
            fill(0,50,255);
            square(20 * i, 200, 10)
        }
         else{
            fill(0)
            circle(20 * i, 400, 15)
         }
    }

    }

// loops stops once the variable statement is false
// % means if the variable is divisible with the given number
// tab out to aline code together
// position your code to what would make sense
// don't put an else if or if statement inside another if or else