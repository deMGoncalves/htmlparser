export default (value) =>
  self.postMessage({ type: 'location:assign', payload: { value } })
