import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import ProductLink from "./ProductLink";
import { db } from "../Firestore";

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
        products.map(({ name, id }) => <ProductLink name={name} id={id} />)
      )}
    </div>
  );
}
