import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Esse é meu eccommerce</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/category/electronics">Eletronics</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <hr />
    </>
  );
}
