export default function productReducer(products, action) {
  switch (action.type) {
    case "added":
      return [...products, action.product];
    case "removed":
      return products.filter((p) => p.id !== action.id);
    default:
      break;
  }
}
