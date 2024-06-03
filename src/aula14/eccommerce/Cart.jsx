import React, { useContext } from "react";
import CartContext from "./CartContext";

export default function Cart() {
  const { products, dispatch } = useContext(CartContext);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Cart
      </h2>
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
    </div>
  );
}
