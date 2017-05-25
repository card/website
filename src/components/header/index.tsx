import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #FBFBFB;
  padding: 20px;
  margin: 0 -20px;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, .15);
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
