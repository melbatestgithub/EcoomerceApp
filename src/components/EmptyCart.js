import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const EmptyCart = () => {
  const EmptyContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: gray;
    font-size: 1.5rem;
    color: white;
    padding: 4rem;
    overflow-x: hidden;

    @media (max-width: 500px) {
      max-width: 100%;
      font-size: 1.2rem;
    }
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

  return (
    <>
      <EmptyContainer>
        <p> Oops! There is no items in the cart</p>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </EmptyContainer>
    </>
  );
};

export default EmptyCart;
