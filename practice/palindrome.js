
let string = 'saas';

function pal(string) {
    const a = string.split('');
    const b = a.reverse();
    const c = b.join('');
    // console.log(c);
    
    if (string === c) {
        return 'yes it is palidrome'
    }
    else {
        return 'no it is not a palindrome'
    }
}

console.log(pal(string));