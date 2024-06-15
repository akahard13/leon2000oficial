import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from './../Components/Navbar';
import { Link, usePage } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { useEffect, useState } from 'react';
export default function Guest({ children }) {

    return (
        <div>
            <Navbar/>
            <div className="mx-auto max-w-screen-xl p-2 lg:pl-6">
                {children}
            </div>
            <Footer />
            </div>
    );
}
