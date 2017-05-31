import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../constants/styles'

export const StyledHeader = styled.header`
  border-bottom: 5px solid ${ color.darkblue };
  color: ${ color.darkblue };
  padding: 20px;
  margin: 0 -20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`

type Props = {}
type State = null

class Header extends React.PureComponent<Props, State> {
  render () {
    return (
      <StyledHeader id="top-header">
        Hello this is headers
      </StyledHeader>
    )
  }
}

export default Header
