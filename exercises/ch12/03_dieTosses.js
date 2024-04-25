const dieTosses = {[Symbol.iterator]() {return {next() {return Math.floor(Math.random() * 6 + 1)}}}};
const iter = dieTosses[Symbol.iterator]();
console.log(Array.from({length: 500}, () => iter.next()).toString());
