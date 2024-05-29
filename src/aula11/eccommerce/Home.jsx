import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import ProductLink from "./ProductLink";
import { db } from "../Firestore";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const productsCol = collection(db, "products");
      const productsSnapshot = await getDocs(productsCol);
      const products = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log({ products });
      setProducts(products);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        products.map(({ name, id }) => (
          <ProductLink key={id} name={name} id={id} />
        ))
      )}
    </div>
  );
}
