// factorial

// by recursion
let num = 5
function factorial(num) {
    if (num == 0) return 1
    return num * factorial(num - 1)
}
for(let i=0; i<num; i++){
    console.log(factorial(num))
}


// by simple loop
function fact(num) {
    let res = 1
    for (let i = 2; i <= num; i++) {
        res = res * i
    }
    return res;
}
// console.log(fact(5))