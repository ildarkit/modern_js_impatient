function messageFormat(pattern, ...args) {
    let orders = [...pattern.matchAll(/(?<order>\d+)/gu)]
        .map(m => m.groups.order);
    let result = [];
    let restPartPattern = pattern;
    for (let i of orders) {
        let splits = restPartPattern.split('{' + i + '}');
        result.push(splits[0]);
        result.push(args[i]);
        restPartPattern = splits[1];
    }
    result.push(restPartPattern);
    return result.join('');
}

console.log(messageFormat('{0} has {1} message', 'Bob', 3));
console.log(messageFormat('Il y a {1} messages pour {0}', 'Hélène', 2));