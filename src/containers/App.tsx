import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
// import Header from '../components/Header'
import { H1 } from '../components/Heading'
import { InputText } from '../components/Input'
import Label from '../components/Label'

const CardContainer = styled.div`
  width: 680px;
  max-width: 100%;
  margin: 0 auto;
`

const CardCanvas = styled.canvas`
  max-width: 100%;
  margin: 10px auto;
  width: ${ 336 * 2 }px;
  height: ${ 192 * 2 }px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  background-color: #f9f9f9;
  background-image: url(${ require('../assets/images/noopcard.png') });
  background-size: cover;
  margin-bottom: 3em;
`

class App extends React.Component<{}, null> {
  public canvas: HTMLCanvasElement

  render() {
    const titleStyle = {
      color: 'rgba(0, 74, 124, 0.5)',
      textAlign: 'center',
      margin: '30px auto',
      fontSize: '1.2em'
    }

    return (
      <Wrapper>
        {/*<Header/>*/}
        <div id="main" className="main">
          <div className="title" style={ titleStyle }>
            <H1>CARDEVE</H1>
            <div className="desc">
              If you need fast card name, <br/>
              this is the best tools that can make your productifity increase
            </div>
          </div>
          <div className="content">
            <CardContainer>
              <CardCanvas ref={ (input: any) => this.canvas = input }/>
              <form action="">
                <Label text="name">
                  <InputText placeholder="type your name here .. ex: John Doe"/>
                </Label>
                <br/>
                <Label text="company">
                  <InputText placeholder="type your company name here .. ex: Lorem inc."/>
                </Label>
              </form>
            </CardContainer>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default App
