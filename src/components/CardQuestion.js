import playButton from "../assets/seta_play.png"
import React from "react"
import styled from "styled-components"

export default function CardQuestion(props){


    const [clicked, setClicked] = React.useState("")

    const {num} = props

    function showQuestion(){
        console.log("oi")
        setClicked("oi")
    }

    
    function answerNum(){
        return(
            <>
                <p>Pergunta {num}</p><img src={playButton} onClick={showQuestion}/>
            </>
        )
    }

    function question(){
        return(
            <>
                <p>{props.question}</p>
            </>
        )
    }


    return (
        <Question clicked={clicked}>{clicked == "" ? answerNum() : question()}</Question>
    )

    /* if(clicked == ""){
        return answerNum()
    } else if (clicked !== "") {
        return question()
    } */
}

const Question = styled.div`
    display: flex;
    background-color: ${(props) => props.clicked === "" ? "#ffffff" : "#FFFFD4"};
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    width: 80%;
    height: ${(props) => props.clicked === "" ? "65px" : "131px"};

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