import * as f from 'f';
const state = f.magic('__state__');
const stateAreDifferent = (node, vNode) => f.and(f.or(f.has(state, node), f.has(state, vNode)), f.different(node[state], vNode[state]));
export default stateAreDifferent;
