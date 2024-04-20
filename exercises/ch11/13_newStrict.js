'use strict'

function Person(name, age) {
    if (this !== undefined) {
        this.name = name;
        this.age = age;
    } else {
        console.log('call without new');
    }
}

Person('Bob', 23);
console.log(new Person('Bob', 23))