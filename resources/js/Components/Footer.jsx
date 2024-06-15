import React from 'react'
import Logo from '@/assets/Logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-[#90c225] text-center text-surface">
            <div className="container px-6 pt-6">


                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
                        <div className="md:mb-6 ml-24 md:self-start items-center justify-center">
                            <img src={Logo} className='h-24 w-auto' />
                        </div>
                        <div className="relative md:mb-24" data-twe-input-wrapper-init>
                            <h1 className='text-3xl font-bold text-left'>Atención al cliente</h1>
                            <p className='text-left'><a href="">Quejas</a></p>
                        </div>
                        <div className="mb-6 md:self-end">
                            <h1 className='text-3xl font-bold text-left'>Contacto</h1>
                            <h2 className='text-xl text-left'>Sucursal León</h2>
                            <p className='text-left flex flex-row items-center'><FaLocationDot /> - Parque Los Poetas, 30 mts al Norte</p>
                            <p className='text-left flex flex-row items-center'><FaPhone /> - 2311-6680 / 8350-6389</p>
                            <h2 className='text-xl text-left'>Sucursal Chinandega</h2>
                            <p className='text-left flex flex-row items-center'><FaLocationDot /> - Parque Los Poetas, 30 mts al Norte</p>
                            <p className='text-left flex flex-row items-center'><FaPhone /> - 2311-6680 / 8350-6389</p>
                        </div>
                    </div>
                </div>



            </div>

            <div className="w-full bg-black/10 p-4 text-center">
                © 2023 Copyright:
                <a className="font-semibold"> Leon2000 IMF S.A</a>
            </div>
        </footer>
    )
}

export default Footer
