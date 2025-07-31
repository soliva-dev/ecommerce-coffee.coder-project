import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/components/Layout.css';

const Layout = ({ children, cartItems, getTotalItems }) => {
  return (
    <div className="app-container">
      <NavBar cartItems={cartItems} getTotalItems={getTotalItems} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
