import React from "react"
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import styled from 'styled-components'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
