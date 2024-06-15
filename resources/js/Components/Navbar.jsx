import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdMoney } from "react-icons/md";
import Logo from '@/assets/Logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { usePage } from '@inertiajs/react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { info } = usePage().props;
  const [cambio, setCambio] = useState('');
  const [informacion_financiera, setInformacion_financiera] = useState([]);

  useEffect(() => {
    if (info && info.length > 0) {
      setCambio(info[0].tasaCambio[0]?.valor || '0.00');
      setInformacion_financiera(info[0].informacion_financiera || []);
    }
  }, [info]);

  const handleNav = () => {
    setNavOpen(!navOpen);
    document.body.style.overflow = navOpen ? 'auto' : 'hidden';
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navItems = [
    { id: 1, text: 'Inicio', idtag: '#inicio', link: '/' },
    { id: 2, text: 'Ofertas', idtag: '#inicio', link: '/' },
    { id: 3, text: 'Información Financiera', idtag: '#informacion-financiera' },
    { id: 4, text: 'Clientes', idtag: '#clientes', link: '/Clientes' },
    { id: 5, text: 'Sobre Nosotros', idtag: '#sobre-nosotros', link: '/' },
  ];

  return (
    <div className='relative'>
      <div className='bg-[#90c225] justify-around text-black flex flex-row space-x'>
        <p className="hidden md:flex flex flex-row space-x-4 ml-10 items-center"><FaPhone className='mr-2' /> 2311-6680 </p>
        <p className="flex flex-row space-x-4 ml-10 items-center"><IoMail className='mr-2' />leon2000imf@leon2000imf.com</p>
      </div>

      <div className="bg-white text-black mx-auto max-w-screen-xl p-2 lg:pl-6 flex flex-row space-x-4 items-center justify-between">
        <img src={Logo} className="w-20 h-20" alt="Logo" />
        <p className="flex flex-row space-x-4 items-center">
          <MdMoney className='mr-2' />
          Tasa de cambio - C$ {cambio || '0.00'}
        </p>
      </div>

      <div className="bg-[#90c225] w-full text-black mx-auto flex flex-row space-x-4 items-center justify-end">
        <div className='hidden md:flex flex-row justify-between w-full md:w-auto space-x-4 md:space-x-4'>
          {navItems.map(item => (
            <div
              key={item.id}
              className='p-2 hover:bg-[white] hover:text-[#90c225] rounded-xl m-2 cursor-pointer duration-300 relative'
              onClick={item.text === 'Información Financiera' ? handleDropdown : null}
            >
              {item.text !== 'Información Financiera' && item.link.length > 0
                ?
                <Link href={item.link}>{item.text}</Link>
                :
                <Link>{item.text}</Link>
              }
              {item.text === 'Información Financiera' && dropdownOpen && (
                <div className='absolute bg-white shadow-lg rounded-md mt-2 right-0 z-10 w-56 origin-top-right ring-1 ring-black ring-opacity-5'>
                  <div className='py-1'>
                    {informacion_financiera.map(info => (
                      <a
                        key={info.id}
                        href={info.link.startsWith('http://') || info.link.startsWith('https://') ? info.link : `https://${info.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='block px-4 py-2 text-sm hover:bg-[white] hover:text-[#90c225]'
                      >
                        {info.nombre}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div onClick={handleNav} className='block md:hidden z-20'>
          {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={
          navOpen
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 duration-500 text-white z-10'
            : 'fixed top-0 bottom-0 left-[-100%] w-[60%] h-full border-r border-r-gray-900 bg-gray-900 duration-500 text-white z-10'
        }
        style={{ backgroundColor: '#000300', opacity: 1 }}
      >
        <div className="w-full flex justify-center items-center mt-2">
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>
        <div className="w-full flex justify-center items-center mt-2">
          <h1 className='text-3xl font-bold text-[#00df9a] ml-4 sm:text-size-2'>Leon2000</h1>
        </div>
        {navItems.map(item => (
          <div
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 relative'
            onClick={item.text === 'Información Financiera' ? handleDropdown : null}
          >
            {item.text !== 'Información Financiera' && item.link.length > 0
                ?
                <a href={item.link} className='block px-4 py-2 text-sm'>{item.text}</a>
                :
                <a className='block px-4 py-2 text-sm'>{item.text}</a>
              }
            {item.text === 'Información Financiera' && dropdownOpen && (
              <div>
                {informacion_financiera.map(info => (
                  <a
                    key={info.id}
                    href={info.link.startsWith('http://') || info.link.startsWith('https://') ? info.link : `https://${info.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='block px-4 py-2 text-sm text-white hover:bg-[#00df9b] hover:text-black'
                  >
                    {info.nombre}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
