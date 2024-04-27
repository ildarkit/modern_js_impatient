function* sumGenerator() {
    let sum = 0;
    let value;
    while (value !== null) {
        value = yield;
        sum += value;
    }
    return sum;
}

function trueRandomSum(n, handler) {
    const accum = sumGenerator();
    accum.next();
    for (let i = 0; i < n; i++)
        accum.next(Math.floor(Math.random() * 10));

    handler(accum.next(null).value);
}

trueRandomSum(100, (sum) => console.log(sum));