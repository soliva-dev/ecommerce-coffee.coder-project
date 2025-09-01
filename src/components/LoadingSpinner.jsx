const LoadingSpinner = ({ message = "Cargando..." }) => {
  return (
    <div className="main-container">
      <div className="loading-container">
        <div className="spinner-border loading-spinner text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="loading-text">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
