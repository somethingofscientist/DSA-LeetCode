console.log('hello map...')

const res = [5, 1, 7, 3, 1, 7, 9, 5, 4, 5, 1, 6];

function mapping() {
    let map = new Map();
    let result = [];

    for (let i = 0; i < res.length; i++) {
        map.set(res[i], map.get(res[i]) + 1 || 1)
    }

    for (let j of map) {
        if (j[1] > 1) {
            result.push(j[0])
        }
    }
    return result;
}

// console.log(mapping(res));
mapping(res);