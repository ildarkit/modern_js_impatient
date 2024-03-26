const constructCounter = (value, inc = 1) => {
    return {
        count: () => {
            let result = value;
            value += inc;
            return result;
        },
    }
};

const counter = constructCounter(0, 2);
console.log(counter.count());
console.log(counter.count());