import React from 'react';

const handleClick = (opt) => () => {
    if (opt === 1) {
        window.location.href = "/solicitar_credito";
    } else {
        window.location.href = "/calcular_credito";
    }
};

const Sidebar = () => {
    return (
        <div className="block w-auto rounded-lg ml-14 p-6 text-surface">
            <h2 className="mb-2 text-4xl font-arial font-bold leading-tight">
                Leon2000 IMF S.A.
            </h2>
            <p className="mb-4 text-base">
                Realiza tus gestiones con nosotros, haz clic abajo.
            </p>
            <div className="flex flex-col">
                <button
                    type="button"
                    onClick={handleClick(1)}
                    className="px-6 py-2 bg-[#1172b9] text-white font-semibold rounded-lg shadow-md hover:bg-[#f4ba04] hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                    Solicita tu crédito
                </button>
                <button
                    type="button"
                    onClick={handleClick(2)}
                    className="mt-8 px-6 py-2 bg-[#1172b9] text-white font-semibold rounded-lg shadow-md hover:bg-[#f4ba04] hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
                    Cálcula tu crédito
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
