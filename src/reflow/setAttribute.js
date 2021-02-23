import * as f from 'f'

const setAttribute = (node, key, value) =>
  self.postMessage({
    type: 'setAttribute',
    payload: {
      '@unid': node['@unid'],
      key,
      value: (node.attributes[key] = value)
    }
  })

export default f.curry(setAttribute)
