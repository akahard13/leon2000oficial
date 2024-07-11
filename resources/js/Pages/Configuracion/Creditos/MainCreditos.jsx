import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ButtonDiv from '@/Components/others/ButtonDiv';
import ConfirmModal from '@/Components/ConfirmModal';

export default function MainCreditos({ auth, creditos }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const { delete: destroy, put } = useForm();
    const { flash } = usePage().props;

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        destroy(route('creditos.destroy', selectedId), {
            onSuccess: () => {
                console.log("Credito deleted successfully");
                setShowModal(false);
            },
            onError: (errors) => {
                console.error("Failed to delete credito:", errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Configuración - Créditos</h2>}
        >
            <Head title="Créditos" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <div className="flex flex-row justify-between items-center">
                    <ButtonDiv ruta={route('configuracion')} text={'Regresar'} classname={'min-w-[150px]'} />
                    <ButtonDiv ruta={route('creditos.create')} text={'Crear Crédito'} classname={'min-w-[150px]'} />
                </div>
                <table className="min-w-full leading-normal mt-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Nombre</th>
                            <th className="px-4 py-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {creditos.map((credito) => (
                            <tr className="border-b border-gray-200" key={credito.id}>
                                <td className="px-4 py-2 text-left">{credito.nombre}</td>
                                <td className="px-4 py-2 text-left flex flex-row">
                                    <ButtonDiv ruta={route('creditos.edit', credito.id)} text={'Editar'} classname={'min-w-[80px]'} />
                                    <button
                                        onClick={() => handleDeleteClick(credito.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ConfirmModal
                show={showModal}
                title="¿Estás seguro de que quieres eliminar este crédito?"
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
            />
        </AuthenticatedLayout>
    );
};
