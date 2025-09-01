import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ordersService } from '../service/firebase';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { cartItems, getTotalItems, getTotalPrice, clearCart, isCartEmpty } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [errors, setErrors] = useState({});

  if (isCartEmpty() && !orderId) {
    return (
      <div className="main-container content-container">
        <div className="text-center">
          <h2>No hay productos en tu carrito</h2>
          <p>Agrega algunos productos antes de proceder al checkout.</p>
          <Link to="/" className="btn btn-primary">Ir a la tienda</Link>
        </div>
      </div>
    );
  }

  if (orderId && orderData) {
    return (
      <div className="main-container content-container">
        <div className="order-success">
          <div className="text-center">
            <div className="success-icon mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
            </div>
            <h2 className="success-title">¡Compra exitosa!</h2>
            <p className="success-text">
              Tu orden ha sido procesada correctamente. 
            </p>
            <div className="order-details">
              <p><strong>ID de orden:</strong> <code className="order-id">{orderId}</code></p>
              <p><strong>Total:</strong> ${orderData.total.toLocaleString()}</p>
              <p><strong>Email:</strong> {orderData.buyer.email}</p>
            </div>
            <p className="success-note">
              Te enviaremos un email de confirmación con los detalles de tu compra y el seguimiento del envío.
            </p>
            <div className="success-actions">
              <Link to="/" className="btn btn-primary btn-lg">
                Seguir Comprando
              </Link>
              <button 
                className="btn btn-outline-primary btn-lg"
                onClick={() => window.print()}
              >
                Imprimir Recibo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
    if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.address.trim()) newErrors.address = 'La dirección es requerida';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es requerida';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'El código postal es requerido';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (formData.paymentMethod === 'credit-card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Número de tarjeta requerido';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Fecha de vencimiento requerida';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV requerido';
      if (!formData.cardName.trim()) newErrors.cardName = 'Nombre en la tarjeta requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateOrderId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `CF-${timestamp}-${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        items: cartItems,
        buyer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode
        },
        total: getTotalPrice(),
        paymentMethod: formData.paymentMethod,
        status: 'pending'
      };

      const createdOrder = await ordersService.createOrder(orderData);
      
      setOrderData(createdOrder);
      setOrderId(createdOrder.id);
      
      clearCart();

    } catch (error) {
      console.error('Error al procesar la orden:', error);
      alert('Hubo un error al procesar tu orden. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container content-container">
      <div className="checkout-container">
        <div className="checkout-header">
          <h2 className="checkout-title">
            <i className="bi bi-credit-card me-2"></i>
            Finalizar Compra
          </h2>
          <Link to="/cart" className="btn btn-outline-secondary">
            <i className="bi bi-arrow-left me-2"></i>
            Volver al Carrito
          </Link>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="checkout-section">
                <h4 className="section-title">
                  <i className="bi bi-person me-2"></i>
                  Información Personal
                </h4>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nombre *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Apellido *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Tu apellido"
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Teléfono *</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+54 11 1234-5678"
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                </div>
              </div>

              <div className="checkout-section">
                <h4 className="section-title">
                  <i className="bi bi-geo-alt me-2"></i>
                  Dirección de Envío
                </h4>
                
                <div className="mb-3">
                  <label className="form-label">Dirección *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Calle, número y depto (opcional)"
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>

                <div className="row">
                  <div className="col-md-8 mb-3">
                    <label className="form-label">Ciudad *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Tu ciudad"
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                  </div>
                  
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Código Postal *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`}
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="1234"
                    />
                    {errors.postalCode && <div className="invalid-feedback">{errors.postalCode}</div>}
                  </div>
                </div>
              </div>

              <div className="checkout-section">
                <h4 className="section-title">
                  <i className="bi bi-credit-card-2-front me-2"></i>
                  Método de Pago
                </h4>
                
                <div className="payment-methods mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">
                      <i className="bi bi-credit-card me-2"></i>
                      Tarjeta de Crédito/Débito
                    </label>
                  </div>
                  
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">
                      <i className="bi bi-cash me-2"></i>
                      Efectivo contra entrega
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === 'credit-card' && (
                  <div className="card-details">
                    <div className="mb-3">
                      <label className="form-label">Número de Tarjeta *</label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                      {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Fecha de Vencimiento *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.expiryDate ? 'is-invalid' : ''}`}
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/AA"
                          maxLength="5"
                        />
                        {errors.expiryDate && <div className="invalid-feedback">{errors.expiryDate}</div>}
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label className="form-label">CVV *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          maxLength="4"
                        />
                        {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Nombre en la Tarjeta *</label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardName ? 'is-invalid' : ''}`}
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="Como aparece en la tarjeta"
                      />
                      {errors.cardName && <div className="invalid-feedback">{errors.cardName}</div>}
                    </div>
                  </div>
                )}
              </div>

              <div className="checkout-actions">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Procesando...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-check-circle me-2"></i>
                      Confirmar Compra
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="order-summary">
              <h4 className="summary-title">Resumen de tu Orden</h4>
              
              <div className="order-items">
                {cartItems.map(item => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} className="order-item-image" />
                    <div className="order-item-info">
                      <h6 className="order-item-name">{item.name}</h6>
                      <p className="order-item-details">
                        Cantidad: {item.quantity} × ${item.price}
                      </p>
                      <p className="order-item-subtotal">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-totals">
                <div className="total-line">
                  <span>Subtotal ({getTotalItems()} productos)</span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="total-line">
                  <span>Envío</span>
                  <span className="text-success">Gratis</span>
                </div>
                <hr />
                <div className="total-final">
                  <span>Total</span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
              </div>

              <div className="security-info">
                <i className="bi bi-shield-check me-2"></i>
                <small>Compra 100% segura y protegida</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
