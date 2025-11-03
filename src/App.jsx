import styled from "styled-components";
import { GlobalStyled } from "./styles/GlobalStyles";
import Button from "./ui/Button"; 
import Input from "./ui/Input";
import Heading from "./ui/Heading";


const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <StyledApp>
        <Heading as="h1">The wild oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("check in ")}>check in</Button>
        <Button onClick={() => alert("check out")}>check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
