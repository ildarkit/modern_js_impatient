class BankAccount {
    #balance
    constructor(balance) {
        this.#balance = balance;
    }
    get balance() {
        return this.#balance;
    }
    set balance(value) {
        this.#balance = value;
    }
}

class SavingsAccount extends BankAccount {
    #rate
    constructor(balance, rate) {
        super(balance);
        this.#rate = rate;
    }
    addInterest() {
        this.balance += this.balance * this.rate / 100; 
    }
    get rate() {
        return this.#rate;
    }
}

class CheckingAccount extends BankAccount {
    constructor(balance) {
        super(balance);
    }
    withdraw(amount, rate) {
        let total = amount + amount * rate / 100;
        if (this.balance >= total) {
            this.balance -= total;
        }
    }
}

let saving = new SavingsAccount(100, 10);
saving.addInterest();
console.log(saving.balance);

let checking = new CheckingAccount(100);
checking.withdraw(20, 1);
console.log(checking.balance);