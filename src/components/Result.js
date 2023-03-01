import styled from "styled-components"

export default function Result(){
    return(
        <Footer>
            <p>0/4 Concluidos</p>
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;

    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    height: 70px;

    background-color: #ffffff;
    align-items: center;

    p {
        font-family: 'Recursive', sans-serif;;
    }
`