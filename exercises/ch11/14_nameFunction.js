function nameFunction(func) {
    return func.name;
}
function returnFunc() {
    return function() {};
}
function testFunc() {}
const testFunc1 = function() {};
const testFunc2 = () => {};

console.log(testFunc.name);
console.log(testFunc1.name);
console.log(testFunc2.name);
console.log(nameFunction(() => {}));
console.log(returnFunc().name)

