import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 750px) {
    max-width: 100%;
    height: 40vh;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  @media (max-width: 750px) {
    font-size: 1.8rem;
  }
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  @media (max-width: 750px) {
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.1rem;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  @media (max-width: 750px) {
    width: 80%;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
export default Newsletter;
