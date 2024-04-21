console.assert(Array.isArray(Array.prototype));
console.assert([] instanceof Array);
const arr = [1, 2, 3];
Array.prototype.push(1234);
console.log(Object.getPrototypeOf(arr));