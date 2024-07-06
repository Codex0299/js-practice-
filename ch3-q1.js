//program to add first n natural number in input 
const prompt = require('prompt-sync')();
let n = prompt("enter number to add");
let sum = 0;
n =Number.parseInt(n)
for(let i = 0; i<n; i++)
{
    sum += (i+1)

}
console.log("  sum of first " +n+ "  natural number is " +sum)
