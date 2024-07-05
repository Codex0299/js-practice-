//write a code to check if the number is even or odd
const prompt=require('prompt-sync')();
let number = prompt("Enter a number:");

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}