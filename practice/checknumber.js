
let num = -0.1

function isNumber(num) {
    if (num < 0) {
        return "number is negative"
    } else if (num > 0) {
        return "number is postive"
    } else {
        return "number is zero .... 0"
    }
}

console.log(isNumber(num))