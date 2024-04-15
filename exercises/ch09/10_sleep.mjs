function sleep(delay) {
    return new Promise(resolve => {
        resolve(setTimeout(() => {}, delay));
    });
}

await sleep(1000);