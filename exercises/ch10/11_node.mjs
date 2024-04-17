import Leaf from './11_leaf.mjs'
import Parent from './11_parent.mjs'

export default class Node {
    static from(value, ...children) {
        return children.length === 0 ? new Leaf(value)
            : new Parent(value, children);
    }
}