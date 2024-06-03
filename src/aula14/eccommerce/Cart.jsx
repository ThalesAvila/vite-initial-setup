import React, { useContext } from "react";
import CartContext from "./CartContext";

export default function Cart() {
  const { products, dispatch } = useContext(CartContext);
  return (
    <ul>
      {products.map((product) => (
        <>
          <li>{`${product.quantity} X ${product.title}`}</li>
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
    </ul>
  );
}
