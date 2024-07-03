// write a program to check  wheather the number is divisible by 2-3 or not 

const prompt = require('prompt-sync') ();
let N = prompt("enter the number to check wheather it is divisible by 2 & 3 or not ")

switch(N%2&&3==0){
    case 0:
        console.log("it is divisible by 2 & 3 ")
        break
        default :
        console.log("number is not divisible by 2 or  3")
    
}