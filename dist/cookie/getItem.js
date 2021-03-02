import * as f from 'f';
export default (key) => new Promise(function (resolve) {
    self.postMessage({ type: 'cookie:get', payload: { key } });
    self.addEventListener('message', (e) => f.and(f.equal(e.data.type, 'cookie:get'), f.equal(e.data.key, key)) && resolve(e.data.value));
});
