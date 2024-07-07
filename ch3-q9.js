//Using a do...while loop, write a program that reverses the digits of a given number

function reverseDigits(num) {
    let reversed = 0;
    do {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    } while (num > 0);
    return reversed;
}

console.log(reverseDigits(1234));