function dieTosses(n) {
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    n--;
                    if (n >= 0)
                        return {value: Math.floor(Math.random() * 6 + 1)};
                    else return {done: true};
                }
            };
        }
    };
}

console.log([...dieTosses(10)]);