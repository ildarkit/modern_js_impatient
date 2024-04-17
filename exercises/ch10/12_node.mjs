import {Leaf} from './12_tree.mjs'
import {Parent} from './12_tree.mjs'

export class Node {
    static from(value, ...children) {
        return children.length === 0 ? new Leaf(value)
            : new Parent(value, children);
    }
}