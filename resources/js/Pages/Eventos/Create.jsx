// resources/js/Pages/Eventos/Create.jsx
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Create = ({ auth }) => {
    const { data, setData, post, errors } = useForm({
        titulo: '',
        descripcion: '',
        imagen: null,
        fecha: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('eventos.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Eventos - Crear</h2>}
        >
            <Head title="Crear Evento" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Crear Evento</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
                            Título
                        </label>
                        <input
                            type="text"
                            id="titulo"
                            value={data.titulo}
                            onChange={(e) => setData('titulo', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.titulo && <div className="text-red-500 text-sm mt-1">{errors.titulo}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            value={data.descripcion}
                            onChange={(e) => setData('descripcion', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.descripcion && <div className="text-red-500 text-sm mt-1">{errors.descripcion}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
                            Imagen
                        </label>
                        <input
                            type="file"
                            id="imagen"
                            onChange={(e) => setData('imagen', e.target.files[0])}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.imagen && <div className="text-red-500 text-sm mt-1">{errors.imagen}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">
                            Fecha
                        </label>
                        <input
                            type="date"
                            id="fecha"
                            value={data.fecha}
                            onChange={(e) => setData('fecha', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.fecha && <div className="text-red-500 text-sm mt-1">{errors.fecha}</div>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#90c225] hover:bg-[#f4ba04] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Crear Evento
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
