function app(n) {
    if(n == 51) return n
    console.log(n)
    return app(n - 1)
}
console.log(app(5))