function createPoint(x, y) {
    let result = {x, y};
    Object.setPrototypeOf(result, pointPrototype);
    return result;
}

const pointPrototype = {
    getX() {
        return this.x;
    },
    getY() {
        return this.y;
    },
    translate(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    },
    scale(x) {
        this.x = this.x * x;
        this.y = this.y * x;
    },
};

let point = createPoint(100, 100);
console.log(`x = ${point.getX()}, y = ${point.getY()}`);
point.scale(5);
console.log(`x = ${point.getX()}, y = ${point.getY()}`);
point.translate(50, -30);
console.log(`x = ${point.getX()}, y = ${point.getY()}`);