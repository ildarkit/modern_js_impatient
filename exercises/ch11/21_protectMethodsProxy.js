const getHandler = {
    get(target, key, receiver) {
        return (...args) => {
            if (!args.some(arg => typeof arg === 'function'))
                return Reflect[key](...args);
        }
    }
};

const protectHandler = new Proxy({}, getHandler);

function overrideProtect(obj) {
    return new Proxy(obj, protectHandler);
}

function doublePush(element) {
    Array.prototype.push.call(this, element + element);
}

const arr = [1, 2, 3];
arr.push = doublePush;
arr.push(4);
console.log(arr);

const proxyArr = overrideProtect([1, 2, 3]);
proxyArr.push = doublePush;
proxyArr.push(4);
proxyArr.description = 'Protected Array from method overriding';
console.log(proxyArr);