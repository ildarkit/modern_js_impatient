Set.prototype.map = function(func) {
    return new Set(Array.from(this).map(func));
};

Set.prototype.forEach = function(func) {
    Array.from(this).forEach(func);
};

Set.prototype.filter = function(func) {
    return new Set(Array.from(this).filter(func));
};

Set.prototype.some = function(func) {
    return Array.from(this).some(func);
};

Set.prototype.every = function(func) {
    return Array.from(this).every(func);
};

let values = new Set([4, 23, 55, -43, 68, 342, -3, 0, 23]);
console.log(values);
console.log(values.map(v => v / 2));
values.forEach(v => console.log(v / 2));
console.log(values.filter(v => v > 0));
console.log(values.some(v => v === 0));
console.log(values.every(v => v > 0));