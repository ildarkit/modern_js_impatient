let str = new String('Test');
Object.setPrototypeOf(str, Array.prototype);
console.log(str.map(element => element + element));
// console.log(str.reverse());
str.forEach(element => console.log(element.toUpperCase()));
console.log(str.join(' '));
console.log(str.flat());
console.log(str.flatMap(element => [[element.toUpperCase()]]));
// str.pop();
// str.push('a');
// str.sort();
// str.splice(2 ,0, 'T');
for (const v of str.values()) {
    console.log(v);
}