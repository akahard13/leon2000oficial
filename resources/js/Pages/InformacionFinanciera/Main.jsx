import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import ConfirmModal from '@/Components/ConfirmModal';


export default function Main({ auth, informacionFinancieras }) {
    const { delete: destroy } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        destroy(route('informacion_financiera.destroy', selectedId));
        setShowModal(false);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Información Financiera</h2>}
        >
            <Head title="Información Financiera" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="m-10">
                            <a
                                href={route('informacion_financiera.create')}
                                className="bg-[#90c225] hover:bg-[#f4ba04] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Agregar Información Financiera
                            </a>
                            {informacionFinancieras && informacionFinancieras.length > 0 ? (
                                <div className="mt-7 overflow-x-auto ">
                                    <table className="mt-4 w-full whitespace-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="text-left p-2">ID</th>
                                                <th className="text-left p-2">Nombre</th>
                                                <th className="text-left p-2">Link</th>
                                                <th className="text-left p-2">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {informacionFinancieras.map((informacionFinanciera) => (
                                                <tr className="border-b border-gray-200" key={informacionFinanciera.id}>
                                                    <td className="text-left p-2">{informacionFinanciera.id}</td>
                                                    <td className="text-left p-2">{informacionFinanciera.nombre}</td>
                                                    <td className="text-left p-2">{informacionFinanciera.link}</td>
                                                    <td className="flex flex-row text-left p-2">
                                                        <button
                                                            onClick={() => handleDeleteClick(informacionFinanciera.id)}
                                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                        >
                                                            Eliminar
                                                        </button>
                                                        <a
                                                            href={route('informacion_financiera.edit', informacionFinanciera.id)}
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                                                        >
                                                            Editar
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <h1 className="mt-4">No hay Información Financiera</h1>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmModal
                show={showModal}
                title="¿Estás seguro de que quieres eliminar este item?"
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
            />
        </AuthenticatedLayout>
    );
}
