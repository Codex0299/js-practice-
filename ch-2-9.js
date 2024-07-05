//write a switch statement writr a program that translate a grade into description 
const prompt = require('prompt-sync')();
let grade = prompt("Enter a grade (A, B, C, D, F):").toUpperCase();

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    case 'F':
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade. Please enter A, B, C, D, or F.");
}