// Fibonnacci

function fib(num) {
    if (num < 2) return num;
    return fib(num - 1) + fib(num - 2);
}
// console.log(fib(6))

let num = 6
for (let i = 0; i <= num; i++) {
    console.log(fib(i))
}