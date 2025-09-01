import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/components/Cart.css';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice, 
    clearCart, 
    isCartEmpty 
  } = useCart();

  if (isCartEmpty()) {
    return (
      <div className="main-container content-container">
        <div className="cart-empty">
          <div className="text-center">
            <div className="empty-cart-icon mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-cart-x text-muted" viewBox="0 0 16 16">
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </div>
            <h2 className="empty-title">Tu carrito está vacío</h2>
            <p className="empty-text mb-4">
              Parece que aún no has agregado ningún producto a tu carrito. 
              ¡Explora nuestro catálogo y encuentra el café perfecto para ti!
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
              <i className="bi bi-arrow-left me-2"></i>
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, parseInt(newQuantity));
    }
  };

  const handleIncrement = (productId, currentQuantity, stock) => {
    if (currentQuantity < stock) {
      updateQuantity(productId, currentQuantity + 1);
    }
  };

  const handleDecrement = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  return (
    <div className="main-container content-container">
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="cart-title">
            <i className="bi bi-cart3 me-2"></i>
            Mi Carrito de Compras
          </h2>
          <span className="cart-items-count">
            {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'}
          </span>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-md-3 col-sm-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="cart-item-image"
                      />
                    </div>

                    <div className="col-md-5 col-sm-8">
                      <div className="cart-item-info">
                        <h5 className="cart-item-name">{item.name}</h5>
                        <p className="cart-item-category">
                          Categoría: {item.category}
                        </p>
                        <p className="cart-item-price">
                          ${item.price} c/u
                        </p>
                      </div>
                    </div>

                    <div className="col-md-2 col-sm-6">
                      <div className="quantity-controls">
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleDecrement(item.id, item.quantity)}
                          disabled={item.quantity <= 1}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        
                        <span className="quantity-display-cart">{item.quantity}</span>
                        
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleIncrement(item.id, item.quantity, item.stock)}
                          disabled={item.quantity >= item.stock}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <small className="text-muted">
                        Stock: {item.stock}
                      </small>
                    </div>

                    <div className="col-md-2 col-sm-6">
                      <div className="cart-item-actions">
                        <p className="cart-item-subtotal">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                          title="Eliminar producto"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <Link to="/" className="btn btn-outline-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Continuar Comprando
              </Link>
              
              <button 
                className="btn btn-outline-secondary"
                onClick={clearCart}
              >
                <i className="bi bi-trash me-2"></i>
                Vaciar Carrito
              </button>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cart-summary">
              <h4 className="summary-title">Resumen de Compra</h4>
              
              <div className="summary-item">
                <span>Productos ({getTotalItems()})</span>
                <span>${getTotalPrice().toLocaleString()}</span>
              </div>
              
              <div className="summary-item">
                <span>Envío</span>
                <span className="text-success">Gratis</span>
              </div>
              
              <hr />
              
              <div className="summary-total">
                <span>Total</span>
                <span>${getTotalPrice().toLocaleString()}</span>
              </div>
              
              <Link 
                to="/checkout" 
                className="btn btn-primary btn-lg w-100 checkout-btn"
              >
                <i className="bi bi-credit-card me-2"></i>
                Proceder al Checkout
              </Link>
              
              <div className="secure-checkout">
                <i className="bi bi-shield-check me-2"></i>
                <small>Compra 100% segura</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
