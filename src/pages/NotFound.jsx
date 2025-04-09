/* eslint-disable no-unused-vars */
// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white py-8">
            <h1 className="text-8xl font-bold mb-4 animate-pulse">404</h1>
            <p className="text-2xl mb-8">Ups! Parece que te has perdido.</p>
            <p className="text-lg mb-8 text-center max-w-md">
                La página que estás buscando no existe o ha sido movida. No te
                preocupes, puedes volver al inicio y explorar otros juegos increíbles.
            </p>
            <button
                onClick={() => navigate("/")}
                className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-sky-400 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
                Volver al Inicio
            </button>
        </div>
    );
};

export default NotFound;
