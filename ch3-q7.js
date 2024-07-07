//Using a do...while loop, write a program that calculates the sum of digits of a given number

function sumOfDigits(num) {
    let sum = 0;
    do {
        sum += num % 10;
        num = Math.floor(num / 10);
    } while (num > 0);
    return sum;
}

console.log(sumOfDigits(1234));