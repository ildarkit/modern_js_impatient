class Percent {
    constructor(rate) {
        this.rate = rate;
    }
    // toString() {
    //     return `${this.rate}%`;
    // }
    // valueOf() {
    //     return this.rate * 0.01;
    // }
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') return this.rate * 0.01;
        else return `${this.rate}%`;
    }
}

const result = new Percent(99.44);
console.log('Result ' + result);
console.log(10 + result);
console.log(2 * result);