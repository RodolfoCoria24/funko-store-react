import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Funkos disponibles</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;