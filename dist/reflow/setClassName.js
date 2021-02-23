import * as f from 'f';
const setClassName = (node, key, value) => self.postMessage({
    type: 'setClassName',
    payload: {
        '@unid': node['@unid'],
        key,
        value: (node.attributes[key] = f.join(f.flatten(f.concat([], value)), ' '))
    }
});
export default f.curry(setClassName);
