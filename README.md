# ☕ Coffee Shop - E-commerce

Un e-commerce moderno de cafés desarrollado con React Vite y Firebase como proyecto final del curso de **ReactJS en CoderHouse**.

## 🚀 Descripción del Proyecto

Coffee Shop es una aplicación web de comercio electrónico especializada en la venta de diferentes tipos de café. Los usuarios pueden navegar por el catálogo, agregar productos al carrito, y realizar compras con un sistema completo de checkout.

## ✨ Características Principales

- 🛍️ **Catálogo de productos** con filtrado por categorías
- 🛒 **Carrito de compras** con gestión de cantidades
- 💳 **Sistema de checkout** completo con validación de formularios
- 🔥 **Integración con Firebase** para almacenamiento de órdenes
- 📱 **Diseño responsivo** con Bootstrap
- 🎨 **Interfaz moderna** y fácil de usar

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - React 18
  - React Router DOM
  - React Context API
  - Vite
  - Bootstrap 5
  - CSS3

- **Backend:**
  - Firebase Firestore
  - Firebase Hosting

- **Herramientas:**
  - ESLint
  - Git & GitHub

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/soliva-dev/ecommerce-coffee.coder-project.git
   cd ecommerce-coffee.coder-project
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu configuración de Firebase:
   ```env
   VITE_FIREBASE_API_KEY=api-key
   VITE_FIREBASE_AUTH_DOMAIN=proyecto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=project-id
   VITE_FIREBASE_STORAGE_BUCKET=proyecto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=sender-id
   VITE_FIREBASE_APP_ID=app-id
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── Cart.jsx         # Carrito de compras
│   ├── CartWidget.jsx   # Widget del carrito en navbar
│   ├── Checkout.jsx     # Proceso de checkout
│   ├── Item.jsx         # Tarjeta de producto
│   ├── ItemDetail.jsx   # Detalle del producto
│   ├── ItemList.jsx     # Lista de productos
│   ├── Layout.jsx       # Layout principal
│   └── NavBar.jsx       # Barra de navegación
├── context/             # Context API
│   └── CartContext.jsx  # Manejo del estado del carrito
├── mock/                # Datos de ejemplo
│   └── products.jsx     # Productos del catálogo
├── pages/               # Páginas
│   └── NotFound.jsx     # Página 404
├── service/             # Servicios
│   └── firebase.jsx     # Configuración y servicios de Firebase
└── styles/              # Estilos CSS
    └── components/      # Estilos por componente
```

## 🎯 Funcionalidades

### 🏪 Catálogo
- Visualización de productos por categorías (Espresso, Americano, Latte, etc.)
- Detalle completo de cada producto
- Stock disponible en tiempo real

### 🛒 Carrito
- Agregar/quitar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia durante la sesión

### 💰 Checkout
- Formulario completo de datos del comprador
- Validación de campos obligatorios
- Integración con Firebase para guardar órdenes
- Generación de ID único por compra
- Confirmación de compra exitosa

## 🔥 Firebase Integration

El proyecto utiliza Firebase Firestore para:
- Almacenar órdenes de compra
- Generar IDs únicos automáticamente
- Consultar historial de órdenes

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 Dispositivos móviles
- 📟 Tablets
- 💻 Escritorio

## 👨‍💻 Autor

**Samuel Oliva**
- GitHub: [@soliva-dev](https://github.com/soliva-dev)
- Proyecto: E-commerce Coffee Shop
- Curso: ReactJS - CoderHouse 2025

## 📝 Licencia

Este proyecto fue desarrollado como parte del curso de ReactJS en CoderHouse.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
