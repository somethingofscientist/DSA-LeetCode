let str = "khnj nkjfr nfjew"

const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str2 = arr.join(" ");
console.log(str2);


// function capRecursive(arr) {
//     let res = []

//     if (arr.length === 0) return []
//     let s = arr[0][0].toUpperCase() + arr[0].slice(1)
//     res.push(s)
//     return res.concat(capRecursive(arr.slice(1)))
// }

// let arr = ['sahil', 'anchal', 'niya']
// console.log(capRecursive(arr))