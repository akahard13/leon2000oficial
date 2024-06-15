import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Solicitudes from '@/Pages/Formulario/Solicitudes';

export default function Dashboard({ auth, formularios }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="m-10">
                            <h3><b>Listado de Solicitudes</b></h3>
                            <Solicitudes formularios={formularios} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
