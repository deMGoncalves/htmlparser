import * as f from 'f';
const addEventListener = (node, event, listener) => self.postMessage({
    type: 'addEventListener',
    payload: {
        event,
        listener: (node.attributes[event] = listener)
    }
});
export default f.curry(addEventListener);
