import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../mock/products.jsx';
import ItemList from './ItemList';
import '../styles/components/Layout.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts();
    
    fetchProducts
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="main-container">
        <div className="loading-container">
          <div className="spinner-border loading-spinner text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="loading-text">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container content-container fade-in">
      {greeting && (
        <div className="section-header">
          <h2 className="section-title">{greeting}</h2>
          
          <div className="presentation-section">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <p className="lead text-center mb-4">
                  Descubre nuestra selección premium de cafés artesanales, 
                  preparados con los granos más finos del mundo. Desde el intenso espresso 
                  hasta refrescantes bebidas heladas, cada taza cuenta una historia única.
                </p>
                
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <div className="feature-icon mb-2">
                        <span className="badge bg-primary rounded-pill p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1-1.5a.5.5 0 0 0 0 1 .5.5 0 0 0 0-1z"/>
                          </svg>
                        </span>
                      </div>
                      <h5>Calidad Premium</h5>
                      <p className="text-muted">Granos seleccionados de las mejores plantaciones del mundo</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <div className="feature-icon mb-2">
                        <span className="badge bg-primary rounded-pill p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                          </svg>
                        </span>
                      </div>
                      <h5>Envío Rápido</h5>
                      <p className="text-muted">Recibe tu café favorito en tu puerta en 24-48 horas</p>
                    </div>
                  </div>
                  
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <div className="feature-icon mb-2">
                        <span className="badge bg-primary rounded-pill p-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        </span>
                      </div>
                      <h5>Experiencia Única</h5>
                      <p className="text-muted">Más de 10 años creando momentos especiales con cada taza</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {categoryId && (
        <div className="category-header">
          <h3 className="category-title">
            {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
          </h3>
        </div>
      )}
      
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;