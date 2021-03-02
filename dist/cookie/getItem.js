import * as f from 'f';
export default (key) => new Promise(function (resolve) {
    const id = new Date().getTime().toString(32);
    self.postMessage({ type: 'cookie:get', payload: { id, key } });
    self.addEventListener('message', (e) => f.and(f.equal(e.data.type, 'cookie:get'), f.equal(e.data.id, id)) && resolve(e.data.value));
});
