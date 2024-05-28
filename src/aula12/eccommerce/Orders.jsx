import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { Link } from "react-router-dom";

import db from "../Firestore";

const OrderRow = ({ id, total, buyer }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {buyer}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {total}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <Link
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg
        border border-transparent text-blue-600 hover:text-blue-800
        disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500
        dark:hover:text-blue-400"
          to={`/orders/${id}`}
        >
          See Order
        </Link>
      </td>
    </tr>
  );
};

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function () {
      const ordersCollection = collection(db, "orders");
      const ordersSnapshot = await getDocs(ordersCollection);

      const ordersResponse = ordersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(ordersResponse);
      console.log({ ordersResponse });
    })();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Buyer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {orders.map(({ id, total, buyer }) => (
                  <OrderRow id={id} total={total} buyer={buyer.name} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
