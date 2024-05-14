import React, { useContext } from "react";
import CartContext from "./CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <ul>
      {cart.map((product) => (
        <li>{`${product.quantity} X ${product.title}`}</li>
      ))}
    </ul>
  );
}
