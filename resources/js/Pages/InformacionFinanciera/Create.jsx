
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Create = ({ auth }) => {
    const { data, setData, post, errors } = useForm({
        nombre: '',
        link: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('informacion_financiera.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Información Financiera - Crear</h2>}
        >
            <Head title="Agregar Información Financiera" />
            <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Agregar Información Financiera</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <button type="submit" className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;



