
let num = 8

function fib(num) {
    if (num < 2) return num;
    return fib(num - 1) + fib(num - 2)
}

for (let i = 2; i < num; i++) {
    console.log(fib(i));
}