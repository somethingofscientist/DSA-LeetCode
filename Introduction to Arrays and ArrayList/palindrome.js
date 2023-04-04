console.log("Palindrome Recursion")

function isPalindrom(str) {
    if(str.length <= 1) return 1;
    return (str[0] == str.slice(-1) && isPalindrom(str.slice(1,-1)))
}


console.log(isPalindrom("sahillihas"));