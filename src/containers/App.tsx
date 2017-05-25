import * as React from 'react'
import styled from 'styled-components'
import { color } from '../constants/styles'
import Wrapper from '../components/wrapper'
import Header from '../components/header'

const CardContainer = styled.canvas`
  margin: 10px auto;
  width: ${ 336 * 2 }px;
  height: ${ 192 * 2 }px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
`

const H1 = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1rem;
  color: ${ color.darkblue }
`

class App extends React.Component<{}, null> {
  render() {
    const titleStyle = {
      color: 'rgba(0, 74, 124, 0.5)',
      textAlign: 'center',
      margin: '30px auto',
      fontSize: '1.2em'
    }

    return (
      <Wrapper>
        <Header/>
        <div id="main" className="main">
          <div className="title" style={ titleStyle }>
            <H1>CARD MAKER</H1>
            <div className="desc">
              If you need fast card name, <br/>
              this is the best tools that can make your productifity increase
            </div>
          </div>
          <div className="content">
            <CardContainer/>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default App
