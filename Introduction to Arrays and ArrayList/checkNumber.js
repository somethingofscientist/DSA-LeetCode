// Javascript Program to Check if a number is Positive, Negative, or Zero

let x = 0

function number_choosing(x) {
    if (x == 0) {
        return '0 --> zero'
    } else if (x > 0) {
        return "positve"
    } else {
        return 'negative'
    }
}

const n = x > 0 ? 'postive' : 'negative'
// console.log(n)

// console.log(number_choosing(x));
// console.log(x > 0)

// program to check if number is positive, negative or zero
let a = 0;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);