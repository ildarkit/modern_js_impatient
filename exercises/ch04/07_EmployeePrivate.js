class Employee {
    #name
    #salary
    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }
    raiseSalary(percent) {
        this.#salary *= 1 + percent / 100;
    }
    get name() {
        return this.#name;
    }
    get salary() {
        return this.#salary;
    }
}

const withGreeter = Base =>
    class extends Base {
        greet(greeting) {
            return `${greeting}, ${this.name}`;
        }
    };

const GreetableEmployee = withGreeter(Employee);
const e = new GreetableEmployee('Harry Smith', 90000);
console.log(e.greet('Hello'));
e.raiseSalary(10);
console.log(`${e.name} salary = ${e.salary.toFixed(4)}`);