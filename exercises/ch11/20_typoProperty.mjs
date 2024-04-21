import levenshtein from 'js-levenshtein'

function getSimilarProperty(target, key) {
    let result;
    if (target === null) return undefined;
    
    const props = Object.getOwnPropertyNames(target);
    props.sort((a, b) => levenshtein(key, a) - levenshtein(key, b));
    const protoProperty = getSimilarProperty(Object.getPrototypeOf(target), key);
    if (protoProperty !== undefined)
        result = levenshtein(key, props[0]) < levenshtein(key, protoProperty) ?
            props[0] : protoProperty;
    else result = props[0];
    
    return result;
}

const levenshteinHandler = {
    get(target, key, receiver) {
        let result = target[key];
        if (result === undefined) {
            key = getSimilarProperty(target, key);
            result = target[key];
        }
        console.log(`get ${key.toString()} as ${result}`);
        return result;
    },
    set(target, key, value, receiver) {
        console.log(`set ${key.toString()} to ${value}`);
        target[key] = value;
        return true;
    }
};

class Person {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}

const bob = new Person('Bob', 35, 1000);
const proxy = new Proxy(bob, levenshteinHandler);
console.log(proxy.setName());
console.log(proxy.toStrin());