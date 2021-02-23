import * as f from 'f';
const setAttribute = (attributes, key, value) => f.always(attributes)(attributes[key] = value);
export default f.curry(setAttribute);
