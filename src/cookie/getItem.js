import * as f from 'f'

export default (key) =>
  new Promise(function (resolve) {
    self.postMessage({ type: 'cookie:get', payload: { key } })
    self.addEventListener('message', (e) =>
      f.equal(e.data.type, 'cookie:get') && resolve(e.data.value))
  })
