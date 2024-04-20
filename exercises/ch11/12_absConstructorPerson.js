class Person {
    constructor(name, age) {
        if (this.constructor === Person)
            throw Error(`${this.constructor.name} is abstract class`);
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
