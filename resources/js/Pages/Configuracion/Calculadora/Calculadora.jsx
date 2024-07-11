import React, { useState, useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import InputDiv from '@/Components/others/InputDiv';
import SelectDiv from '@/Components/others/SelectDiv';
import axios from 'axios';
import PlazoModal from '@/Components/others/PlazoModal';

export default function Calculadora({ creditos, info }) {
  const dias = Array.from({ length: 36 }, (_, index) => index + 1);
  const [showModal, setShowModal] = useState(false);
  const [tipoCredito, setTipoCredito] = useState([]);
  const [frecuencias, setFrecuencias] = useState([]);
  const [plan, setPlan] = useState([]);
  const [data, setData] = useState({
    tcredito: '',
    monto: '',
    plazo: '',
    interes_anual: '',
    interes_mensual: '',
    frecuencia: ''
  });

  useEffect(() => {
    if (info && info.length > 0) {
      setTipoCredito(info[0].tipoCreditos);
      setFrecuencias(info[0].frecuencias);
    }
  }, [info]);

  const handleCalculate = () => {
    const cuotas = (parseInt(data.plazo) * (30 / parseInt(data.frecuencia)).toFixed(0));
    let saldo = (parseFloat(data.monto).toFixed(2));
    const int_mensual = (parseFloat(data.interes_anual) / 100) / ((360 * 12) / 365);
    const parte1 = (1 + int_mensual) ** (-cuotas);
    const parte2 = (1 - parte1);
    const parte3 = (parte2 / int_mensual);
    let cuota = ((saldo) / (parte3)).toFixed(2);
    const nuevoPlan = [];
    for (let i = 0; i < cuotas; i++) {
      const intCo = ((saldo * (parseFloat(data.interes_anual) / 100) * cuotas) / 360).toFixed(2);;
      const pagoPrinc = (cuota - intCo).toFixed(2);
      saldo -= pagoPrinc;
      saldo = saldo.toFixed(2);
      const planIndividual = {
        cuota: cuota,
        interes: intCo,
        pago: pagoPrinc,
        saldo: saldo
      };
      nuevoPlan.push(planIndividual);
    }
    setPlan(nuevoPlan);
  };

  const handleCloseModal = () => setShowModal(false);

  const handlePlazoChange = async (e) => {
    const newPlazo = e.target.value;
    setData((prevData) => ({ ...prevData, plazo: newPlazo }));

    if (data.tcredito && data.monto) {
      try {
        const response = await axios.post(`/calculadora/obtener_intereses/${data.tcredito}/${data.monto}/${newPlazo}`);
        setData((prevData) => ({
          ...prevData,
          interes_anual: response.data.interes_anual,
          interes_mensual: response.data.interes_mensual,
        }));
      } catch (error) {
        console.error(error);
        setShowModal(true);
        setData((prevData) => ({
          ...prevData,
          interes_anual: 0,
          interes_mensual: 0,
        }));
      }
    }
  };

  const handleRead = () => {
    return;
  };

  return (
    <GuestLayout>
      <Head title="Calculadora de Crédito" />
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">Calculadora de Crédito</h2>
        <form className='flex flex-col lg:flex-row lg:flex-wrap justify-between gap-2'>
          <SelectDiv
            label_text="Tipo de Crédito"
            id="tipo_credito"
            className="w-full lg:w-[200px] px-2 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={data.tcredito}
            onChange={(e) => setData({ ...data, tcredito: e.target.value })}
          >
            <option value="">Seleccione un crédito</option>
            {creditos.map((credito) => (
              <option key={credito.id} value={credito.id}>
                {credito.nombre}
              </option>
            ))}
          </SelectDiv>

          <InputDiv
            label_text="Monto"
            type="number"
            name="monto"
            id="monto"
            placeholder="Ingrese el monto U$"
            className="w-full lg:w-4/4"
            value={data.monto}
            onChange={(e) => setData({ ...data, monto: e.target.value })}
          />

          <SelectDiv
            label_text="Plazo en meses"
            type="number"
            name="plazo"
            id="plazo"
            placeholder="Ingrese el plazo"
            className="w-full lg:w-[200px]"
            value={data.plazo}
            onChange={handlePlazoChange}
          >
            <option value="">Seleccione su plazo</option>
            {dias.map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </SelectDiv>

          <InputDiv
            label_text="Interés Anual"
            type="text"
            name="interes_anual"
            id="interes_anual"
            className="w-full lg:w-4/4"
            value={data.interes_anual + '%'}
            onChange={handleRead}
            readOnly
          />

          <InputDiv
            label_text="Interés Mensual"
            type="text"
            name="interes_mensual"
            id="interes_mensual"
            className="w-full lg:w-4/4"
            onChange={handleRead}
            value={data.interes_mensual + '%'}
            readOnly
          />
          <SelectDiv
            label_text="Tipo de Crédito"
            id="tipo_credito"
            className="w-full lg:w-[200px] px-2 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={data.frecuencia}
            onChange={(e) => setData({ ...data, frecuencia: e.target.value })}
          >
            <option value="">Seleccione un crédito</option>
            {frecuencias.map((frecuencia) => (
              data.tcredito == 3 && frecuencia.id == 1 ? null : (
                <option key={frecuencia.id} value={frecuencia.dias}>
                  {frecuencia.frecuencia}
                </option>
              )
            ))}

          </SelectDiv>
          <button
            type="button"
            className="w-full h-[40px] mt-7 lg:w-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCalculate}
          >
            Calcular
          </button>
        </form>

      </div>
      <div className="mt-4 mb-4">
        <table className="w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Interés</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Pago Princ.</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Cuota</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">Saldo</th>
            </tr>
          </thead>
          <tbody>
            {plan.length == 0 ? <tr><td className="py-2 px-4 text-center text-gray-800" colSpan={4}>No hay planes</td></tr> : plan.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b">
                <td className="py-2 px-4 text-gray-800">{item.interes}</td>
                <td className="py-2 px-4 text-gray-800">{item.pago}</td>
                <td className="py-2 px-4 text-gray-800">{item.cuota}</td>
                <td className="py-2 px-4 text-gray-800">{item.saldo < 0 ? 0 : item.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
      <PlazoModal show={showModal} handleClose={handleCloseModal} />
    </GuestLayout>
  );
}
