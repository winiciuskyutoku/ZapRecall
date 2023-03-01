import styled from "styled-components";
import Logo from "./components/Logo"
import Card from "./components/Card"
import Result from "./components/Result"

function App() {
  return (
    <Body>
      <Logo></Logo>
      <Card/>
      <Result/>
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color: #FB6B6B;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`


