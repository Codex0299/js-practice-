// write if else to determine the year is leap year or not 
const prompt = require('prompt-sync')();
let year = prompt("Enter a year:");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("The year is a leap year.");
} else {
    console.log("The year is not a leap year.");
}