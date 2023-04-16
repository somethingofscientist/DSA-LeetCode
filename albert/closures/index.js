const toggle = (...list) => {
    let current = -1
    let length = list.length

    return function () {
        current = (current + 1) % length
        return list[current];
    }
}
let a = ["on", "off"]
console.log(a.length)

const hello = toggle("on ", "off ");
console.log(hello());
console.log(hello());
console.log(hello());
console.log(hello());
console.log(hello());