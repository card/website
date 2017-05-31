import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../constants/styles'

const { tint } = require('polished')

const StyledLabel = styled.label`
  color: ${ tint(0.5, color.darkblue) };
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`

type props = {
  text?: string
}

class Label extends React.PureComponent<props, null> {
  render () {
    return (
      <StyledLabel>
        <span>{ this.props.text }</span>
        <div style={ { marginTop: '5px' } }>
          { this.props.children }
        </div>
      </StyledLabel>
    )
  }
}

export default Label
