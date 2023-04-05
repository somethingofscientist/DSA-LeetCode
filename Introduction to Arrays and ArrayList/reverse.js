
let num = "sahill"

function rev(num) {
    let string = num.toString();
    let j = string.length - 1;
    let res = ""
    for (let i = j; i >= 0; i--) {
        res += string[i]
    }
    return res;
}
console.log(rev(num))