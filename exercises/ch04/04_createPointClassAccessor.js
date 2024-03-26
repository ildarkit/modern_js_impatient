function createPoint(x, y) {
    return new Point(x, y);
}

class Point {
    constructor(x, y) {
        this.xCoord = x;
        this.yCoord = y;
    }
    get x() {
        return this.xCoord;
    }
    get y() {
        return this.yCoord;
    }
    #cleanValue(value) {
        let number;
        if (typeof value === 'string') {
            let n = Number(value);
            number = Number.isNaN(n) ? undefined: n;
        }
        else if (typeof value === 'number')
            number = value;
        return number;
    }
    set x(value) {
        let number = this.#cleanValue(value);
        if (number !== undefined)
            this.xCoord = number;
    }
    set y(value) {
        let number = this.#cleanValue(value);
        if (number !== undefined)
            this.yCoord = number;
    }
    translate(x, y) {
        this.xCoord = this.xCoord + x;
        this.yCoord = this.yCoord + y;
    }
    scale(x) {
        this.xCoord = this.xCoord * x;
        this.yCoord = this.yCoord * x;
    }
};

let point = createPoint(100, 100);
console.log(`x = ${point.x}, y = ${point.y}`);
point.scale(5);
console.log(`x = ${point.x}, y = ${point.y}`);
point.x = 'x';
point.y = '-100';
point.translate(50, -30);
console.log(`x = ${point.x}, y = ${point.y}`);