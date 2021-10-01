//  function setup(){
//   let thisarr = [];
//    let fiftyplus = [i]


    //  for(var i = 0; i < 100; i++){
    //  thisarr[i] = Math.random() * 100
    //  fiftyplus[i]= Math.random() * 100
    //  if(fiftyplus[i] >= 50.000){
    //  console.log(fiftyplus[i])
    //  }
//  }
// }

// the code above shows how to display numbers over a certain number.
// in this case, above 50 
// understand what .splice() does
    
function setup(){
let nums = [1,2,3,4,5]
let deletednums = []

deletedNums = nums.splice(1,2)
console.log(nums)
console.log(deletedNums)
}
