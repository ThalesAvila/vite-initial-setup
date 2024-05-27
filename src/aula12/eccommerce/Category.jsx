import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import ProductLink from "./ProductLink";
import db from "../Firestore";

export default function Category() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const productsCol = collection(db, "products");
      const q = query(productsCol, where("category", "==", id));
      const productsSnapshot = await getDocs(q);
      const products = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log({ products });
      setProducts(products);
      setLoading(false);
    })();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map(({ name, id, image, price }) => (
                <ProductLink
                  key={id}
                  name={name}
                  id={id}
                  image={image}
                  price={price}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
