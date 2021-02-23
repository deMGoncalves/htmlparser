import * as f from 'f';
import execute from "./execute";
import reflow from 'htmlparser/src/reflow';
export default (state, component, children) => () => reflow(state[f.magic('__element__')], execute(state, component, children));
