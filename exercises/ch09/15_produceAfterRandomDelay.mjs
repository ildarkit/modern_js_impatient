function produceAfterRandomDelay(num) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(num),
            Math.random() * 300 + Math.random() * (num * 2)
        );
    });
}

const numbers = Array.from({length: 10}, (n, i) => i + 1);
console.log(await Promise.all(numbers.map(produceAfterRandomDelay)));