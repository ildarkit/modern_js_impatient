function createPoint(x, y) {
    return new Point(x, y);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    translate(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }
    scale(x) {
        this.x = this.x * x;
        this.y = this.y * x;
    }
};

let point = createPoint(100, 100);
console.log(`x = ${point.getX()}, y = ${point.getY()}`);
point.scale(5);
console.log(`x = ${point.getX()}, y = ${point.getY()}`);
point.translate(50, -30);
console.log(`x = ${point.getX()}, y = ${point.getY()}`);