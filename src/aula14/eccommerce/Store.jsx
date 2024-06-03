import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Category from "./Category";
import Checkout from "./Checkout";
import Home from "./Home";
import Item from "./Item";
import Header from "./Header";
import Orders from "./Orders";
import Order from "./Order";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/authContext";
import { CartProvider } from "../contexts/cartContext";

export default function Store() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
