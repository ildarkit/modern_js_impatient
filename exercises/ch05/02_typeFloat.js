function typeFloatNumber(num) {
    if (Math.abs(num) < Number.EPSILON) return 'denormalized';
    if (Number.isFinite(num)) return 'normalized';
    return 'special';
}

let nums = [
    NaN,
    Infinity,
    -Infinity,
    0,
    -0,
    -1.0e-30,
    2.3e-22,
    1.0e-5,
    -1.0e-5,
    1.0e+30,
    -1.0e+30
];
for (let num of nums)
    console.log(num, `is ${typeFloatNumber(num)}`);
