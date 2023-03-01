import playButton from "../assets/seta_play.png"
import React from "react"

export default function CardQuestion(props){

    const [clicked, setClicked] = React.useState("")

    const {num} = props

    function showQuestion(){
        setClicked("oi")
    }

    return(
        <>
            <p>Pergunta {num}</p><img src={playButton} onClick={showQuestion}/>
        </>
    )
}