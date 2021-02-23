import * as f from 'f'

const removeAttribute = (node, key) => (
  self.postMessage({
    type: 'removeAttribute',
    payload: {
      '@unid': node['@unid'],
      key
    }
  }),

  (delete node.attributes[key])
)

export default f.curry(removeAttribute)
