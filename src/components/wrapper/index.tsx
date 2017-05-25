import * as React from 'react'
import styled from 'styled-components'
import { size } from '../../constants/styles'

const StyledWrapper = styled.div`
  background-color: white;
  margin: 0px auto;
  width: ${ size.container };
  max-width: 95%;
  min-height: 100vh;
  padding: 0 20px 30px;
`

export default (props: React.Props<{}>) => {
  return (
    <StyledWrapper className="wrapper">
      { props.children }
    </StyledWrapper>
  )
}
