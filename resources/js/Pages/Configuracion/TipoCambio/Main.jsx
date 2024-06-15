import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import ConfirmModal from '@/Components/ConfirmModal';

const TasaCambio = ({ }) => {

    return (
        <div className="p-6 flex flex-row justify-between border border-gray-200 rounded">
            <h1 className='font-bold'>Tasa de Cambio:</h1>
            <a href={route('tipo_cambio.create')} className="text-center w-1/4 bg-[#90c225] hover:bg-[#f4ba04] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Definir
            </a>
        </div>
    );
}
const Main = ({ tipoCambio }) => {

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden sm:rounded-lg">
                    <div className="justify-between lg:flex lg:flex-row md:flexmd:flex-col">
                        <div className="w-full m-4">
                            {(!tipoCambio || tipoCambio.length === 0) ? (
                                <TasaCambio />
                            ) : (
                                <div>
                                    {tipoCambio.map((tc) => (
                                        <div key={tc.id} className='flex flex-row items-center border border-gray-200 rounded justify-between'>
                                            <div className="p-6 flex flex-col">
                                                <h1 className='font-bold'>Tasa de Cambio</h1>
                                                <p>1 USD = C$ {tc.valor}</p>
                                            </div>
                                            <div className="p-6">
                                                <a href={route('tipo_cambio.edit', tc.id)} className="bg-[#90c225] hover:bg-[#f4ba04] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                    Editar
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Main;
