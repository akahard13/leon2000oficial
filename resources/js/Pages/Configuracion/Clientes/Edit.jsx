import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputDiv from '@/Components/others/InputDiv';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Edit = ({ auth, cliente }) => {
    const { data, setData, put, errors } = useForm({
        nombre: cliente.nombre || '',
        apellidos: cliente.apellidos || '',
        historia: cliente.historia || '',
        imagen: '',
        fecha: cliente.fecha || '',
        mostrar: cliente.mostrar || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('clientes.update', cliente.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Eventos - Editar</h2>}
        >
            <Head title="Editar Evento" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Editar Cliente</h1>
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

                    <InputDiv
                        label_text="Apellidos"
                        type="text"
                        name="apellidos"
                        id="apellidos"
                        value={data.apellidos}
                        onChange={(e) => setData('apellidos', e.target.value)}
                    />
                    {errors.apellidos && <div className="text-red-500 text-sm mt-1">{errors.apellidos}</div>}

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="historia">
                            Historia
                        </label>
                        <textarea
                            id="historia"
                            value={data.historia}
                            onChange={(e) => setData('historia', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.historia && <div className="text-red-500 text-sm mt-1">{errors.historia}</div>}
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

                    <InputDiv
                        label_text="Fecha"
                        type="date"
                        name="fecha"
                        id="fecha"
                        value={data.fecha}
                        onChange={(e) => setData('fecha', e.target.value)}
                    />
                    {errors.fecha && <div className="text-red-500 text-sm mt-1">{errors.fecha}</div>}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mostrar">
                            Mostrar
                        </label>
                        <input
                            type="checkbox"
                            name="mostrar"
                            id="mostrar"
                            checked={data.mostrar}
                            onChange={(e) => setData('mostrar', e.target.checked)}
                            className="mr-2 leading-tight"
                        />
                        {errors.mostrar && <div className="text-red-500 text-sm mt-1">{errors.mostrar}</div>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Actualizar
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
