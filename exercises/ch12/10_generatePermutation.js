function swap(obj, i, j) {
    [obj[i], obj[j]] = [obj[j], obj[i]];
}

function* heap_permutate(arr, k = arr.length) {
    if (k === 1)
        yield arr.slice();

    for (let i = 0; i < k; i++) {
        yield* heap_permutate(arr, k - 1);
        swap(arr, k % 2 === 0 ? i : 0, k - 1);
    }
}

console.log([...heap_permutate(['A', 'B', 'C'])]);
