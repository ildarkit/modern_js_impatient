class RandomPromiseLike {
    constructor(arg) {
        this.arg = arg;
    }
    then(resolved, rejected) {
        if (Math.round(Math.random()) === 0) {
            resolved(this.arg);
        }
        else {
            rejected(this.arg);
        }
    }
}

class Counter {
    constructor() {
        this.resolveCount = 0;
        this.rejectCount = 0;
    }
    resolve() {
        this.resolveCount++;
    }
    reject() {
        this.rejectCount++;
    }
    get resolved() {
        return this.resolveCount;
    } 
    get rejected() {
        return this.rejectCount;
    }
}

function printResult(result) {
    console.log(`resolved = ${result.resolved}, rejected = ${result.rejected}`);
}

let likePromise = new RandomPromiseLike(new Counter());
let promise = Promise.resolve(likePromise);
for (let i = 0; i < 1000; i++) {
    promise = promise.then(
        (c) => {
            c.resolve();
            return likePromise;
        },
        (c) => {
            c.reject();
            return likePromise;
        }
    );
}
promise.then(printResult, printResult);