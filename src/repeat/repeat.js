import h from 'htmlparser/src/h'
import * as f from 'f'
import Fragment from 'htmlparser/src/fragment'

export default (props) =>
  <Fragment>
    {f.map(props.iterator, (attrs, index) => props.component(attrs, index))}
  </Fragment>
