class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}

class Employee extends Person {}

console.log(new Person('Bob', 32).toString());
console.log(new Employee('Bob', 32).toString());