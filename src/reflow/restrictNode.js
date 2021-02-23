import * as f from 'f'
import restrictAttributes from './restrictAttributes'
import restrictChildren from './restrictChildren'

export default f.chain(restrictAttributes, restrictChildren)
