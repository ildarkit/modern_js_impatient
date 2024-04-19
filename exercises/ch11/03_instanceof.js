class Natural {
    static [Symbol.hasInstance](obj) {
        if (!(obj instanceof Number) && obj === Object(obj)) return false;
        const num = Number(obj);
        return !Number.isNaN(num) && (num % 1 === 0) && num >= 0;
    }
}

function Range(start, end) {
    [start, end] = start < end ? [start, end] : [end, start];
    class NumRange {
        static [Symbol.hasInstance](obj) {
            return obj instanceof Natural &&
                obj >= start && obj < end;
        }
    }
    return new Proxy(NumRange, {
        get: (target, key, receiver) => {
            return Reflect.get(target, key, receiver)
        }
    });
};

let num = 342;
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(300, 400)`, num instanceof Range(300, 400));
num = 34.2;
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(30, 40)`, num instanceof Range(30, 40));
num = -342;
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(-400, 400)`, num instanceof Range(-400, 400));
num = '12.2';
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(10, 20)`, num instanceof Range(10, 20));
num = '2';
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(0, 10)`, num instanceof Range(0, 10));
num = -0;
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(0, 10)`, num instanceof Range(0, 10));
num = [1];
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(0, 10)`, num instanceof Range(0, 10));
num = [1, 2];
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(0, 3)`, num instanceof Range(0, 3));
num = {};
console.log(`${num} is instance of Natural`, num instanceof Natural);
console.log(`${num} is instance of Range(30, 40)`, num instanceof Range(30, 40));
