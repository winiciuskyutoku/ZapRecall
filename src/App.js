import styled from "styled-components";
import Logo from "./components/Logo"
import React from "react"
import cards from "./constants/cards"

import Card from "./components/Card"


function App() {

  const [counter, setCounter] = React.useState(0)

  return (
    <Body>
      <Logo></Logo>
      <ContainerQuestions>
        {cards.map((e, i) => {
          return <Card num={i + 1} key={i} question={e.question} answer={e.answer} cards={cards} setCounter={setCounter} counter={counter}></Card>
        })}
      </ContainerQuestions>
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

