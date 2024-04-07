function rangeMaxMin(values) {
    return values.reduce(
        (accum, v) => [
            accum[0] < v ? v: accum[0],
            accum[1] > v ? v: accum[1]
        ],
        [0, 0]
    ).reduce((maxValue, minValue) => maxValue - minValue);
}

console.log(rangeMaxMin([5, 3, 384, 34, -9, 2, 5, 23, -8, -4, 34, 923, 4]));