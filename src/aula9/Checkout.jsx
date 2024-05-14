import { Link } from "react-router-dom";
import CartContext from "../aula9/CartContext";
import { useContext } from "react";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((product) => (
          <li>{`${product.quantity} X ${product.title} - Total value: $${(
            product.price * product.quantity
          ).toFixed(2)}`}</li>
        ))}
        Total: $
        {cart.reduce((prevProduct, nextProduct) => {
          return prevProduct + nextProduct.quantity * nextProduct.price;
        }, 0)}
      </ul>
    </div>
  );
}
