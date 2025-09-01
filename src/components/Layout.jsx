import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
