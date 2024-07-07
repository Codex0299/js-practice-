//Write a while loop that prints the first n Fibonacci numbers.

function printFibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm, count = 0;
    while (count < n) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        count++;
    }
}

printFibonacci(10);