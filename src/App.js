import styled from "styled-components";
import Logo from "./components/Logo"
import React from "react"
import cards from "./constants/cards"

import Card from "./components/Card"


function App() {

  const [counter, setCounter] = React.useState([])

  return (
    <Body>
      <Logo></Logo>
      <ContainerQuestions>
        {cards.map((e, i) => {
          return <Card num={i + 1} key={i} question={e.question} answer={e.answer} cards={cards} setCounter={setCounter} counter={counter}></Card>
        })}
      </ContainerQuestions>
      <Footer>
        <p>{counter}/{cards.length} Concluidos</p>
      </Footer>
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color: #FB6B6B;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ContainerQuestions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100vw;

    align-items: center;
    margin-top: 50px;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10vh;

    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    height: 70px;

    background-color: #ffffff;
    align-items: center;

    p {
        font-family: 'Recursive', sans-serif;
        color: black;
    }
`
