function* arrayGenerator(arr) {
    for (const e of arr)
        if (e.length > 1 && e[Symbol.iterator] !== undefined)
            yield* arrayGenerator(e);
        else yield e;
}

console.log([...arrayGenerator([1, 2, [3, [4, [5, 6], 7]], 'string', 9])]);