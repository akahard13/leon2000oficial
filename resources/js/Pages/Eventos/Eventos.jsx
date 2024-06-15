// resources/js/Pages/Eventos/Eventos.jsx
import React from 'react';

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
const Eventos = ({ eventos }) => {
    return (
        <div className="p-2">
            <h1 className="text-2xl font-bold mb-4">Eventos Recientes</h1>
            <ul className="space-x-4 lg:flex lg:flex-row md:flex md:flex-col lg:justify-around items-center md:justify-center">
                {eventos.map((evento) => (
                    <li key={evento.id} className="mt-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 lg:min-w-[320px] lg:min-h-[480px]">
                        <div className="m-5">
                            <h2 className="text-xl font-semibold">{evento.titulo}</h2>
                            <p className="text-gray-700 text-justify">{evento.descripcion}</p>
                            {evento.imagen && (
                                <img src={evento.imagen} alt={evento.titulo} className="mt-2 w-96 h-60 rounded-md object-contain" />
                            )}
                            <p className="text-gray-500 mt-2 text-right">{formatDateToWords(evento.fecha)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Eventos;
