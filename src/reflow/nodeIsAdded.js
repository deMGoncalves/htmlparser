import * as f from 'f'

export default (node, vNode) =>
  f.and(!node, !!vNode)
