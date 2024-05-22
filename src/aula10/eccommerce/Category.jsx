import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductLink from "./ProductLink";

export default function Category() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
        setProducts(products);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        products.map(({ title, id }) => <ProductLink title={title} id={id} />)
      )}
    </div>
  );
}