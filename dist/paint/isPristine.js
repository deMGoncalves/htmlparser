import * as f from 'f';
export default f.compose(f.not, f.has(f.magic('__element__')));
