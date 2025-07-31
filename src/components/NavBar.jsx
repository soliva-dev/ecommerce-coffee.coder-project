import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/components/NavBar.css';

const NavBar = ({ cartItems, getTotalItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">☕ Coffee Shop</Link>
        
        <div className="d-flex align-items-center order-lg-3">
          <CartWidget cartItems={cartItems} getTotalItems={getTotalItems} />
        </div>
        
        <button 
          className="navbar-toggler order-lg-2" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/category/espresso">Espresso</Link></li>
                <li><Link className="dropdown-item" to="/category/americano">Americano</Link></li>
                <li><Link className="dropdown-item" to="/category/latte">Latte</Link></li>
                <li><Link className="dropdown-item" to="/category/cappuccino">Cappuccino</Link></li>
                <li><Link className="dropdown-item" to="/category/especiales">Especiales</Link></li>
                <li><Link className="dropdown-item" to="/category/frios">Fríos</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
