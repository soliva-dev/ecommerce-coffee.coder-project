import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/components/CartWidget.css';

const CartWidget = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <div className="cart-widget">
      <Link to="/cart" className="btn btn-outline-light cart-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart3 cart-icon" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        
        {itemCount > 0 && (
          <span className="badge rounded-pill cart-badge">{itemCount}</span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;