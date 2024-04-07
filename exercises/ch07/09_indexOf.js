function indexOf(arr, value) {
    return arr
        .map((v, i) => v === value ? i: undefined)
        .filter(i => i !== undefined);
}

console.log(indexOf([34, -2, 0, 354, 12, -9, 2, -2, 0, 24, 21], -2));