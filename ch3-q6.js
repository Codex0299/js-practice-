//Write a while loop that finds the factorial of a given number n.

function factorial(n) {
    let result = 1;
    let i = n;
    while (i > 0) {
        result *= i;
        i--;
    }
    return result;
}

console.log(factorial(5));