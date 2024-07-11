import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ButtonDiv from '@/Components/others/ButtonDiv';
import ConfirmModal from '@/Components/ConfirmModal';

export default function MainTipoCredito({ auth, tipoCreditos }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const { delete: destroy } = useForm();
    const { flash } = usePage().props;

    const handleDeleteClick = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        destroy(route('tipo_creditos.destroy', selectedId), {
            onSuccess: () => {
                console.log("Tipo de Crédito eliminado con éxito");
                setShowModal(false);
            },
            onError: (errors) => {
                console.error("Error al eliminar el Tipo de Crédito:", errors);
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Configuración - Tipos de Créditos</h2>}
        >
            <Head title="Tipos de Créditos" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <div className="flex flex-row justify-between items-center">
                    <ButtonDiv ruta={route('configuracion')} text={'Regresar'} classname={'min-w-[150px]'} />
                    <ButtonDiv ruta={route('tipo_creditos.create')} text={'Crear Tipo de Crédito'} classname={'min-w-[150px]'} />
                </div>
                <table className="min-w-full leading-normal mt-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 text-left">Crédito</th>
                            <th className="px-4 py-2 text-left">Nombre</th>
                            <th className="px-4 py-2 text-left">Monto Mínimo</th>
                            <th className="px-4 py-2 text-left">Monto Máximo</th>
                            <th className="px-4 py-2 text-left">Intereses Anuales</th>
                            <th className="px-4 py-2 text-left">Intereses Mensuales</th>
                            <th className="px-4 py-2 text-left">Plazo Máximo</th>
                            <th className="px-4 py-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tipoCreditos.map((tipoCredito) => (
                            <tr className="border-b border-gray-200" key={tipoCredito.id}>
                                <td className="px-4 py-2 text-left">{tipoCredito.credito?.nombre}</td>
                                <td className="px-4 py-2 text-left">{tipoCredito.nombre}</td>
                                <td className="px-4 py-2 text-left">{tipoCredito.monto_minimo}</td>
                                <td className="px-4 py-2 text-left">{tipoCredito.monto_maximo}</td>
                                <td className="px-4 py-2 text-left">{tipoCredito.interes_anual}%</td>
                                <td className="px-4 py-2 text-left">{tipoCredito.interes_mensual}%</td>
                                <td className="px-4 py-2 text-left">{tipoCredito.plazo_maximo} Meses</td>
                                <td className="px-4 py-2 text-left flex flex-row">
                                    <ButtonDiv ruta={route('tipo_creditos.edit', tipoCredito.id)} text={'Editar'} classname={'min-w-[80px]'} />
                                    <button
                                        onClick={() => handleDeleteClick(tipoCredito.id)}
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
                title="¿Estás seguro de que quieres eliminar este Tipo de Crédito?"
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirm}
            />
        </AuthenticatedLayout>
    );
};
