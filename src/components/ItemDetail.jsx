import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { hacerMayuscula } from '../utils/formatters.jsx';
import ItemCount from './ItemCount';
import '../styles/components/ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleOnAdd = (count) => {
    setQuantity(count);
    addToCart(product, count);
    console.log(`Agregaste ${count} unidades de ${product.name} al carrito`);
  };

  return (
    <div className="row item-detail-container">
      <div className="col-md-6">
        <img src={product.image} alt={product.name} className="item-detail-image"/>
      </div>

      <div className="col-md-6">
        <div className="item-detail-content">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
              <li className="breadcrumb-item"><Link to={`/category/${product.category}`}>{hacerMayuscula(product.category)}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>
          
          <h1 className="item-detail-title">{product.name}</h1>
          
          <p className="item-detail-description">{product.description}</p>
          
          <div className="item-detail-badges">
            <span className="badge bg-secondary item-detail-badge">Categoría: {product.category}</span>
            <span className="badge bg-success item-detail-badge">Stock disponible: {product.stock}</span>
          </div>
          
          <h3 className="item-detail-price">${product.price}</h3>
          
          <div className="item-detail-actions">
            {quantity === 0 ? (
              <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd}/>
            ) : (
              <div>
                <div className="success-message" role="alert">¡Agregaste {quantity} unidades al carrito!</div>
                <Link to="/" className="btn btn-outline-primary me-2">Seguir Comprando</Link>
                <button className="btn btn-primary" onClick={() => setQuantity(0)}>Agregar Más</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;