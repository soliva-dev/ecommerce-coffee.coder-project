import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="footer-title mb-2">☕ Coffee Shop</h6>
            <div className="d-flex flex-wrap">
              <a href="/" className="footer-link me-3 mb-1">Inicio</a>
              <a href="/category/espresso" className="footer-link me-3 mb-1">Espresso</a>
              <a href="/category/americano" className="footer-link me-3 mb-1">Americano</a>
              <a href="/category/latte" className="footer-link me-3 mb-1">Latte</a>
              <a href="/category/cappuccino" className="footer-link me-3 mb-1">Cappuccino</a>
              <a href="/category/especiales" className="footer-link me-3 mb-1">Especiales</a>
              <a href="/category/frios" className="footer-link mb-1">Fríos</a>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="copyright mb-1">© 2025 ☕ Coffee Shop - Proyecto CoderHouse - soliva-dev</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="me-2 social-icon"><i className="bi bi-facebook fs-6"></i></a>
              <a href="#" aria-label="Instagram" className="me-2 social-icon"><i className="bi bi-instagram fs-6"></i></a>
              <a href="#" aria-label="Twitter" className="social-icon"><i className="bi bi-twitter fs-6"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
