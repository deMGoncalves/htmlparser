import slot from 'htmlparser/src/slot'

export default (component, props, children) =>
  component(props, slot(children))
