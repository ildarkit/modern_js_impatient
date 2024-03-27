function plusMinusZero(x) {
    if (Object.is(x, -0)) return -1;
    if (Object.is(x, 0)) return 1;
    return 0;
}

function plusMinusZero2(x) {
    let n = 1 / x;
    if (n === Infinity) return 1;
    if (n === -Infinity) return -1;
    return 0;
}

console.log(plusMinusZero(-0) === plusMinusZero2(-0));
console.log(plusMinusZero(0) !== plusMinusZero(-0));
console.log(plusMinusZero(0) === plusMinusZero(+0));
console.log(plusMinusZero(0) !== plusMinusZero2(-0));
console.log(plusMinusZero(0) === plusMinusZero2(+0));
console.log(plusMinusZero(2) === plusMinusZero2(2));