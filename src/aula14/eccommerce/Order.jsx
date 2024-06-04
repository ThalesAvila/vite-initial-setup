import React, { useEffect, useState } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore/lite";
import { useParams } from "react-router-dom";

import ProductTable from "./ProductTable";
import { db } from "../firebase";

const OrderRow = ({ quantity, title, total, onClick, onChange }) => {
  return (
    <tr>
      <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-center">
        <div class="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            onClick={() => {
              onChange(quantity - 1);
            }}
          >
            <svg
              class="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={quantity}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            required
          />
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            onClick={() => {
              onChange(quantity + 1);
            }}
          >
            <svg
              class="w-3 h-3 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 text-center">
        ${total}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
        <span
          onClick={onClick}
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg
        border border-transparent text-blue-600 hover:text-blue-800
        disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500
        dark:hover:text-blue-400 cursor-pointer"
        >
          Remove
        </span>
      </td>
    </tr>
  );
};

export default function Order() {
  const [order, setOrder] = useState();
  const { id } = useParams();

  const total = order?.items
    ?.reduce((prevProduct, currProduct) => {
      return prevProduct + currProduct.quantity * currProduct.price;
    }, 0)
    .toFixed(2);

  useEffect(() => {
    (async function () {
      const docRef = doc(db, "orders", id);

      const orderSnapshot = await getDoc(docRef);
      const orderData = orderSnapshot.data();

      setOrder(orderData);
    })();
  }, [id]);

  const handleUpdate = () => {
    const docRef = doc(db, "orders", id);

    updateDoc(docRef, { ...order });
  };

  const removeItem = (id) => {
    setOrder({
      ...order,
      items: order.items.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setOrder({
      ...order,
      items: order.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      }),
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <ProductTable>
        {order?.items?.map(({ id, quantity, title, price }) => (
          <OrderRow
            quantity={quantity}
            title={title}
            total={(price * quantity).toFixed(2)}
            onClick={() => {
              removeItem(id);
            }}
            onChange={(newQuantity) => updateQuantity(id, newQuantity)}
          />
        ))}
      </ProductTable>
      <div className="flex justify-end items-center">
        <span className="px-2 font-bold">Total: ${total}</span>
        <button
          onClick={handleUpdate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}
