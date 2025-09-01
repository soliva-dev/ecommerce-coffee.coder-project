import { Link } from 'react-router-dom';
import { cortarTexto } from '../utils/formatters.jsx';
import '../styles/components/ItemCard.css';

const Item = ({ product }) => {
  return (
    <div className="col-md-6 col-lg-4 product-col">
      <div className="card item-card">
        <img src={product.image} className="card-img-top item-card-image" alt={product.name}/>
        <div className="card-body item-card-body">
          <h5 className="card-title item-card-title">{product.name}</h5>
          <p className="card-text item-card-description">{cortarTexto(product.description, 100)}</p>
          <div className="item-card-footer">
            <div className="d-flex justify-content-between align-items-center">
              <span className="item-price">${product.price}</span>
              <small className="item-stock">Stock: {product.stock}</small>
            </div>
            <Link to={`/item/${product.id}`} className="btn btn-primary item-card-btn">Ver Detalles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;