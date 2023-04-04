// Mapping 

function mapping(res) {
    let result = []
    let map = new Map();

    for (let i = 0; i < res.length; i++) {
        map.set(res[i], map.get(res[i]) + 1 || 1);
    }
    console.log(map);

    for (let j of map) {
        if (j[1] > 1) {
            result.push(j[0])
        }
    }

    console.log(result);
}
let res = [75, 75, 5, 5, 8, 86, 69, 2, 8966, 699, 6, 55558, 66, 66, 69, 996]
mapping(res)