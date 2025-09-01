import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsService } from '../service/firebase';
import ItemDetail from './ItemDetail';
import LoadingSpinner from './LoadingSpinner';
import '../styles/components/Layout.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProduct = async () => {
      try {
        const data = await productsService.getProductById(itemId);
        setProduct(data);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) {
    return <LoadingSpinner message="Cargando producto..." />;
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
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;