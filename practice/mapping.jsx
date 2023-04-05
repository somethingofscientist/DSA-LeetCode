
let res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 4, 7, 1, 4, 5, 2, 5, 4]

function mapping(nums) {
    let result = []
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1)
    }

    // for single ---------------> 
    // for (let j of map) {
    //     if (j[1] === 1) {
    //         result.push(j[0])
    //     }
    // }

    // for duplicates ---------------> 
    for (let j of map) {
        if (j[1] > 1) {
            result.push(j[0])
        }
    }
    console.log(result);
    return result;
}

mapping(res);