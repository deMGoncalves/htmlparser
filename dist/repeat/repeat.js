import h from 'htmlparser/src/h';
import * as f from 'f';
import Fragment from 'htmlparser/src/fragment';
export default (props) => h(Fragment, null, f.map(props.iterator, (attrs, index) => props.component(attrs, index)));
