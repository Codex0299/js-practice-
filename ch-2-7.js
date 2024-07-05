// write a switch statement to log the day of the weak based on the number ex 1-monday 7-sunday
const prompt = require('prompt-sync')();
let dayNumber = prompt("Enter a number (1-7):");

switch (parseInt(dayNumber)) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number. Please enter a number between 1 and 7.");
}