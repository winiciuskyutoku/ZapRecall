import cards from "../constants/cards"

import styled from "styled-components"
import CardQuestion from "./CardQuestion"
import React from "react"


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
                return <CardQuestion num={i + 1} key={i} question={e.question} answer={e.answer}></CardQuestion>
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

