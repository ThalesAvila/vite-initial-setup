import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Category from "./Category";
import Checkout from "./Checkout";
import Home from "./Home";
import Item from "./Item";
import Header from "./Header";

export default function RouteExample() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:banana" element={<Category />} />
        <Route path="/item/:banana" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
