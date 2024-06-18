import ButtonDiv from '@/Components/others/ButtonDiv';
import React from 'react';

const Solicitudes = ({ formularios }) => {
    return (
        <div className="sm:px-6 w-full">

            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div className="sm:flex items-center justify-around mb-4">
                    <div className="flex items-center space-x-4 sm:space-x-8">
                        <a href="#" className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800">
                            <div className="py-2 px-8 hover:bg-indigo-100 hover:text-indigo-700 rounded-full">
                                <p>All</p>
                            </div>
                        </a>
                        <a href="#" className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800">
                            <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full">
                                <p>Done</p>
                            </div>
                        </a>
                        <a href="#" className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800">
                            <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full">
                                <p>Pending</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left p-4">Nombres</th>
                                <th className="text-left p-4">Apellidos</th>
                                <th className="text-left p-4">Teléfono</th>
                                <th className="text-left p-4">Departamento</th>
                                <th className="text-left p-4">Sucursal</th>
                                <th className="text-left p-4">Tipo de Crédito</th>
                                <th className="text-left p-4">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formularios.map((formulario, index) => (
                                <tr key={formulario.id} className={`focus:outline-none h-16 border-t border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                    <td className="text-left p-4">
                                        <div className="text-sm">
                                            {formulario.nombres}
                                        </div>
                                    </td>
                                    <td className="text-left p-4">
                                        <div className="text-sm">
                                            {formulario.apellidos}
                                        </div>
                                    </td>
                                    <td className="text-left p-4">
                                        <div className="text-sm">
                                            {formulario.telefono}
                                        </div>
                                    </td>
                                    <td className="text-left p-4">
                                        <div className="text-sm">
                                            {formulario.departamento?.nombre}
                                        </div>
                                    </td>
                                    <td className="text-left p-4">
                                        <div className="text-sm">
                                            {formulario.sucursal?.sucursal}
                                        </div>
                                    </td>
                                    <td className="text-left p-4">
                                        <div className="text-sm">
                                            {formulario.tipo_credito?.nombre}
                                        </div>
                                    </td>
                                    <td className="text-left p-4">
                                        <a
                                            href={route('formularios.show', formulario.id)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                                        >
                                            Revisar
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Solicitudes;
