//perfomr switch case program 
const prompt = require('prompt-sync')();
let age = prompt("enter your age to check u are eligible for chess under 16 tournament");
// age = Number.parseInt(age)
switch (age){
 case "10":
    console.log("you are eligible ")
    break
    case "11":
    console.log("you are eligible ")
    break
    case "12":
    console.log("you are eligible ")
    break
    case "13":
    console.log("you are eligible ")
    break
    case ("14"):
    console.log("you are eligible ")
    break
    case "15":
    console.log("you are eligible ")
    break
    case "16":
    console.log("you are eligible ")
    break
    default:
        console.log("you are not eligible") 
}