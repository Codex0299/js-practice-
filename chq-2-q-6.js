//write a program if else statement to check if a number is positivee negative or zero 
const prompt = require('prompt-sync')();
let num = prompt("enter a number");
if (num>0) {
    console.log("the number is positive");
}
else if (num<0){
    console.log("the number is negetive");

}
else {
    console.log("the number is zero");
    
}