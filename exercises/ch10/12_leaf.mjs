import {Node} from './12_tree.mjs'

export class Leaf extends Node {
    constructor(value) {
        super();
        this.value = value;
    }
    depth() {
        return 1;
    }
}