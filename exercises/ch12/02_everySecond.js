function everySecond(iterable) {
    return {
        [Symbol.iterator]() {
            const iterator = iterable[Symbol.iterator]();
            let current;
            return {
                next() {
                    current = iterator.next();
                    if (!current.done) {
                        iterator.next();
                        return {value: current};
                    } else return {done: true};
                }
            };
        }
    };
}

console.log([...everySecond([0, 1, 2, 3, 4, 5, 6, 7])]);