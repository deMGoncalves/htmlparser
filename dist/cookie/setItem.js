export default (key, value) => self.postMessage({ type: 'cookie:set', payload: { key, value } });
