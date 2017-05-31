import styled from 'styled-components'
import { color } from '../../constants/styles'

const Heading = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1rem;
  color: ${ color.darkblue }
`

export const H1 = Heading
export const H2 = (Heading as any).withComponent('h2')
export const H3 = (Heading as any).withComponent('h3')
export const H4 = (Heading as any).withComponent('h4')
