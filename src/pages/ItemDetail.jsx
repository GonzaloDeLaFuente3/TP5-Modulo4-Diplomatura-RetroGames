/* eslint-disable no-unused-vars */
// src/pages/ItemDetail.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../components/Loader';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetail = () => {
  const { items, deleteItem } = useContext(ItemContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const item = items.find(item => item.id === id);

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteItem(id);
        navigate('/items');
      }
    });
  };

  if (!item) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-black animate-fade-in-down">
        Detalles del Juego
      </h1>
      <div className="bg-blue-100 p-6 rounded-xl shadow-lg ">
        <img
          src={item.cover_url}
          alt={item.title}
          className="w-full  h-64 object-contain rounded-lg mb-4 transition-transform duration-500 hover:scale-115"
        />
        <div className=" text-center mb-4"> 
          <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
          <p className="text-gray-700 mb-1">Plataforma: {item.platform}</p>
          <p className="text-gray-700 mb-1">Género: {item.genre}</p>
          <p className="text-gray-700 mb-4">Año de Lanzamiento: {item.release_year}</p>

        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate(`/items/${item.id}/edit`)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
