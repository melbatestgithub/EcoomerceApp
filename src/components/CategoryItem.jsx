import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 70vh;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  @media (max-width: 820px) {
    flex-direction: column;
    max-width: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #6495ed;
  padding: 1rem 1.5rem;
  color: #ffffff;
  margin: 1rem 0;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #1a9cc9;
  }
  @media (max-width: 500px) {
    padding: 0.6rem 1rem;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};
export default CategoryItem;
