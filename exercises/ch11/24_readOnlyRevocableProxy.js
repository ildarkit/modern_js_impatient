const readOnlyPropertyHandler = {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver);
    },
    set() {
        return false;
    }
};

function revocable(target, handler = readOnlyPropertyHandler) {
    return Proxy.revocable(target, handler);
}

const proxy = revocable({name: 'Bob', age: 35});
const bob = proxy.proxy;
bob.name = '';
console.log(bob);
proxy.revoke();
console.log(bob);
