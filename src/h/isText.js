import * as f from 'f'

export default f.cond(
  [f.is(String), f.T],
  [f.is(Number), f.T],
  [f.T, f.F]
)
