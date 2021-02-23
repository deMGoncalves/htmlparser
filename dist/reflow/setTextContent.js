import * as f from 'f';
export default (node, vNode) => self.postMessage({
    type: 'setTextContent',
    payload: f.assign(node, {
        textContent: vNode.textContent
    })
});
