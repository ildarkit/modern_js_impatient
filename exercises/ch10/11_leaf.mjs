import Node from './11_node.mjs'

export default class Leaf extends Node {
    constructor(value) {
        super();
        this.value = value;
    }
    depth() {
        return 1;
    }
}