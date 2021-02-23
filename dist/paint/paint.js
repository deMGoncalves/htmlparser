import * as f from 'f';
import object from "./object";
import functor from "./functor";
export default (component) => (Klass) => new Proxy(function (props, children) {
    return (this instanceof Klass)
        ? object(new Klass(...arguments), component)
        : functor(new Klass(Object.assign({}, props)), component, children);
}, {
    get: (_, key) => Klass[key],
    set: (_, key, value) => f.T(Klass[key] = value)
});
