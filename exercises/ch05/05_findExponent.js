function exponent(num) {
    let posNum = num > 0 ? num: -1 * num;
    let startNum = posNum;
    let intNum = startNum << 1 >> 1;
    let exp = 0;

    if (intNum > 0 && intNum < 10)
        return exp;

	while (startNum > 9) {
        startNum /= 10;
        exp++;
	}
    if (exp > 0) return exp;
    exp = 0;
    startNum = posNum;
    while (startNum < 1) {
        startNum *= 10;
        exp--;
    }
	return exp; 
} 

console.log(exponent(-0.32));
console.log(exponent(0.9));
console.log(exponent(-9.09));
console.log(exponent(32.32));
console.log(exponent(-32.32));
console.log(exponent(100.32));
console.log(exponent(87.3));
console.log(exponent(-87.3));
