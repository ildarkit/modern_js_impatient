function produceAfterDelay(result, delay) {
    return new Promise(resolve => {
        const callback = () => resolve(result);
        setTimeout(callback, delay);
    });
}

class TimedRange {
    constructor(start, end, delay) {
        this.start = start;
        this.end = end;
        this.delay = delay;
    }

    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        const delay = this.delay;
        let result;
        return {
            next() {
                if (current < end)
                    result = {value: produceAfterDelay(current, delay)}; 
                else result = {done: true}; 
                current++;
                return result;
            }
        };
    }
}

for (const range of new TimedRange(10, 15, 100)) {
    const value = await range;
    console.log(`Promise resolved: ${value}`);
}
