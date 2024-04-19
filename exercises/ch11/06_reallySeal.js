function reallySeal(obj) {
    return new Proxy(Object.seal(obj), {
        get: (target, key, receiver) => {
            const prop = Reflect.get(target, key, receiver);
            if (prop === undefined)
                throw new Error(`Property ${key} not found`);
            return prop;
        }
    });
}

const person = {name: 'Alice', age: 43};
const sealedPerson = reallySeal(person);

console.log(sealedPerson.name, sealedPerson.age);
try {
    sealedPerson.fullname = 'Alice Wa';
    console.log(sealedPerson.fullname);
} catch (error) {
    console.error(error.message);
}