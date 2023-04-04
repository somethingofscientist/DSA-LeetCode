// counting in recursion 

const recursiveLoop = (x) => {
    // console.log(x); for decreasin order
    if (x > 1) {
        recursiveLoop(x - 1);
    };
    return x;
    // console.log(x) for increasing order
}
recursiveLoop(5);