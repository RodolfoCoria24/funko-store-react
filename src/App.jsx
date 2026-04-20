import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import "./App.css";
import banner from "./assets/funko_banner.webp";

function App() {

  const [showModal, setShowModal] = useState(false);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(true);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [finalTotal, setFinalTotal] = useState(0);

  const checkout = () => {
    if (cart.length === 0) {
      alert("🛒 Tu carrito está vacío");
      return;
    }
    /**Alerta de compra **/
      setFinalTotal(total);   //  guarda el total primero
    setShowModal(true);

    setTimeout(() => {
      clearCart();
      localStorage.removeItem("cart");
    }, 300);
  }

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        toggleCart={toggleCart}
      />

      {/* CARRITO LATERAL */}
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={total}
        clearCart={clearCart}
        checkout={checkout}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
      {/*Banner*/}
   <div id="inicio" className="hero">
      <img src={banner} alt="banner" />
      {/*texto en banner
      <div className="hero-text">
        <h1></h1>
        <p></p>
      </div>*/}
  </div>

      {/* CONTENIDO */}
      <div className="container">
        <h2 id="productos" >🛍️ Productos</h2>
        <ProductList addToCart={addToCart} />
      </div>


      {/**Alerta de compra**/}
      {showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>🎉 Compra exitosa</h2>
      <p>Total pagado: S/ {finalTotal}</p>

      <button onClick={() => setShowModal(false)}>
        Cerrar
      </button>
    </div>
  </div>
)}
    </>
  );
  
}

export default App;