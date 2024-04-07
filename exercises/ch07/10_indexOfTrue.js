function indexOf(arr, predicate) {
    return arr
        .map((v, i) => predicate(v) ? i: undefined)
        .filter(i => i !== undefined);
}

console.log(indexOf([34, -2, 0, 354, 12, -9, 2, -2, 0, 24, 21], x => x > 0));