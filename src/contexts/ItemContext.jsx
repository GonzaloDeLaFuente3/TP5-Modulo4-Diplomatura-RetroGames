/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/context/ItemContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ItemContext = createContext(); // Creo el Contexto para compartir datos entre componentes

export const ItemProvider = ({ children }) => {// Proveedor del contexto
  const [items, setItems] = useState([]);// Estado para almacenar los juegos
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  const apiURL = 'https://67f434cecbef97f40d2db18a.mockapi.io/api/v1/game';

  useEffect(() => {// Efecto para cargar los juegos al iniciar la aplicación
    fetchItems();
  }, []);

  const fetchItems = async () => {// Función para obtener los juegos desde la API
    setLoading(true); // Activa el loader antes de la solicitud
    try {
      const response = await axios.get(apiURL);// Realiza la solicitud GET a la API
      setItems(response.data);// Actualiza el estado con los datos obtenidos
    } catch (error) {
      toast.error('Error al cargar los juegos');
    }finally {
      setLoading(false); // Desactiva el loader después de la solicitud
    }
  };

  const createItem = async (newItem) => {// Función para crear un nuevo juego
    try {
      const response = await axios.post(apiURL, newItem);
      setItems([...items, response.data]);// Actualiza el estado con el nuevo juego
      toast.success('Juego creado exitosamente');
    } catch (error) {
      toast.error('Error al crear el juego');
    }
  };

  const updateItem = async (updatedItem) => {// Función para actualizar un juego existente
    try {
      const response = await axios.put(`${apiURL}/${updatedItem.id}`, updatedItem);
      setItems(items.map(item => item.id === updatedItem.id ? response.data : item));// Actualiza el estado con el juego actualizado.lo reemplazo con response.data 
      toast.success('Juego actualizado exitosamente');
    } catch (error) {
      toast.error('Error al actualizar el juego');
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${apiURL}/${id}`);
      setItems(items.filter(item => item.id !== id));// Elimina el juego del estado. Filtra los juegos y elimina el que coincide con el id
      toast.success('Juego eliminado exitosamente');
    } catch (error) {
      toast.error('Error al eliminar el juego');
    }
  };

  return (
    <ItemContext.Provider value={{ items, createItem, updateItem, deleteItem, fetchItems, loading  }}>{/* // Proporciona el contexto a los componentes hijos */}
      {children}{/* // Renderiza los componentes hijos */}
    </ItemContext.Provider>
  );
};
