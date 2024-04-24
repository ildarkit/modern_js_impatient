function defineTargetRangeObject(start, end) {
    const targetObj = {};
    Object.defineProperties(targetObj, {
        length: {
            value: end - start,
            writable: true,
        },
        toString: {
            value: () => {
                return Array
                    .from({length: targetObj.length}, (v, i) => i + start)
                    .join(',');
            },
            writable: true,
        }
    });
    return targetObj;
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
        }
    };
}

const createRange = (start, end) => {
    const obj = defineTargetRangeObject(start, end); 
    return new Proxy(obj, rangeHandler(start, end));
};

const range = createRange(10, 100);
console.log(Object.keys(range));
console.log(range.toString())
console.log(range.length);