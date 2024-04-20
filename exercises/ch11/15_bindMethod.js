class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const person = {name: 'Bob'};
const getName = Person.prototype.getName.bind(person);
console.log(getName());
