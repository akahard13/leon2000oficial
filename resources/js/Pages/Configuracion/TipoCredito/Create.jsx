import React from 'react';
import { useForm } from '@inertiajs/react';
import InputDiv from '@/Components/others/InputDiv';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Create = ({ auth, creditos }) => {
    const { data, setData, post, errors } = useForm({
        nombre: '',
        monto_minimo: '',
        monto_maximo: '',
        interes_anual: '',
        interes_mensual: '',
        plazo_maximo: '',
        credito_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('tipo_creditos.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tipos de Crédito - Crear</h2>}
        >
            <Head title="Crear Tipo de Crédito" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Crear Tipo de Crédito</h1>
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
                        label_text="Monto Mínimo"
                        type="number"
                        name="monto_minimo"
                        id="monto_minimo"
                        value={data.monto_minimo}
                        onChange={(e) => setData('monto_minimo', e.target.value)}
                    />
                    {errors.monto_minimo && <div className="text-red-500 text-sm mt-1">{errors.monto_minimo}</div>}

                    <InputDiv
                        label_text="Monto Máximo"
                        type="number"
                        name="monto_maximo"
                        id="monto_maximo"
                        value={data.monto_maximo}
                        onChange={(e) => setData('monto_maximo', e.target.value)}
                    />
                    {errors.monto_maximo && <div className="text-red-500 text-sm mt-1">{errors.monto_maximo}</div>}

                    <InputDiv
                        label_text="Interés Anual"
                        type="number"
                        step="0.01"
                        name="interes_anual"
                        id="interes_anual"
                        value={data.interes_anual}
                        onChange={(e) => setData('interes_anual', e.target.value)}
                    />
                    {errors.interes_anual && <div className="text-red-500 text-sm mt-1">{errors.interes_anual}</div>}

                    <InputDiv
                        label_text="Interés Mensual"
                        type="number"
                        step="0.01"
                        name="interes_mensual"
                        id="interes_mensual"
                        value={data.interes_mensual}
                        onChange={(e) => setData('interes_mensual', e.target.value)}
                    />
                    {errors.interes_mensual && <div className="text-red-500 text-sm mt-1">{errors.interes_mensual}</div>}

                    <InputDiv
                        label_text="Plazo Máximo"
                        type="number"
                        name="plazo_maximo"
                        id="plazo_maximo"
                        value={data.plazo_maximo}
                        onChange={(e) => setData('plazo_maximo', e.target.value)}
                    />
                    {errors.plazo_maximo && <div className="text-red-500 text-sm mt-1">{errors.plazo_maximo}</div>}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="credito_id">
                            Crédito
                        </label>
                        <select
                            name="credito_id"
                            id="credito_id"
                            value={data.credito_id}
                            onChange={(e) => setData('credito_id', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Seleccione un crédito</option>
                            {creditos.map((credito) => (
                                <option key={credito.id} value={credito.id}>
                                    {credito.nombre}
                                </option>
                            ))}
                        </select>
                        {errors.credito_id && <div className="text-red-500 text-sm mt-1">{errors.credito_id}</div>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Crear
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
