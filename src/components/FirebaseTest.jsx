import { useState } from 'react';
import { ordersService } from '../firebase/orders';

const FirebaseTest = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [loading, setLoading] = useState(false);

  const testFirebaseConnection = async () => {
    setLoading(true);
    try {
      const testOrder = {
        items: [{ name: 'Test Coffee', price: 100, quantity: 1 }],
        buyer: { 
          firstName: 'Test', 
          lastName: 'User', 
          email: 'test@test.com',
          phone: '123456789',
          address: 'Test Address',
          city: 'Test City',
          postalCode: '12345'
        },
        total: 100,
        paymentMethod: 'credit-card'
      };

      const result = await ordersService.createOrder(testOrder);
      console.log('Test order created:', result);
      setIsConnected(true);
    } catch (error) {
      console.error('Firebase connection error:', error);
      setIsConnected(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5>🔥 Prueba de Conexión Firebase</h5>
        </div>
        <div className="card-body">
          <button 
            className="btn btn-primary"
            onClick={testFirebaseConnection}
            disabled={loading}
          >
            {loading ? 'Probando...' : 'Probar Conexión'}
          </button>
          
          {isConnected === true && (
            <div className="alert alert-success mt-3">
              ✅ ¡Firebase conectado correctamente!
            </div>
          )}
          
          {isConnected === false && (
            <div className="alert alert-danger mt-3">
              ❌ Error conectando con Firebase. Revisa la configuración.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirebaseTest;
