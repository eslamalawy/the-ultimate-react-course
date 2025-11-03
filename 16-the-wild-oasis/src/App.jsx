import styled from "styled-components";
import { GlobalStyled } from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The wild oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button  onClick={() => alert("check in ")}>check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("check out")}
              >
                check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <div>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
