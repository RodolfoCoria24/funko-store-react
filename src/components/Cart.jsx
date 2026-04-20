import "./Cart.css";

function Cart({ cart, removeFromCart, total, clearCart, checkout, isOpen, toggleCart }) {
  return (
    <div className={`cart-panel ${isOpen ? "open" : ""}`}>
      <h2>🛒 Carrito</h2>
        <button className="close-btn" onClick={toggleCart}>✖</button>
      {cart.length === 0 ? (
        <p>Vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
            <div className="cart-info">
                <h4>{item.name}</h4>
                <p>{item.quantity} x S/ {item.price}</p>
            </div>

            <div className="cart-right">
                <strong>S/ {item.price * item.quantity}</strong>
                <button onClick={() => removeFromCart(item.id)}>✖</button>
            </div>
            </div>
          ))}

         <div className="cart-total">
             <span>Total</span>
             <strong>S/ {total}</strong>
         </div>

          <button onClick={clearCart}>Vaciar</button>
          <button onClick={checkout}>Comprar</button>
          
        </>
      )}
    </div>
  );
}

export default Cart;