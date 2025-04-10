/* eslint-disable no-unused-vars */
// src/pages/ItemCreate.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ItemContext } from '../contexts/ItemContext';

const ItemCreate = () => {
  const {createItem} = useContext(ItemContext);//Acceso a la función de crear un nuevo juego
  const [formData, setFormData] = useState({//Estado para almacenar los datos del formulario
    title: '',
    release_year: '',
    platform: '',
    genre: '',
    cover_url: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {//Función para manejar los cambios en los campos del formulario
    setFormData({ ...formData, [e.target.name]: e.target.value });//Actualizar el estado con los nuevos valores.Actualizo solo el campo modificado.
  };

  const handleSubmit = async (e) => {//Función para manejar el envío del formulario
    e.preventDefault();//Prevenir el comportamiento predeterminado del formulario

    // Validaciones personalizadas
    if (!formData.title.trim()) {
      toast.error('El título es obligatorio');
      return;
    }

    const year = parseInt(formData.release_year, 10);
    if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
      toast.error('El año de lanzamiento debe ser un número válido entre 1900 y el año actual');
      return;
    }

    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(formData.cover_url.trim())) {
      toast.error('La URL de la portada no es válida');
      return;
    }

    await createItem(formData);//Crear un nuevo juego utilizando la función de contexto
    navigate('/items');
  };

  return (
    <div className="container mx-auto p-6 py-8">
      {/* Titulo */}
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Crear Nuevo Juego</h1>
      {/* Formulario */}
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
            minLength="3"
            maxLength="100"
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
            min="1900"
            max={new Date().getFullYear()}
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
            minLength="2"
            maxLength="50"
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
            minLength="2"
            maxLength="50"
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
        {/* Boton */}
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
