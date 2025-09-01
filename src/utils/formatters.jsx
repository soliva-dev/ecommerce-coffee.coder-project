const hacerMayuscula = (texto) => {
  if (!texto) return '';
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};

const formatearPrecio = (precio) => {
  return '$' + precio;
};

const cortarTexto = (texto, limite) => {
  if (!texto) return '';
  if (texto.length <= limite) return texto;
  return texto.substring(0, limite) + '...';
};

export { hacerMayuscula, formatearPrecio, cortarTexto };
