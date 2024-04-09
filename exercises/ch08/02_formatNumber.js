function formatNumber(num, style = 'decimal', currency = 'RUB') {
    return num.toLocaleString([], { style, currency });
}

console.log(formatNumber(30456.5));
console.log(formatNumber(0.1, style = 'percent'));
console.log(formatNumber(9250.5, style = 'currency'));