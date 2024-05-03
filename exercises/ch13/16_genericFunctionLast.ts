type Indexable = { length: number, [arg: number]: number | string };
const last = <T extends Indexable>(values: T) => values[values.length - 1];

const str = 'Hello';
console.log(last(str));
console.log(last([1, 2, 3]));
console.log(last(new Int32Array(1024)));