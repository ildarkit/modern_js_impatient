function* generator() {
    yield Math.random();
}

const genToPromise = (gen) => {
    const iter = gen();
    const nextPromise = () => {
        const result = iter.next();
        if (result.done) return Promise.resolve(result.value);
        else return Promise
            .resolve(result.value)
            .then(iter.next());
    };
    return nextPromise();
};

genToPromise(generator)
    .then(console.log);