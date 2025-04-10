/* eslint-disable no-unused-vars */
// src/pages/ItemEdit.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemContext } from '../contexts/ItemContext';
import { toast } from 'react-toastify';

const ItemEdit = () => {
  const {updateItem, items } = useContext(ItemContext);//funcion para actualizar juego y todos los juegos 
  const [formData, setFormData] = useState({//formulario que guarda los datos del juego a editar 
    title: '',
    release_year: '',
    platform: '',
    genre: '',
    cover_url: '',
  });

  const { id } = useParams();//extraigo el id del juego desde la url
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length > 0) {//si hay juegos en el contexto
      const item = items.find(item => item.id === id);//busco el juego que quiero editar
      if (item) {//si el juego existe
        setFormData(item);//seteo el formulario con los datos del juego
      } else {
        toast.error('Juego no encontrado');
      }
    }
  }, [id, items]);

  const handleChange = (e) => {//funcion para manejar el cambio de los inputs del formulario
    setFormData({ ...formData, [e.target.name]: e.target.value });//seteo el formulario con los datos del input que cambio
  };

  const handleSubmit = async (e) => {//funcion para manejar el submit del formulario
    e.preventDefault();

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

    await updateItem({ ...formData, id });//actualizo el juego con los datos del formulario y el id del juego
    navigate('/items');
  };

  return (
    <div className="container mx-auto p-6 py-8">
      {/* Titulo */}
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Editar Juego</h1>
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
        <div className="flex justify-center space-x-4 ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemEdit;
