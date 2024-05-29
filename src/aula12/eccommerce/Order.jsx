import React, { useEffect, useState } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

import { db } from "../Firestore";

export default function Order() {
  const [order, setOrder] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const docRef = doc(db, "orders", id);

      const orderSnapshot = await getDoc(docRef);
      const orderData = orderSnapshot.data();

      setOrder(orderData);
      console.log({ orderData });
    })();
  }, []);

  const handleUpdatePrice = () => {
    const docRef = doc(db, "orders", id);

    updateDoc(docRef, { total: 9999 });
  };

  return (
    <div>
      <ul>
        {order?.items?.map((product) => (
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
      {/* Total: ${total} */}
      <button
        onClick={handleUpdatePrice}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Atualizar Preço
      </button>
    </div>
  );
}
