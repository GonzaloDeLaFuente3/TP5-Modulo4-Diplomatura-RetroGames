/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="loader mb-4">
            <div className="spinner"></div>
        </div>
        <p className="text-xl font-bold text-black">
            Cargando, por favor espere...
        </p>
        <style jsx>{`
            .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            }
            .spinner {
            border: 8px solid rgba(0, 0, 0, 0.3);
            border-top: 8px solid #000000;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            }
            @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
            }
        `}</style>
        </div>
    );
};

export default Loader;
