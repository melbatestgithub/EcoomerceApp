import React from "react";
import axios from "axios";
import styled from "styled-components";
const PayButton = ({ cartItem }) => {
  const Button = styled.button`
    background: #6495ed;
    padding: 1rem 1.5rem;
    color: #ffffff;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: #1a9cc9;
    }
  `;

  const base_url = "https://shoppingappbackend-oao7.onrender.com/api";
  const handleCheckout = () => {
    axios
      .post(`${base_url}/checkout/create-checkout-session`, {
        cartItem,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <Button onClick={() => handleCheckout()}>Checkout</Button>
    </>
  );
};

export default PayButton;
