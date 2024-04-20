class Person {
    constructor(name, age) {
        if (new.target !== undefined && new.target === Person)
            throw Error(`${new.target.name} is abstract class`);
        this.name = name;
        this.age = age;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}

class Employee extends Person {}

try {
    new Person('Bob', 65);
} catch (error) {
    console.error(error.message);
}
console.log(new Employee('Bob', 34).toString());
