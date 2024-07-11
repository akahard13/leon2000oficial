import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputDiv from '@/Components/others/InputDiv';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Edit = ({ auth, credito }) => {
    const { data, setData, put, errors } = useForm({
        nombre: credito.nombre || ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('creditos.update', credito.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Créditos - Editar</h2>}
        >
            <Head title="Editar Crédito" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Editar Crédito</h1>
                <form onSubmit={handleSubmit}>
                    <InputDiv
                        label_text="Nombre"
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={data.nombre}
                        onChange={(e) => setData('nombre', e.target.value)}
                    />
                    {errors.nombre && <div className="text-red-500 text-sm mt-1">{errors.nombre}</div>}

                    <br />

                    <button
                        type="submit"
                        className="bg-[#90c225] hover:bg-[#f4ba04] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Actualizar
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
