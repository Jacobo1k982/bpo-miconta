import React, { useEffect, useState, useRef } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import serviciosData from '../data/servicios.json';

const CarouselServicios = () => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % serviciosData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: current * containerRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }, [current]);

    return (
        <div className="py-10 px-4 md:px-10">
            {/* Encabezado */}
            <div className="mb-6 flex justify-between items-center">
                <span className="border px-4 py-1 rounded-full text-sm border-black">Nuestros servicios</span>
                <Link
                    to="/servicios"
                    className="bg-gradient-to-r from-lime-500 to-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold"
                >
                    Todos los servicios <FaArrowUpRightFromSquare className="w-4 h-4" />
                </Link>
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Desbloquea tu libertad financiera<br />Con decisiones inteligentes
            </h2>

            {/* Carrusel en móvil - Rejilla en desktop */}
            <div className="md:hidden overflow-x-auto ocultar-scroll arrastrable" ref={containerRef}>
                <div className="flex w-full snap-x snap-mandatory space-x-4">
                    {serviciosData.map((servicio, index) => (
                        <div
                            key={index}
                            className={`min-w-full snap-start p-6 rounded-2xl transition-all duration-500 ${current === index ? 'bg-[#0D2A22] text-white' : 'bg-gray-100 text-black'
                                }`}
                        >
                            <h3 className="text-lg font-semibold mb-2">{servicio.titulo}</h3>
                            <p className="text-sm mb-4">{servicio.descripcion}</p>
                            <div className="overflow-hidden rounded-xl mb-4">
                                <img
                                    src={servicio.imagen}
                                    alt={servicio.titulo}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <Link
                                to={servicio.link}
                                className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
                            >
                                <FaArrowUpRightFromSquare />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rejilla solo en pantallas grandes */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {serviciosData.map((servicio, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-2xl shadow-md transition-all duration-500 ${current === index ? 'bg-[#0D2A22] text-white' : 'bg-gray-100 text-black'
                            }`}
                    >
                        <h3 className="text-lg font-semibold mb-2">{servicio.titulo}</h3>
                        <p className="text-sm mb-4">{servicio.descripcion}</p>
                        <div className="overflow-hidden rounded-xl mb-4">
                            <img
                                src={servicio.imagen}
                                alt={servicio.titulo}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <Link
                            to={servicio.link}
                            className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
                        >
                            <FaArrowUpRightFromSquare />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 gap-2">
                {serviciosData.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${current === index ? 'bg-green-600' : 'bg-gray-300'
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CarouselServicios;
