/* eslint-disable no-unused-vars */
// src/pages/ItemCreate.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ItemContext } from '../contexts/ItemContext';

const ItemCreate = () => {
  const {createItem} = useContext(ItemContext);
  const [formData, setFormData] = useState({
    title: '',
    release_year: '',
    platform: '',
    genre: '',
    cover_url: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem(formData);
    navigate('/items');
  };

  return (
    <div className="container mx-auto p-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Crear Nuevo Juego</h1>
      <form onSubmit={handleSubmit} className="bg-blue-100  p-8 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Año de Lanzamiento</label>
          <input
            type="number"
            name="release_year"
            placeholder="Año de Lanzamiento"
            value={formData.release_year}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Plataforma</label>
          <input
            type="text"
            name="platform"
            placeholder="Plataforma"
            value={formData.platform}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Género</label>
          <input
            type="text"
            name="genre"
            placeholder="Género"
            value={formData.genre}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">URL de la Portada</label>
          <input
            type="url"
            name="cover_url"
            placeholder="URL de la Portada"
            value={formData.cover_url}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            Crear Juego
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemCreate;
