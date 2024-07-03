//wap to check the number is divisible by either 2 or 3 
const prompt = require('prompt-sync')();
let N =  prompt("enter number to check it is divisible by either 2 or  3 ")

if(N%2==0){
    console.log("number is divisible by 2")
}

if(N%3==0){
    console.log("number is divisible by 3")
}
if(N%2!=0 && N%3!=0){
    console.log("the number is not divisible by either 2 or 3 ")
}


