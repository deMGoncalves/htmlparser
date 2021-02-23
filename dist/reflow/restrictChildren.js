import * as f from 'f';
import reflow from "./reflow";
export default (node, vNode) => f.forEach(f.zip(node.children, vNode.children), (args) => reflow(...args, node));
