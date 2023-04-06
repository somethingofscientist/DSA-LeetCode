
let res = [] // empty array

function findTriplets(arr) {
    for (let i = 0; i < arr.length - 2; i++) { 
        let l = i + 1               // left
        let r = arr.length - 1      // right
        let x = arr[i]
        while (l < r) {
            let sum = x + arr[l] + arr[r]
            if (sum === 0) {
                return [i, l, r]
                l++
                r--
            }
            else if (sum > 0) {
                r--
            }
            else {
                l++
            }
        }
    }
    return false;
}