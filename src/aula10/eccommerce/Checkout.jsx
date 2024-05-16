import { Link } from "react-router-dom";
import CartContext from "./CartContext";
import { useContext } from "react";

export default function Checkout() {
  const { products, dispatch } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {products.map((product) => (
          <>
            <li>{`${product.quantity} X ${product.title} - Total value: $${(
              product.price * product.quantity
            ).toFixed(2)}`}</li>
            <button
              onClick={() => {
                dispatch({
                  type: "removed",
                  id: product.id,
                });
              }}
            >
              Remove
            </button>
          </>
        ))}
        Total: $
        {products
          .reduce((prevProduct, nextProduct) => {
            return prevProduct + nextProduct.quantity * nextProduct.price;
          }, 0)
          .toFixed(2)}
      </ul>
    </div>
  );
}
