function prime(x) {
    if (x < 2) return 'no prime number'
    for (let i = 2; i < Math.sqrt(x); i++) {
        if (x % i === 0) {
            return 'no prime number'
        }
    }
    return 'yes prime number'
}

console.log(prime(0))