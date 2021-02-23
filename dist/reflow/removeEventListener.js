import * as f from 'f';
const removeEventListener = (node, event) => (self.postMessage({
    type: 'removeEventListener',
    payload: {
        '@unid': node['@unid'],
        event
    }
}),
    (delete node.attributes[event]));
export default f.curry(removeEventListener);
