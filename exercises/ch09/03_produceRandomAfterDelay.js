function invokeAfterDelay(func, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(func()), delay);
    });
}

function randomValue() {
    let v = Math.random();
    console.log(`random value = ${v}`);
    return v;
}

Promise.all([
    invokeAfterDelay(randomValue, 1000),
    invokeAfterDelay(randomValue, 500),
])
    .then(values => values.reduce((accum, cur) => accum + cur))
    .then(value => console.log(value));