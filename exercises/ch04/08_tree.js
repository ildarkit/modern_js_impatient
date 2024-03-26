class Node {
    constructor(...children) {
        this.children = children;
    }
    depth() {
        if (this.children.length == 0)
            return 1;
        else
            return 1 + Math.max(
                ...this.children.map(n => n.depth())
            );
    }
}

let tree = new Node(
    new Node(
        new Node(),
        new Node(
            new Node(
                new Node(),
                new Node(),
            ),
        ),
    ),
    new Node(
        new Node(
            new Node(),
        ),
        new Node(
            new Node(
                new Node(),
                new Node(
                    new Node(
                        new Node(),
                        new Node(
                            new Node(),
                        ),
                    ),
                ),
            ),
            new Node(),
        ),
    ),
);

console.log(`tree depth = ${tree.depth()}`);
