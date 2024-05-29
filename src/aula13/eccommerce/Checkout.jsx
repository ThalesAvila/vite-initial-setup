import { useContext } from "react";
import { collection, addDoc } from "firebase/firestore/lite";

import CartContext from "./CartContext";
import { db } from "../firebase";

export default function Checkout() {
  const { products, dispatch } = useContext(CartContext);

  const total = products
    .reduce((prevProduct, nextProduct) => {
      return prevProduct + nextProduct.quantity * nextProduct.price;
    }, 0)
    .toFixed(2);

  const handleOrder = () => {
    (async function () {
      const newOrder = {
        buyer: {
          name: "Thales",
          email: "dev.thales.avila@gmail.com",
        },
        items: products,
        total,
      };

      const ordersCollection = collection(db, "orders");

      const createdOrder = await addDoc(ordersCollection, newOrder);

      console.log(createdOrder);
    })();
  };

  return (
    <div>
      <h1>Checkout</h1>
      {currentUser.email}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {`${product.quantity} X ${product.title} - Total value: $${(
              product.price * product.quantity
            ).toFixed(2)}`}
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
          </li>
        ))}
      </ul>
      Total: ${total}
      <button
        onClick={handleOrder}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Comprar
      </button>
    </div>
  );
}
