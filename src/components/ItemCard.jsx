/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/ItemCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-md text-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-300  flex flex-col h-full">
      <img src={item.cover_url} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
      <p className="text-gray-600">{item.platform}</p>
      <button onClick={() => navigate(`/items/${item.id}`)} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 mt-2 cursor-pointer">
        Ver Detalles
      </button>
    </div>
  );
};

export default ItemCard;
