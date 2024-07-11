import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Main from './Configuracion/TipoCambio/Main';
import Redirect from './Configuracion/Clientes/Redirect';
import RedirectButtons from './Configuracion/RedirectButtons';
const Configuracion = ({ auth, tipoCambio }) => {
    const [tasaCambio, setTasaCambio] = useState(tipoCambio);
    useEffect(() => {
        setTasaCambio(tipoCambio);
    }, [tipoCambio]);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Configuración</h2>}
        >
            <Head title="Configuracion" />
            <div className="py-8">
                <div className="rounded mt-2">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <Main tipoCambio={tasaCambio} />
                        </div>
                    </div>
                </div>
                <div className="rounded mt-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <RedirectButtons
                                title="Clientes"
                                createRoute={route('clientes.create')}
                                listRoute={route('clientes.index')}
                                createText="Crear"
                                listText="Ver Lista"
                            />
                        </div>
                    </div>
                </div>
                <div className="rounded mt-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <RedirectButtons
                                title="Créditos"
                                createRoute={route('creditos.create')}
                                listRoute={route('creditos.index')}
                                createText="Crear"
                                listText="Ver Lista"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Configuracion;
