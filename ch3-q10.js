//Write a while loop that finds the sum of all even numbers between 1 and n.



function sumOfEvens(n) {
    let sum = 0;
    let i = 2;
    while (i <= n) {
        sum += i;
        i += 2;
    }
    return sum;
}

console.log(sumOfEvens(10));