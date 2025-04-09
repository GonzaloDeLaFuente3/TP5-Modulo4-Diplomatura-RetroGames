// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './router/AppRouter';
import { ItemProvider } from './contexts/ItemContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <ItemProvider> {/* Contexto que envuelve todo para que los componentes hijos puedan consumir los datos del contexto. */}
      
      <AppRouter /> {/* Controla qué vista se muestra según la ruta actual. */}
      <Footer />
      <ToastContainer />
      
    </ItemProvider>
  );
};

export default App;
