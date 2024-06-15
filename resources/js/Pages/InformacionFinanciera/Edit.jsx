import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Edit = ({ informacionFinanciera, auth }) => {
    const { data, setData, put, errors } = useForm({
        nombre: informacionFinanciera.nombre,
        link: informacionFinanciera.link,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('informacion_financiera.update', informacionFinanciera.id), {
            
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Información Financiera</h2>}
        >
            <Head title="Editar Información Financiera" />
            <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Editar Información Financiera</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            value={data.nombre}
                            onChange={(e) => setData('nombre', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.nombre && <div className="text-red-500 text-sm mt-1">{errors.nombre}</div>}
                    </div>
                    <div>
                        <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">Link:</label>
                        <input
                            type="text"
                            name="link"
                            id="link"
                            value={data.link}
                            onChange={(e) => setData('link', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.link && <div className="text-red-500 text-sm mt-1">{errors.link}</div>}
                    </div>
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;