import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import EmptyCart from "./components/EmptyCart";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/empty" element={<EmptyCart />} />

        {/* Use PrivateRoute for routes that require authentication */}
        <Route
          path="/login"
          element={<Navigate to="/" />} // Redirect to home if already logged in
        />
        <Route
          path="/register"
          element={<Navigate to="/" />} // Redirect to home if already logged in
        />
        <Route path="/success" element={<Success />} />

        {/* For other routes, user can be unauthenticated */}
        <Route
          path="/*"
          element={user ? <Navigate to="/" /> : <Login />} // Redirect to login if unauthenticated
        />
      </Routes>
    </Router>
  );
};

export default App;
