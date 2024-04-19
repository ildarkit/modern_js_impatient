const original = { name: "MDN" };
original.itself = original;
original.data = [1, 2, 3];

const clone = structuredClone(original);
clone.data.push(4);

console.assert(clone !== original);
console.assert(clone.name === "MDN");
console.assert(clone.itself === clone);
console.assert(clone.data !== original.data);