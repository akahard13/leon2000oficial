import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Show({ formulario, auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Solicitud N° {formulario.id}</h2>}
        >
            <Head title="Información Financiera" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="flex flex-row  justify-between items-center">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Detalles de la solicitud</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Información detallada de la solicitud.</p>
                                </div>
                                <a
                                    href={route('dashboard', formulario.id)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 max-h-[40px] mr-4"
                                >
                                    Regresar
                                </a>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Nombres</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.nombres}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Apellidos</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.apellidos}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.telefono}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Cédula</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.cedula}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Departamento</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.departamento?.nombre}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Muncipio</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.municipio?.nombre}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Dirección</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.direccion}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Sucursal</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.sucursal?.sucursal}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Tipo de Crédito</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formulario.tipo_credito?.nombre}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
};
