class Node {
    constructor(value, ...children) {
        this.value = value;
        this.children = children;
    }
}

function treeIterate(node) {
    let queue = [node];
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    node = queue.shift();
                    if (node === undefined)
                        return {done: true};
                    if (node.children !== undefined) 
                        queue = queue.concat(node.children);
                    return {value: node.value};
                }
            };
        }
    };
}

const tree = new Node(
    'item1',
    new Node('item2'),
    new Node(
        'item3',
        new Node(
            'item4',
            new Node('item5')
        ),
        new Node(
            'item6',
            new Node(
                'item7',
                new Node('item8'),
                new Node('item9'),
            ),
            new Node('item10'),
        ),
    ),
);

console.log([...treeIterate(tree)]);