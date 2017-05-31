import styled from 'styled-components'
import { color } from '../../constants/styles'

const { tint } = require('polished')

export const InputText = styled.input`
  color: ${ color.darkblue };
  padding: 15px;
  font-size: 20px;
  width: 100%;
  outline: none;
  border-radius: 3px;
  border: 1px solid rgba(43, 90, 132, 0.28);
  &:focus {
    border-color: ${ tint(0.5, color.darkblue) };
  }
`
