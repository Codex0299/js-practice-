//wap to check wheather you can drive or not using turnary operator
const prompt = require('prompt-sync') ();
let a = prompt("enter your age")
console.log("you can", (a<18? "not drive":"drive"))