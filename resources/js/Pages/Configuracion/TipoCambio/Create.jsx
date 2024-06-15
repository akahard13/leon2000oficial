import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create ({ auth })  {
    const { data, setData, post, errors } = useForm({
        valor: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('tipo_cambio.store'), {
            // Puedes agregar lógica adicional aquí si es necesario
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Tasa de Cambio</h2>}
        >
            <Head title="Crear Tasa de Cambio" />
            <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Crear Tasa de Cambio</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="valor" className="block text-gray-700 text-sm font-bold mb-2">Valor:</label>
                        <input
                            type="text"
                            name="valor"
                            id="valor"
                            value={data.valor}
                            onChange={(e) => setData('valor', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.valor && <div className="text-red-500 text-sm mt-1">{errors.valor}</div>}
                    </div>
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};
