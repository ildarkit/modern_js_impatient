function invokeLater(f, amount, delay) {
    setTimeout(() => f(amount), delay);
}

function depositInfo(account) {
    return (amount) => account.deposit(amount);
}

class BankAccount {
    #balance = 0
    deposit(amount) {
        this.#balance += amount;
    }
    get balance() {
        return this.#balance;
    }
}

let sallysAccount = new BankAccount();
console.log(`Sally's balance = ${sallysAccount.balance}`);
invokeLater(depositInfo(sallysAccount), 1000, 1000);
setTimeout(() => console.log(`Sally's balance = ${sallysAccount.balance}`), 1000);
