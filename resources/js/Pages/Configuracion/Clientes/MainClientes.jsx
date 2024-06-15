import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ButtonDiv from '@/Components/others/ButtonDiv';
import ConfirmModal from '@/Components/ConfirmModal';

export default function MainClientes({ auth, clientes }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const { delete: destroy, put } = useForm();
    const { flash } = usePage().props;

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        destroy(route('clientes.destroy', selectedId), {
            onSuccess: () => {
                console.log("Client deleted successfully");
                setShowModal(false);
            },
            onError: (errors) => {
                console.error("Failed to delete client:", errors);
            }
        });
    };

    const handleToggleMostrar = (id, currentValue) => {
        put(route('clientes.toggleMostrar', id), {
            data: { mostrar: !currentValue },
            onSuccess: () => {
                console.log("Mostrar status updated successfully");
            },
            onError: (errors) => {
                console.error("Failed to update mostrar status:", errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Configuración - Clientes</h2>}
        >
            <Head title="Clientes" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <div className="flex flex-row justify-between items-center">
                    <ButtonDiv ruta={route('configuracion')} text={'Regresar'} classname={'min-w-[150px]'} />
                    <ButtonDiv ruta={route('clientes.create')} text={'Crear Cliente'} classname={'min-w-[150px]'} />
                </div>
                <table className="min-w-full leading-normal mt-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Nombres</th>
                            <th className="px-4 py-2 text-left">Historia</th>
                            <th className="px-4 py-2 text-left">Mostrar</th>
                            <th className="px-4 py-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr className="border-b border-gray-200" key={cliente.id}>
                                <td className="px-4 py-2 text-left">{cliente.nombre} {cliente.apellidos}</td>
                                <td className="px-4 py-2 whitespace-normal break-words text-justify">{`${cliente.historia.slice(0, 200)}...`}</td>
                                <td className="px-4 py-2 text-left">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={cliente.mostrar}
                                            onChange={() => handleToggleMostrar(cliente.id, cliente.mostrar)}
                                            className="form-checkbox"
                                        />
                                        <span className="ml-2">{cliente.mostrar ? 'Sí' : 'No'}</span>
                                    </label>
                                </td>
                                <td className="px-4 py-2 text-left flex flex-row">
                                    <ButtonDiv ruta={route('clientes.edit', cliente.id)} text={'Editar'} classname={'min-w-[80px]'} />
                                    <button
                                        onClick={() => handleDeleteClick(cliente.id)}
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
                title="¿Estás seguro de que quieres eliminar este cliente?"
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
            />
        </AuthenticatedLayout>
    );
};
