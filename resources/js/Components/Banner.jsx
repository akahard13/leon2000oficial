import React, { useState, useEffect } from 'react';
import banner from '@/assets/banner.png';
import creditos from '@/assets/creditos.jpg';
import financiamos from '@/assets/financiamos.jpg';
import mejora from '@/assets/mejora.jpg';
const images = [banner, creditos, financiamos, mejora];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Cambiar cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={image} alt={`Banner ${index}`} className="w-full h-full object-contain" />
                </div>
            ))}
        </div>
    );
};

export default Banner;
