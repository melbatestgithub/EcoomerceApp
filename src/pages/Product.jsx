import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartSlice";
import { useDispatch ,useSelector} from "react-redux";


const Container = styled.div`
  @media (max-width: 420px) and (min-width: 360px) {
    overflow-x: hidden; /* Apply overflow hidden to the container */
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 630px) {
    flex-wrap: wrap;
  }
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
  max-width: 330px;
  @media (max-width: 800px) {
    margin-bottom: 20px; /* Adjust margin as needed */
  }
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  @media (max-width: 800px) {
    height: 50vh;
  }

  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 2rem;
  @media (max-width: 800px) {
  }

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  width: 290px;
  @media (max-width: 830px) {
    font-size: 1.4rem;
    min-width: 250px;
  }
  @media (max-width: 340px) {
    font-size: 1.2rem;
  }
`;

const Desc = styled.p`
  margin: 20px 0px;
  @media (max-width: 340px) {
    font-size: 0.9rem;
    line-height: 1rem;
  }
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 35px;
  @media (max-width: 830px) {
    font-size: 1.5rem;
  }
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  width: 100%;

  @media (max-width: 830px) {
    width: 100%;
  }
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #008080;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: 500;
  color: #000;

  &:hover {
    background-color: #f8f4f4;
    transition: 0.5s;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("null");
  const [size, setSize] = useState("null");
  const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.products);
 const isItemInCart = cartProducts.some((item) => item.id === product.id);
  useEffect(() => {
    getProducts();
  }, [id]);
  const getProducts = async () => {
    try {
      const res = await publicRequest.get("/products/find/" + id);
      setProduct(res.data);
    } catch (error) {
      console.log("No such a route is found");
    }
  };

  const handleClick = (action) => {
    if (action === "add") {
      setQuantity(quantity + 1);
    } else if (action === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleCart = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title> {product.title} </Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onChange={() => setColor(c)} />
              ))}
            </Filter>
            =
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleClick("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleClick("add")} />
            </AmountContainer>
              <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
    </Container>
  );
};

export default Product;
