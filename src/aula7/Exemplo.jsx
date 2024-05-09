import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

export default function ProdutosPorCategoria() {
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState("jewelery");
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (categoryProducts) {
        setProducts(categoryProducts);
        setLoading(false);
      });
  }, [category]);

  function handleSelectChange(e) {
    const idx = e.target.selectedIndex;
    setCategory(e.target.options[idx].value);
  }

  return (
    <>
      <select value={category} onChange={handleSelectChange}>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
      </select>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex">
          {products?.map(({ title, price, image }) => {
            return <ProductCard title={title} price={price} image={image} />;
          })}
        </div>
      )}
    </>
  );
}
