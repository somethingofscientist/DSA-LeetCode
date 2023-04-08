const toggle = (...list) => {
    // to track the cycle
    let current = -1;
    const length = list.length;
    return function(){
      //moves to next element, resets to 0 when current > length
      current = (current + 1) % length;
      return list[current];
    }
  }

let hello = toggle("hello", "bye");
console.log(hello())
console.log(hello())

let onOff = toggle("on", "off");
console.log(onOff())
console.log(onOff())
console.log(onOff())