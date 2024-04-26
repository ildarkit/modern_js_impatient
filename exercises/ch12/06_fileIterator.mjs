import * as fs from 'node:fs'
import * as readline from 'node:readline'

const find = async (filename, target) => {
    for await (const line of lines(filename)) {
        if (line.includes(target))
            return line;
    }
};

const lines = filename => {
    const reader = readline.createInterface({
        input: fs.createReadStream(filename, 'utf8'),
        crlfDelay: Infinity,
    });
    const lineIterator = reader[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]() {
            return {
                async next() {
                    const line = await lineIterator.next();
                    if (line.done) {
                        return this.return();
                    } else {
                        return {value: line.value};
                    }
                },
                ['return']() {
                    reader.close();
                    return {done: true};
                }
            };
        }
    };
};

console.log(await find('./06_test_file', 'some test query'));