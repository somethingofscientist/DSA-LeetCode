
let num = 1

function isPrime(num) {
    if(num < 2) return 'not a prime number';
    for(let i=0; i<Math.sqrt(num); i++){
        if(num % i === 0){
            return "not a prime number";
        }
    }
    return "prime number"
}

console.log(isPrime(num));