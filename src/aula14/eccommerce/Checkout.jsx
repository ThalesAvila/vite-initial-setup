import { collection, addDoc } from "firebase/firestore/lite";

import ProductTable from "./ProductTable";
import { db } from "../firebase";

import { useAuth } from "../contexts/authContext";
import { useCart } from "../contexts/cartContext";

const ProductRow = ({ quantity, title, total, onClick }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-center">
        {quantity} X
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

export default function Checkout() {
  const { products, dispatch } = useCart();
  const { currentUser } = useAuth();

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
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Checkout
      </h2>
      <ProductTable>
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
          />
        ))}
      </ProductTable>
    </div>
  );
}
