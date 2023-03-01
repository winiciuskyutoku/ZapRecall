import cards from "../constants/cards"

import styled from "styled-components"
import CardQuestion from "./CardQuestion"

export default function Card(){
    cards.sort(comparador)
    function comparador(){
       return Math.random() - 0.5;
    }

    let cardsArray = cards.filter((e, i) => {
        while(i < 4){
            return e
        }
    })

    return(
        <ContainerQuestions>
            {cardsArray.map((e, i) => {
                return <Question><CardQuestion num={i + 1} key={i} question={e.question} answer={e.answer}></CardQuestion></Question>
            })}
        </ContainerQuestions>
    )
}

const ContainerQuestions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100vw;

    align-items: center;
    margin-top: 50px;
`

const Question = styled.div`
    display: flex;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    width: 80%;
    height: 65px;

    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;

    img {
        width: 20px;
        height: 23px;
    }

    p {
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
    }
`