import Node from './11_node.mjs'

export default class Parent extends Node {
    constructor(value, children) {
        super();
        this.value = value;
        this.children = children;
    }
    depth() {
        return 1 + Math.max(
            ...this.children.map(c => c.depth())
        );
    }
}