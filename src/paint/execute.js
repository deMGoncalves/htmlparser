import * as f from 'f'

export default (state, component, children) =>
  f.assign(component(state, children), { [f.magic('__state__')]: state })
