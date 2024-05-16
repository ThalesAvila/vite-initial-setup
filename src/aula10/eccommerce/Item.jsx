import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "./CartContext";

export default function Item() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useContext(CartContext);

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

  const handleAddItem = () => {
    dispatch({
      type: "added",
      product: {
        ...product,
        quantity,
      },
    });
  };

  const handleChange = (e) => {
    const newQuantity = e.target.value;
    if (newQuantity >= 1) {
      setQuantity(e.target.value);
    }
  };

  return (
    <div>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <img src={product.image} alt="" />
          <input type="number" value={quantity} onChange={handleChange} />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleAddItem(product)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      )}
    </div>
  );
}
