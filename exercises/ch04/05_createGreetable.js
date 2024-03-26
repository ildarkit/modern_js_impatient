function createGreetable(str) {
    const result = new Greetable(str);
    return result;
}

class Greetable extends String {
    greet(greeting) {
        return `${greeting}, ${this}`;
    }
}

const g = createGreetable('World');
console.log(g.greet('Hello'));
console.log(g.substring(0, g.length));