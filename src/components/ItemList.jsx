import Item from './Item';

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h4>No se encontraron productos en esta categoría</h4>
        <p>Intenta con otra categoría o vuelve al catálogo completo.</p>
      </div>
    );
  }

  return (
    <div className="row products-row">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;