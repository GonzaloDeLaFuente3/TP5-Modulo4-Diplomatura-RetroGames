/* eslint-disable no-unused-vars */
// src/pages/ItemList.jsx

import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import ItemCard from "../components/ItemCard";

const ItemList = () => {
  const { items } = useContext(ItemContext);

  return (
    <div className="container mx-auto p-4 py-8 bg-blue-50">
      <h1 className="text-3xl font-bold mb-4 text-center">Lista de Juegos Retro</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
