function defineRangeProps(obj, start, end) {
    Object.defineProperties(obj, {
        length: {
            value: end - start,
            writable: true,
        },
        toString: {
            value: () => {
                return Array
                    .from({length: obj.length}, (v, i) => i + start)
                    .join(',');
            },
            writable: true,
        }
    });
    return obj;
}

function rangeHandler(start, end) {
    const isIndex = key =>
        typeof key === 'string' && /^[0-9]+$/.test(key) && parseInt(key) < end - start;
    return {
        get: (target, key, receiver) => {
            if (isIndex(key)) {
                return start + parseInt(key);
            } else {
                return Reflect.get(target, key, receiver);
            }
        },
        ownKeys: target => {
            const result = Reflect.ownKeys(target);
            for (let i = 0; i < target.length; i++)
                result.push(String(i));
            return result;
        },
        getOwnPropertyDescriptor: (target, key) => {
            if (isIndex(key)) {
                return {
                    value: start + Number(key),
                    writable: false,
                    enumerable: true,
                    configurable: true
                };
            } else {
                return Reflect.getOwnPropertyDescriptor(target, key);
            }
        },
        construct(target, ...args) {
            return new target(...args);
        }
    };
}

class Range extends Array {
    constructor(start, end) {
        super();
        if (start !== undefined && end !== undefined) {
            const obj = defineRangeProps(new Range(), start, end);
            return new Proxy(obj, rangeHandler(start, end));
        }
    }
    static get [Symbol.species]() {
        return Array;
    }
}

const range = new Range(10, 100);
console.log(range instanceof Range);
console.log(range);
console.log(range[10]);
console.log(Object.keys(range));
console.log(range.toString())
console.log(range.length);
const doubleRange = Array.from(range).map(v => v * 2);
console.log(doubleRange instanceof Array);
console.log(doubleRange);