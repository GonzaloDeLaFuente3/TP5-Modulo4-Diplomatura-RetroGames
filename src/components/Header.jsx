import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';

import logo from "../assets/logo.png";

function Header() {
  /* animacion de rotacion para el logo */
    const [isRotating, setIsRotating] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    React.useEffect(() => {
        const rotationInterval = setInterval(() => {
            setIsRotating(true);
            setTimeout(() => {
            setIsRotating(false);
        }, 2000);
    }, 12000);

    return () => clearInterval(rotationInterval);
    }, []);

    return (
        <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-black p-4  z-50 bg-blue-300"
        >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            {/* logo */}
            <motion.img
                src={logo}
                alt="Logo"
                className="w-[60px] rounded-full"
                animate={{ rotate: isRotating ? 360 : 0 }}
                transition={{
                duration: 2,
                ease: "linear",
                repeat: isRotating ? Infinity : 0,
                }}
            />
            {/* Titulo */}
            <h1 className="text-2xl font-bold mt-2 sm:mt-0 mx-auto">
                Retro Games
            </h1>
            </div>
            <div className="flex space-x-4>">
                {(location.pathname !== '/items' && location.pathname !== '/') && (
                    <button
                        onClick={() => navigate("/items")}
                        className="bg-white text-blue-500 px-4 py-2 rounded mr-2 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                    >
                        Lista de Juegos
                    </button>
                )}
                {location.pathname !== '/items/create' && (
                    <button
                    onClick={() => navigate("/items/create")}
                    className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
                    >
                    Crear Juego
                    </button>
                )}
            
            </div>
        </div>
        </motion.header>
    );
}

export default Header;
