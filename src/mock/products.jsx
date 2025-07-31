const products = [
  {
    id: 1,
    name: "Café Espresso Premium",
    category: "espresso",
    price: 1250,
    image: "https://images.unsplash.com/photo-1705952285570-113e76f63fb0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVzcHJlc3NvJTIwY29mZmVlfGVufDB8fDB8fHww",
    description: "Un espresso intenso y aromático con notas de chocolate negro y caramelo. Perfecto para comenzar el día con energía.",
    stock: 25
  },
  {
    id: 2,
    name: "Café Americano Suave",
    category: "americano",
    price: 980,
    image: "https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW1lcmljYW5vfGVufDB8fDB8fHww",
    description: "Un café suave y equilibrado, ideal para disfrutar en cualquier momento del día. Con un sabor delicado y persistente.",
    stock: 30
  },
  {
    id: 3,
    name: "Café Latte Cremoso",
    category: "latte",
    price: 1150,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF0dGV8ZW58MHx8MHx8fDA%3D",
    description: "Una mezcla perfecta de espresso y leche vaporizada, coronada con una espuma cremosa y suave.",
    stock: 20
  },
  {
    id: 4,
    name: "Café Cappuccino Tradicional",
    category: "cappuccino",
    price: 1100,
    image: "https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FwcHVjY2lubyUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "El clásico cappuccino italiano con la proporción perfecta de espresso, leche y espuma.",
    stock: 22
  },
  {
    id: 5,
    name: "Café Mocha Chocolate",
    category: "especiales",
    price: 1350,
    image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY29mZmVlfGVufDB8fDB8fHww",
    description: "Una deliciosa combinación de café espresso, chocolate caliente y leche vaporizada. Un verdadero placer.",
    stock: 15
  },
  {
    id: 6,
    name: "Café Frappé Helado",
    category: "frios",
    price: 1200,
    image: "https://images.unsplash.com/photo-1627998792088-f8016b438988?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyYXBwdWNjaW5vfGVufDB8fDB8fHww",
    description: "Refrescante café helado batido con hielo, perfecto para los días calurosos. Incluye crema batida.",
    stock: 18
  },
  {
    id: 7,
    name: "Café Cortado Argentino",
    category: "especiales",
    price: 950,
    image: "https://images.unsplash.com/photo-1519532059956-a63a37af5deb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ydGFkb3xlbnwwfHwwfHx8MA%3D%3D",
    description: "El tradicional cortado argentino, con la medida justa de leche caliente para cortar el espresso.",
    stock: 28
  },
  {
    id: 8,
    name: "Café Cold Brew",
    category: "frios",
    price: 1080,
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBicmV3fGVufDB8fDB8fHww",
    description: "Café extraído en frío durante 12 horas, resultando en una bebida suave, menos ácida y naturalmente dulce.",
    stock: 12
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(productId));
      resolve(product);
    }, 1000);
  });
};
