function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} width="150" />
      <h3>{product.name}</h3>
      <p>S/ {product.price}</p>
      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;