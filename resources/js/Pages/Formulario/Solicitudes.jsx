import React from 'react';

const Solicitudes = ({ formularios }) => {
    return (
        <div className="sm:px-6 w-full">

            <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 ">
                <div className="sm:flex items-center justify-around">
                    <div className="flex items-center ">
                        <a className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
                            <div className="py-2 px-8 hover:bg-indigo-100 hover:text-indigo-700 rounded-full">
                                <p>All</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                            <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Done</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                            <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Pending</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <th className="text-left p-2">Nombres</th>
                        <th className="text-left p-2">Apellidos</th>
                        <th className="text-left p-2">Teléfono</th>
                        <th className="text-left p-2">Departamento</th>
                        <th className="text-left p-2">Sucursal</th>
                        <th className="text-left p-2">Tipo de Crédito</th>
                        <th className="text-left p-2">Acción</th>
                        <tbody>
                            {formularios.map(formulario => (
                                <tr key={formulario.id} className='focus:outline-none h-16 border border-gray-100 rounded'>
                                    <td className="text-left">
                                        <div className="ml-6">
                                            <div className="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                {formulario.nombres}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left p-2">
                                        <div className="ml-4">
                                            <div className="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                {formulario.apellidos}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left p-2">
                                        <div className="ml-6">
                                            <div className="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                {formulario.telefono}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left p-2">
                                        <div className="ml-3">
                                            <div className="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                {formulario.departamento?.nombre}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left p-2">
                                        <div className="ml-2">
                                            <div className="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                {formulario.sucursal?.sucursal}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left p-2">
                                        <div className="ml-12">
                                            <div className="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                {formulario.tipo_credito?.nombre}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left p-2">
                                        <div className="ml-8">
                                            <div className="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input type="checkbox" name="estado" id="estado" />
                                            </div>
                                        </div>
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
