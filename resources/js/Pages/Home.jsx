import Banner from '@/Components/Banner';
import Sidebar from '@/Components/Sidebar';
import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';
import { Head } from '@inertiajs/react';
import Eventos from '@/Pages/Eventos/Eventos';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Home ()  {
  const { info } = usePage().props;
  const [eventos, setEventos] = useState([]);
  useEffect(() => {
      setEventos(info[0].eventos);
  }, [info]);
  return (
    <GuestLayout>
      <Head title="Home" />
      <div className="lg:flex lg:flex-row bg-[#90c225] md:flex md:flex-row lg:items-center lg:align-center ">
        <Sidebar />
        <Banner />
      </div>
      <div className="p-6">
        {eventos && eventos.length > 0 ? (
          <Eventos eventos={eventos} />
        ) : (
          <p>No hay eventos disponibles.</p>
        )}
      </div>
    </GuestLayout>
  );
};


