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

let n = 20;
let delayValues = new Array(n);
for (let i = 0; i < delayValues.length; i++) {
    let delay = Math.trunc(Math.random() * 1000) + 500;
    delayValues[i] = invokeAfterDelay(randomValue, delay);
}

Promise.all(delayValues)
    .then(values => values.reduce((accum, cur) => accum + cur))
    .then(value => console.log(value));