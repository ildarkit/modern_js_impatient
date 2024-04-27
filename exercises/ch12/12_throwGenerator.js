function* generator() {
    yield 'value';
}

function* throwErrorIntoGenerator() {
    try {
        yield 'value';
    } catch {
        throw new Error('throw error into generator');
    }
}

function* catchErrorAndReturn() {
    try {
        yield 'value';
    } catch {}
    return 'another value';
}

function* catchErrorAndYield() {
    try {
        yield 'value';
    } catch {}
    yield 'another value';
}

let gen = generator();
gen.next();
try {
    gen.throw(new Error('method throw of generator'));
} catch (e) {
    console.error(e.message);
    console.log(gen.next());
}

gen = throwErrorIntoGenerator();
gen.next();
try {
    gen.throw();
} catch (e) {
    console.log(e.message);
    console.log(gen.next());
}

gen = catchErrorAndReturn();
gen.next();
console.log(gen.throw());

gen = catchErrorAndYield();
gen.next();
console.log(gen.throw());