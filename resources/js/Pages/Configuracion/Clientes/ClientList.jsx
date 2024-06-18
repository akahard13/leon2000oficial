import React, { useState } from 'react';
import ButtonDiv from '@/Components/others/ButtonDiv';
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
                    <li key={cliente.id} className="bg-green-100 p-4 rounded-lg shadow-lg border border-gray-200">
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
                                    {`${cliente.historia.slice(0, 500)}...`}
                                </p>
                                <div className="flex mt-10 justify-between">
                                    {cliente.historia.length > 500 && (
                                        <ButtonDiv ruta={route('public.home')} text={'Ver Más'} />
                                    )}
                                    <p className="text-gray-500 mt-2 text-right">{formatDateToWords(cliente.fecha)}</p>
                                </div>

                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientList;
