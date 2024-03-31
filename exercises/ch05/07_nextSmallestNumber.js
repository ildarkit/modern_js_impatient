function reprDoubleAfterInt(num) {
    if (num % 1 !== 0) return;
    let absNum = Math.abs(num);
    let sign = num >= 0 ? 1: -1;
    return sign * absNum + sign * 2**(-53 + absNum.toString(2).length);
}

console.log(reprDoubleAfterInt(1.95));
console.log(reprDoubleAfterInt(1));
console.log(reprDoubleAfterInt(2));
console.log(reprDoubleAfterInt(3));
console.log(reprDoubleAfterInt(4));
console.log(reprDoubleAfterInt(5));
console.log(reprDoubleAfterInt(6));
console.log(reprDoubleAfterInt(7));
console.log(reprDoubleAfterInt(8));
console.log(reprDoubleAfterInt(9));
console.log(reprDoubleAfterInt(0));
console.log(reprDoubleAfterInt(-1));
console.log(reprDoubleAfterInt(-2));
console.log(reprDoubleAfterInt(-3));
console.log(reprDoubleAfterInt(-4));
console.log(reprDoubleAfterInt(-5));
console.log(reprDoubleAfterInt(-6));
console.log(reprDoubleAfterInt(-7));
console.log(reprDoubleAfterInt(-8));
console.log(reprDoubleAfterInt(-9));
console.log(reprDoubleAfterInt(-0));