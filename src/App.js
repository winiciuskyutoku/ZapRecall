import styled from "styled-components";
import Logo from "./components/Logo"
import React from "react"
import cards from "./constants/cards"

import Card from "./components/Card"
import logo from "./assets/logo.png"

import wrong from "./assets/icone_erro.png"
import almostWrong from "./assets/icone_quase.png"
import right from "./assets/icone_certo.png"


function App() {

  const [counter, setCounter] = React.useState([])
  const [started, setStarted] = React.useState(false)
  const [misses, setMisses] = React.useState([])

  function startGame() {
    setStarted(true)
  }

  console.log(misses)

  return (
    <Body started={started}>
      {started ? (
        <>
          <Logo></Logo>
          <ContainerQuestions>
            {cards.map((e, i) => {
              return <Card num={i + 1} key={i} question={e.question} answer={e.answer} cards={cards} setCounter={setCounter} counter={counter} misses={misses} setMisses={setMisses}></Card>
            })}
          </ContainerQuestions>
          <Footer data-test="footer">
            <p>{counter.length === 0 ? counter.length : counter}/{cards.length} Concluidos</p>
            <div>
              {misses.map(e => {
                if(e === "wrong" ){
                  return <img src={wrong}/>
                } else if (e === "almostWrong"){
                  return <img src={almostWrong}/>
                } else if (e === "correct"){
                  return <img src={right}/>
                }
              })}
            </div>
          </Footer>
        </>
      ) : (
        <StartGame>
          <img src={logo} alt="Logo" />
          <h1>ZapRecall</h1>
          <button onClick={startGame}>Inicial Recall!</button>
        </StartGame>
      )}
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color: #FB6B6B;
  height: 100vh;
  margin-bottom: ${(props) => props.started ? "70px" : "0"};
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
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 10vh;

    gap: 10px;
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
const StartGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  img{
    width: 136px;
    height: 161px;
  }
  button{
    width: 246px;
    height: 54px;
    background-color: #ffffff;
    color: #d70900;
    border-radius: 5px;
    border: 1px solid #d70900;
    font-family: "Recursive";
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    font-weight: 400;
    font-size: 18px;
  }
  h1{
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #ffffff;
  }
`