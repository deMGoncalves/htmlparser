import * as f from 'f'
import execute from './execute.js'
import reflow from './reflow'

export default (state, component, children) =>
  f.assign(state, {
    [f.magic('__element__')]: execute(state, component, children),
    [f.magic('__reflow__')]: reflow(state, component, children)
  })
