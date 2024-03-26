const mkString = (array, {
    separator = ',',
    leftDelimiter = '[',
    rightDelimiter = ']',
} = {}) => {
    return leftDelimiter + array.join(separator) + rightDelimiter;
};

let a = [3, 23, 5, 767];
console.log(mkString(a, {separator: ';'}));

