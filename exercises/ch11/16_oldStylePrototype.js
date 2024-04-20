function Employee(name ,salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.raiseSalary = function(percent) {
    this.salary *= 1 + percent / 100;
};

function Manager(name, salary) {
    const Super = Employee.prototype.constructor.bind(this, name, salary);
    Super();
}

const bob = new Manager('Bob', 1000);
Object.setPrototypeOf(bob, Employee.prototype);
console.log(bob);
bob.raiseSalary(10);
console.log(bob);
