import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/products.jsx';
import ItemDetail from './ItemDetail';
import '../styles/components/Layout.css';

const ItemDetailContainer = ({ addToCart }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    getProductById(itemId)
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error al cargar el producto:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div className="main-container">
        <div className="loading-container">
          <div className="spinner-border loading-spinner text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="loading-text">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="main-container">
        <div className="empty-state">
          <h3>Producto no encontrado</h3>
          <p>El producto que buscas no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container content-container fade-in">
      <ItemDetail product={product} addToCart={addToCart} />
    </div>
  );
};

export default ItemDetailContainer;