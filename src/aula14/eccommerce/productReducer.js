export default function productReducer(products, action) {
  switch (action.type) {
    case "added":
      return [...products, action.product];
    case "removed":
      return products.filter((p) => p.id !== action.id);
    case "changed":
      return products.map((p) => {
        if (p.id === action.product.id) {
          return { ...action.product };
        }
        return { ...p };
      });
    default:
      break;
  }
}
