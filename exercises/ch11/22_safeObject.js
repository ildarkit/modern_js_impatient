const getHandler = {
    get(target, key, receiver) {
        let result = Reflect.get(target, key, receiver);
        if (result === undefined || result === null)
            result = receiver;
        return result;
    },
};

function safe(obj) {
    return new Proxy(obj, getHandler);
}

const bob = safe({name: 'Bob', age: 30});
console.log(bob.prop1.prop2.name);