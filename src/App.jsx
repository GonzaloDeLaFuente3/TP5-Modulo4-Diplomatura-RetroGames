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
    <ItemProvider>
      
      <AppRouter />
      <Footer />
      <ToastContainer />
      
    </ItemProvider>
  );
};

export default App;
