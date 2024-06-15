import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ConfirmModal from '@/Components/ConfirmModal';

export default function Main({ auth, eventos }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const { delete: destroy } = useForm();
    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        destroy(route('eventos.destroy', selectedId)); // Envía la solicitud para eliminar el evento en el backend // Elimina el evento en el frontend
        setShowModal(false); // Cierra el modal
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Eventos</h2>}
        >
            <Head title="Eventos" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="m-10">
                            <a href={route('eventos.create')} className="bg-[#90c225] hover:bg-[#f4ba04] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Crear Evento
                            </a>

                            <div className="mt-7 overflow-x-auto">
                                <table className="mt-4 w-full whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left">Id</th>
                                            <th className="px-4 py-2 text-left">Título</th>
                                            <th className="px-4 py-2 text-left">Descripción</th>
                                            <th className="px-4 py-2 text-left">Imagen</th>
                                            <th className="px-4 py-2 text-left">Fecha</th>
                                            <th className="px-4 py-2 text-left">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventos.map((evento) => (
                                            <tr key={evento.id} className="bg-white p-4 rounded-lg border-b border-gray-200">
                                                <td className="px-4 py-2 text-left">{evento.id}</td>
                                                <td className="px-4 py-2 text-left">{evento.titulo}</td>
                                                <td className="px-4 py-2 whitespace-normal break-words text-justify">{evento.descripcion}</td>
                                                <td className="px-4 py-2 whitespace-normal break-words text-justify w-w[20px]">{`${evento.imagen.slice(0, 30)}...`}</td>
                                                <td className="px-4 py-2">{evento.fecha}</td>
                                                <td className="px-4 py-2">
                                                    <button
                                                        onClick={() => handleDeleteClick(evento.id)}
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmModal
                show={showModal}
                title="¿Estás seguro de que quieres eliminar este evento?"
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
            />
        </AuthenticatedLayout>
    );
};

