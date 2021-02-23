import * as f from 'f'

export default (node, vNode) => (
  self.postMessage({
    type: 'replaceNode',
    payload: {
      '@unid': node['@unid'],
      node: vNode
    }
  }),

  f.assign(node, vNode)
)
