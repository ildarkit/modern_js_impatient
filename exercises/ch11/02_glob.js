class Glob {
    constructor(glob) {
        this.glob = glob;
        this.regExp = this.glob
            .replace(/\./g, '\\.')
            .replace(/\*/g, '[^/]*')
            .replace(/\?/g, '.?'); 
        this.flags = 'g';
    }

    [Symbol.match](str) {
        return str.match(this.glob);
    }

    [Symbol.matchAll](str) {
        return str.matchAll(new RegExp(this.regExp, this.flags));
    }

    [Symbol.replace](string, substitude, ...args) {
        return string.replace(
            new RegExp(this.regExp, this.flags),
            substitude,
            ...args
        );
    }

    [Symbol.search](str) {
        return str.search(this.regExp);
    }

    [Symbol.split](str, limit) {
        return str.split(this.glob, limit);
    }
}

const glob = new Glob('file*');
const filePath = '../folder/file1.txt';
console.log(filePath.match(glob));
console.log([...filePath.matchAll(glob)]);
console.log(filePath.replace(new Glob('file(?).*'), 'old.file$1.ini'));
console.log(filePath.search(new Glob('file?.*')));
console.log(filePath.split(new Glob('/')));