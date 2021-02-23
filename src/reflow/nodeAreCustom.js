import * as f from 'f'

export default (node, vNode) =>
  f.and(
    f.test(/^\w+-/, node.tagName),
    f.test(/^\w+-/, vNode.tagName),
    f.equal(node.tagName, vNode.tagName)
  )
