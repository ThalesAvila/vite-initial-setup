import React, { useContext } from "react";
import CartContext from "./CartContext";

const ProductRow = ({ quantity, title, total, onClick, onChange }) => {
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

export default function Cart() {
  const { products, dispatch } = useContext(CartContext);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Cart
      </h2>
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 text-center"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 text-center"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              {products.map(({ id, quantity, title, price }) => (
                <ProductRow
                  quantity={quantity}
                  title={title}
                  total={(price * quantity).toFixed(2)}
                  onClick={() => {
                    dispatch({
                      type: "removed",
                      id,
                    });
                  }}
                  onChange={(newQuantity) => {
                    dispatch({
                      type: "changed",
                      product: { id, quantity: newQuantity, title, price },
                    });
                  }}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
