function freezeCompletely(obj, registry = new Map()) {
    if (typeof obj !== 'object') return obj;
    if (registry.has(obj)) return registry.get(obj);
    const props = Object.getOwnPropertyDescriptors(obj);
    let result = Array.isArray(obj) ? Array.from(obj) :
        Object.create(Object.getPrototypeOf(obj), props);
    registry.set(obj, Object.freeze(result));
    for (const prop in props) {
        result[prop] = freezeCompletely(obj[prop], registry);
    }
    return Object.freeze(result);
}

const fred = {name: 'Frad', detail: {age: 34, id: [2, 3, 4]}};
const barney = {name: 'Barney', detail: {age: 30, id: [1, 2]}};
fred.bestFriend = barney;
barney.bestFriend = fred;

const freezedFred = freezeCompletely(fred);
const freezedBarney = freezeCompletely(barney);
freezedFred.name = 'Fred';
freezedFred.detail.id.push(2);
console.log(freezedFred);

