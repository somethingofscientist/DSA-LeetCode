
function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target === arr[mid])
            return mid + ` index of - ${target}`
        if (target < arr[mid]) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return 'element not found in the array'
}

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 16], 16)) // 4