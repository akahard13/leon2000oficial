import Banner from '@/Components/Banner';
import Sidebar from '@/Components/Sidebar';
import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';
import { Head } from '@inertiajs/react';
import Eventos from '@/Pages/Eventos/Eventos';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ClientList from './Configuracion/Clientes/ClientList';

export default function Clientes ()  {
  const { info } = usePage().props;
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
      setClientes(info[0].clientes);
  }, [info]);
  return (
    <GuestLayout>
      <Head title="Clientes" />
      
      <div className="p-6">
        {clientes && clientes.length > 0 ? (
          <ClientList clientes={clientes} />
        ) : (
          <p>No hay clientes registrados.</p>
        )}
      </div>
    </GuestLayout>
  );
};


