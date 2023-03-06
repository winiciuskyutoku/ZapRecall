import styled from "styled-components"

export default function Result({result}){
    return(
        <Footer data-test="footer">
            <p >{result}/4 Concluidos</p>
        </Footer>
    )
}

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
        font-family: 'Recursive', sans-serif;;
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
