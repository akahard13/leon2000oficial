import React, { useState } from 'react';

const formatDateToWords = (dateString) => {
    const months = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month) - 1;
    const monthName = months[monthIndex];

    return `${parseInt(day)} de ${monthName} del ${year}`;
};

const ClientList = ({ clientes }) => {
    const [expandedClienteId, setExpandedClienteId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedClienteId(expandedClienteId === id ? null : id);
    };

    return (
        <div className="p-2">
            <h1 className="text-2xl font-bold mb-4">Nuestros Clientes</h1>
            <ul className="space-y-4">
                {clientes.map((cliente) => (
                    <li key={cliente.id} className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                        <div className="flex flex-col lg:flex-row">
                            {cliente.imagen && (
                                <img
                                    src={cliente.imagen}
                                    alt={`Imagen de ${cliente.nombre}`}
                                    className="w-full lg:w-1/3 h-auto rounded-md object-contain mb-4 lg:mb-0"
                                />
                            )}
                            <div className="flex flex-col lg:w-2/3 lg:ml-4">
                                <h2 className="text-xl font-semibold">{cliente.nombre} {cliente.apellidos}</h2>
                                <p className="text-gray-700 text-justify">
                                    {expandedClienteId === cliente.id
                                        ? cliente.historia
                                        : `${cliente.historia.slice(0, 500)}...`}
                                </p>
                                {cliente.historia.length > 200 && (
                                    <button
                                        onClick={() => toggleExpand(cliente.id)}
                                        className="text-blue-500 mt-2"
                                    >
                                        {expandedClienteId === cliente.id ? 'Ver menos' : 'Ver más'}
                                    </button>
                                )}
                                <p className="text-gray-500 mt-2 text-right">{formatDateToWords(cliente.fecha)}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
