import * as f from 'f';
const eventAreDifferent = (node, key, value) => f.and(f.test(/^on/, key), f.different(node.attributes[key], value));
export default f.curry(eventAreDifferent);
