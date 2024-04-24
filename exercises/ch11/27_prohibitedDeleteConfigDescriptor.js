const createRange = (start, end) => {
    const isIndex = key =>
        typeof key === 'string' && /^[0-9]+$/.test(key) && parseInt(key) < end - start;
    return new Proxy({}, {
        get: (target, key, receiver) => {
            if (isIndex(key)) {
                return start + parseInt(key);
            } else {
                return Reflect.get(target, key, receiver);
            }
        },
        ownKeys: target => {
            const result = Reflect.ownKeys(target);
            for (let i = 0; i < end - start; i++)
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
        deleteProperty: (target, key) => {
            if (isIndex(key)) return false;
            return Reflect.deleteProperty(target, key);
        },
        defineProperty: (target, key, descriptor) => {
            if (isIndex(key)) return false;
            return Reflect.defineProperty(target, key, descriptor);
        },
        has: (target, key) => {
            if (isIndex(key)) return true;
            return Reflect.has(target, key);
        }
    });
};

const range = createRange(10, 100);
console.log(Object.keys(range));
delete range[10];
console.log(range[10]);
range[10] = 10;
console.log(range[10]);
try {
    Object.defineProperty(
        range,
        '10',
        {value: 10, writable: true, enumerable: true, configurable: true}
    );
} catch (error) {
    console.log(error.message);
}
console.log(Object.getOwnPropertyDescriptor(range, '10'));
console.assert(0 in range);
console.assert(89 in range);