class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    #salary: number;
    constructor(name: string, salary: number) {
        super(name);
        this.#salary = salary;
    }
    get salary() {
        return this.#salary;
    }
    raiseSalary(percent: number) {
        this.#salary *= 1 + percent / 100;
    }
}

type Pair<T> = { first: T, second: T };
const pairOfEmployee: Pair<Employee> = {
    first: new Employee('Bob', 100),
    second: new Employee('Alice', 120)
};
const pairOfPerson: Pair<Person> = pairOfEmployee;
pairOfPerson.second = new Person('Alice');
try {
    pairOfEmployee.first.raiseSalary(10);
    pairOfEmployee.second.raiseSalary(10);
} catch (e: any) {
    console.error(e.message);
}
