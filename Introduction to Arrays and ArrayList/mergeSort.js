
let num = [4, 5, 2, 1, 100, 52, 23, 25, 3];

function mergeSort(num) {
    if (num.length < 2) return num;
    let mid = Math.floor(num.length / 2);
    let left = num.slice(0, mid);
    let right = num.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        }
        else {
            sorted.push(right.shift())
        }
    }
    const arr1 = [...sorted, ...left, ...right];
    return arr1;
}

console.log(mergeSort(num))