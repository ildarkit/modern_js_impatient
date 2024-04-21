const logHandler = {
    get(target, key, receiver) {
        const result = target[key];
        console.log(`get ${key.toString()} as ${result}`);
        return result;
    },
    set(target, key, value, receiver) {
        console.log(`set ${key.toString()} to ${value}`);
        target[key] = value;
        return true;
    }
};

const proxyArr = new Proxy([], logHandler);
proxyArr[9] = 1;
console.log(proxyArr.length);
console.log(proxyArr);
