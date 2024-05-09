import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Item() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (fetchedProduct) {
        setProduct(fetchedProduct);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <img src={product.image} alt="" />
        </div>
      )}
    </div>
  );
}
