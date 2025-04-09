/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/context/ItemContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const apiURL = 'https://67f434cecbef97f40d2db18a.mockapi.io/api/v1/game';

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(apiURL);
      setItems(response.data);
    } catch (error) {
      toast.error('Error al cargar los juegos');
    }
  };

  const createItem = async (newItem) => {
    try {
      const response = await axios.post(apiURL, newItem);
      setItems([...items, response.data]);
      toast.success('Juego creado exitosamente');
    } catch (error) {
      toast.error('Error al crear el juego');
    }
  };

  const updateItem = async (updatedItem) => {
    try {
      const response = await axios.put(`${apiURL}/${updatedItem.id}`, updatedItem);
      setItems(items.map(item => item.id === updatedItem.id ? response.data : item));
      toast.success('Juego actualizado exitosamente');
    } catch (error) {
      toast.error('Error al actualizar el juego');
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${apiURL}/${id}`);
      setItems(items.filter(item => item.id !== id));
      toast.success('Juego eliminado exitosamente');
    } catch (error) {
      toast.error('Error al eliminar el juego');
    }
  };

  return (
    <ItemContext.Provider value={{ items, createItem, updateItem, deleteItem, fetchItems }}>
      {children}
    </ItemContext.Provider>
  );
};
