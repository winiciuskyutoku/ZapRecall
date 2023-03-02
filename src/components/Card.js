import playButton from "../assets/seta_play.png"
import React from "react"
import styled from "styled-components"
import turnArrow from "../assets/seta_virar.png"
import wrong from "../assets/icone_erro.png"
import almostWrong from "../assets/icone_quase.png"
import right from "../assets/icone_certo.png"

export default function CardQuestion(props) {
    const { num, cards, counter } = props

    let initialText = (
        <>
            <h1>Pergunta {num}</h1>
            <img src={playButton} alt="Virar o card" onClick={showQuestion}></img>
        </>
    )

    const [clicked, setClicked] = React.useState("")
    const [text, setText] = React.useState(initialText)
    const [decoration, setDecoration] = React.useState("")
 
    function showQuestion() {
        setClicked("question")
        setText(
            <>
                <h1>{props.question}</h1>
                <img src={turnArrow} alt="Virar o card" onClick={showAnswer}></img>
            </>
        )
    }

    function showAnswer() {
        setClicked("answerOnScreen")
        setText(
            <>
                <AnswerContainer>
                    <h1>{props.answer}</h1>
                    <AnswerButton>
                        <button onClick={() => remember("wrong")}>Não lembrei</button>
                        <button onClick={() => remember("almostWrong")}>Quase não lembro</button>
                        <button onClick={() => remember("correct")}>Zap!</button>
                    </AnswerButton>
                </AnswerContainer>
            </>
        )
    }

    function remember(event) {
        
        if (event === "wrong") {
            setClicked("")
            setDecoration("wrong")
            setText (
                <>
                    <h1>Pergunta {num}</h1>
                    <img src={wrong} alt="Virar o card" ></img>
                </>
            )
        } else if (event === "almostWrong") {
            setClicked("")
            setDecoration("almostWrong")
            setText (
                <>
                    <h1>Pergunta {num}</h1>
                    <img src={almostWrong} alt="Virar o card" ></img>
                </>
            )
        } else if (event === "correct") {
            setClicked("")
            setDecoration("right")
            setText (
                <>
                    <h1>Pergunta {num}</h1>
                    <img src={right} alt="Virar o card" ></img>
                </>
            )
        }
    }

    console.log(counter)

    return (
        <>
            <Question clicked={clicked} decoration={decoration}>{text}</Question>
            <Footer>
                <p>{counter}/{cards.length} Concluidos</p>
            </Footer>
        </>
    )

}

const Question = styled.div`
    display: flex;
    background-color: ${(props) => props.clicked === "" ? "#ffffff" : "#FFFFD4"};
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    width: 80%;
    height: ${(props) => props.clicked === "" ? "65px" : "131px"};

    justify-content: space-between;
    align-items: ${(props) => props.clicked === "" ? "center" : "start"};
    line-height: ${(props) => props.clicked === "answerOnScreen" ? "" : "40px"};
    box-sizing: border-box;
    padding: 0 15px;

    position: ${(props) => props.clicked === "" ? "initial" : "relative"};

    img {
        width: 20px;
        height: 23px;
        position: ${(props) => props.clicked === "" ? "initial" : "absolute"};
        bottom: ${(props) => props.clicked !== "" && "10px"};
        right: ${(props) => props.clicked !== "" && "10px"};
      
    }

    h1 {
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        text-decoration: ${(props) => props.decoration === "wrong" || props.decoration === "almostWrong" || props.decoration === "right" ? "line-through" : "none"};
        color: ${(props) => props.decoration === "wrong" && "#FF3030"};
        color: ${(props) => props.decoration === "almostWrong" && "#FF922E"};
        color: ${(props) => props.decoration === "right" && "#2FBE34"};
    }
`

const AnswerButton = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        width: 85px;
        height: 37px;
        color: #FFFFFF;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        text-align: center;

        border: none;
        border-radius: 5px;
    }

    button:nth-child(1){
        background-color: #FF3030;
    }
    button:nth-child(2){
        background-color: #FF922E
    }
    button:nth-child(3){
        background-color: #2FBE34;
    }
`

const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    justify-content: space-around;
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
