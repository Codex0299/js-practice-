// suing conditional operate check wheather the age lies between 10-20 or not 
const prompt = require('prompt-sync')();
let age = prompt("enter your age to check wheather it lies between 10 to 20 or not ")
if(age>10 && age<20){
    console.log("your age lies between 10 to 12")
}
else{
    console.log("your age does not lies between 10 - 20")
}