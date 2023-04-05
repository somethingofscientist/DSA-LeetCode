
let num = 5

function fact(num) {
    if (num < 2) return 1
    return num * fact(num - 1)
}

// console.log(fact(num))

function fac(num) {
    let res = 1;
    for (let i = 0; i < num; i++) {
        res *= i
    }
    return res;
}
console.log(fact(num));