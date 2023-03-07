import logo from "../assets/logo.png"
import styled from "styled-components"

export default function Logo() {
    return (
        <DivLogo >
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </DivLogo>
    )
}

const DivLogo = styled.div`
    display: flex;
    width: 68%;
    height: 60px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
    h1 {
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        text-align: center;
        color: #ffffff;
    }
    img{
       width: 52px;
       height: 60px; 
    }
    
`