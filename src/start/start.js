import * as f from 'f'

export default (component) =>
  self.addEventListener('message', (e) =>
    f.equal(e.data.type, 'start') && self.postMessage({ type: 'render', payload: component(e.data.attrs) }))
