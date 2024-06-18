import React, { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import InputDiv from '@/Components/others/InputDiv';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import SelectDiv from '@/Components/others/SelectDiv';
import axios from 'axios';

export default function Create() {
    const { info } = usePage().props;
    const [dptos, setDptos] = useState([]);
    const [sucursal, setSucursal] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [frecuencias, setFrecuencias] = useState([]);
    const [creditos, setCreditos] = useState([]);

    useEffect(() => {
        setDptos(info[0].departamentos);
        setSucursal(info[0].sucursales);
        setFrecuencias(info[0].frecuencias);
        setCreditos(info[0].creditos);
    }, [info]);

    const { data, setData, post, errors, reset } = useForm({
        nombres: '',
        apellidos: '',
        cedula: '',
        departamento: '',
        municipio: '',
        direccion: '',
        telefono: '',
        sucursal: '',
        frecuencia_pago: '',
        tipo_credito: '',
        plazo_meses: '',
        monto: '',
        autorizacion: false,
    });

    const handleSubmit = (e) => {
        console.log(data)
        e.preventDefault();
        post(route('formularios.store'), {
            onSuccess: () => reset(),
        });
    };

    const handleMunicipio = async (e) => {
        const departamentoId = e.target.value;
        setData((prevState) => ({ ...prevState, departamento: departamentoId }));
        try {
            const response = await axios.post(`/formularios/municipiosPorDepartamento/${departamentoId}`);
            setMunicipios(response.data);
        } catch (error) {
            console.error('Error fetching municipios:', error);
        }
    };

    return (
        <GuestLayout>
            <Head title="Solicitar Crédito" />
            <h1 className="text-2xl font-bold mb-4">Crear Formulario</h1>
            <form onSubmit={handleSubmit}>
                <div className="rounded border border-gray-200 p-4 shadow-md">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <InputDiv
                            label_text="Nombres"
                            type="text"
                            name="nombre"
                            id="nombre"
                            value={data.nombres}
                            placeholder="Ingrese sus nombre"
                            onChange={(e) => setData('nombres', e.target.value)}
                            className="w-full lg:w-[500px]"
                        />
                        {errors.nombres && <div className="text-red-500 text-xs mt-1">{errors.nombres}</div>}

                        <InputDiv
                            label_text="Apellidos"
                            type="text"
                            name="apellidos"
                            id="apellidos"
                            value={data.apellidos}
                            placeholder="Ingrese sus apellido"
                            onChange={(e) => setData('apellidos', e.target.value)}
                            className="w-full lg:w-[500px]"
                        />
                        {errors.apellidos && <div className="text-red-500 text-xs mt-1">{errors.apellidos}</div>}
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between mt-6">
                        <InputDiv
                            label_text="Cédula"
                            type="text"
                            name="cedula"
                            id="cedula"
                            value={data.cedula}
                            placeholder="Ingrese su cedula 000-000000-0000X"
                            onChange={(e) => setData('cedula', e.target.value)}
                            className="w-full lg:w-[350px]"
                        />
                        {errors.cedula && <div className="text-red-500 text-xs mt-1">{errors.cedula}</div>}
                        <SelectDiv
                            label_text="Departamento"
                            name="departamento"
                            id="departamento"
                            onChange={handleMunicipio}
                            className="w-full lg:w-[350px]"
                        >
                            <option value="">
                                Seleccione un Departamento
                            </option>
                            {dptos.map((dpto) => (
                                <option key={dpto.id} value={dpto.id} className='text-black'>
                                    {dpto.nombre}
                                </option>
                            ))}
                        </SelectDiv>
                        {errors.departamento && <div className="text-red-500 text-xs mt-1">{errors.departamento}</div>}

                        <SelectDiv
                            label_text="Municipio"
                            name="municipio"
                            id="municipio"
                            onChange={(e) => setData('municipio', e.target.value)}
                            className="w-full lg:w-[350px]"
                        >
                            <option value="">
                                Seleccione un Municipio
                            </option>
                            {municipios.map((municipio) => (
                                <option key={municipio.id} value={municipio.id} className='text-black'>
                                    {municipio.nombre}
                                </option>
                            ))}
                        </SelectDiv>
                        {errors.municipio && <div className="text-red-500 text-xs mt-1">{errors.municipio}</div>}

                    </div>
                    <div className="flex flex-col lg:flex-row justify-between mt-6">
                        <InputDiv
                            label_text="Dirección"
                            type="text"
                            name="direccion"
                            id="direccion"
                            value={data.direccion}
                            placeholder="Ingrese su dirección"
                            onChange={(e) => setData('direccion', e.target.value)}
                            className="w-full lg:w-[850px]"
                        />
                        {errors.direccion && <div className="text-red-500 text-xs mt-1">{errors.direccion}</div>}
                        <InputDiv
                            label_text="Teléfono"
                            type="text"
                            name="telefono"
                            id="telefono"
                            value={data.telefono}
                            placeholder="Ingrese su número de telefono"
                            onChange={(e) => setData('telefono', e.target.value)}
                            className="w-full lg:w-[300px]"
                        />
                        {errors.telefono && <div className="text-red-500 text-xs mt-1">{errors.telefono}</div>}
                    </div>

                </div>

                <div className="rounded border border-gray-200 p-4 shadow-md mt-8">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <SelectDiv
                            label_text="Sucursal"
                            name="sucursal"
                            id="sucursal"
                            onChange={(e) => setData('sucursal', e.target.value)}
                            className="w-full lg:w-[600px]"
                        >
                            <option value="">
                                Seleccione una Sucursal
                            </option>
                            {sucursal.map((suc) => (
                                <option key={suc.id} value={suc.id} className='text-black'>
                                    {suc.sucursal}
                                </option>
                            ))}
                        </SelectDiv>
                        {errors.sucursal && <div className="text-red-500 text-xs mt-1">{errors.sucursal}</div>}

                        <SelectDiv
                            label_text="Frecuencia de Pago"
                            name="frecuencia_pago"
                            id="frecuencia_pago"
                            onChange={(e) => setData('frecuencia_pago', e.target.value)}
                            className="w-full lg:w-[600px]"
                        >
                            <option>
                                Seleccione una Frecuencia de Pago
                            </option>
                            {frecuencias.map((frec) => (
                                <option key={frec.id} value={frec.id} className='text-black'>
                                    {frec.frecuencia}
                                </option>
                            ))}
                        </SelectDiv>
                        {errors.frecuencia_pago && <div className="text-red-500 text-xs mt-1">{errors.frecuencia_pago}</div>}
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between mt-6">
                        <SelectDiv
                            label_text="Tipo de Crédito"
                            name="tipo_credito"
                            id="tipo_credito"
                            onChange={(e) => setData('tipo_credito', e.target.value)}
                            className="w-full lg:w-[350px]"
                        >
                            <option>
                                Seleccione un Tipo de Crédito
                            </option>
                            {creditos.map((cred) => (
                                <option key={cred.id} value={cred.id} className='text-black'>
                                    {cred.nombre}
                                </option>
                            ))}
                        </SelectDiv>
                        {errors.tipo_credito && <div className="text-red-500 text-xs mt-1">{errors.tipo_credito}</div>}

                        <InputDiv
                            label_text="Plazo en Meses"
                            type="text"
                            name="plazo_meses"
                            id="plazo_meses"
                            value={data.plazo_meses}
                            placeholder="Plazo en meses"
                            onChange={(e) => setData('plazo_meses', e.target.value)}
                            className="w-full lg:w-[200px]"
                        />
                        {errors.plazo_meses && <div className="text-red-500 text-xs mt-1">{errors.plazo_meses}</div>}
                        <InputDiv
                            label_text="Monto"
                            type="text"
                            name="monto"
                            id="monto"
                            value={data.monto}
                            placeholder="Monto solicitado"
                            onChange={(e) => setData('monto', e.target.value)}
                            className="w-full lg:w-[200px]"
                        />
                        {errors.monto && <div className="text-red-500 text-xs mt-1">{errors.monto}</div>}
                    </div>
                    <div className="flex flex-row items-center mt-6">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="autorizacion"
                                checked={data.autorizacion}
                                onChange={(e) => setData('autorizacion', e.target.checked)}
                            />
                            <span>Autorizo el uso de mis datos</span>
                        </label>
                        {errors.autorizacion && <div className="ml-2 text-red-500 text-xs mt-1">{errors.autorizacion}</div>}
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="px-6 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
