import * as f from 'f';
const removeClassName = (node, key) => (self.postMessage({
    type: 'removeClassName',
    payload: {
        '@unid': node['@unid'],
        key
    }
}),
    (delete node.attributes[key]));
export default f.curry(removeClassName);
