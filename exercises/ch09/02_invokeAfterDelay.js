function invokeAfterDelay(func, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(func()), delay);
    });
}

function randomValue() {
    return Math.random();
}

invokeAfterDelay(randomValue, 1000)
    .then(value => console.log(value));