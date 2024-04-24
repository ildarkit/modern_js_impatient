const createRange = (start, end) => {
    const isIndex = key =>
        typeof key === 'string' && /^[0-9]+$/.test(key) && parseInt(key) < end - start;

    const configDescriptorHandler = {
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
        }
    };
    const logEverythingHandler = new Proxy({}, getHandler);
    return new Proxy(new Proxy({}, configDescriptorHandler), logEverythingHandler);
};

const getHandler = {
    get(target, key, receiver) {
        return (...args) => {
            console.log(`Trapping ${key}`);
            return Reflect[key](...args);
        };
    }
};

const range = createRange(10, 100);
console.log(Object.keys(range));