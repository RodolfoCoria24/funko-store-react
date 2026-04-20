import "./Navbar.css";

function Navbar({ cartCount, toggleCart }) {
  return (
    <header className="navbar">
      <div className="logo">
        🛍️ <span>Funko Store</span>
      </div>

      <nav className="links">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#">Ofertas</a>
      </nav>
      
      <div className="cart" onClick={toggleCart}>
        🛒 <span className="badge">{cartCount}</span>
      </div>
    </header>
  );
}

export default Navbar;