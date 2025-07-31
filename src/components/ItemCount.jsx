import { useState } from 'react';
import '../styles/components/ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count-container">
      <div className="count-controls">
        <button className="count-button"onClick={decrement}disabled={count <= 1}>-</button>
        
        <span className="count-display">{count}</span>
        
        <button className="count-button"onClick={increment}disabled={count >= stock}>+</button>
      </div>

      <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart} disabled={stock === 0}>{stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}</button>

      {stock > 0 && (
        <div className="stock-info">Stock disponible: {stock} unidades</div>
      )}
    </div>
  );
};

export default ItemCount;