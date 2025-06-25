import React, { useEffect, useState, useRef } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CarouselServicios = ({
    data = [],
    titulo = 'Desbloquee la libertad financiera con decisiones inteligentes',
    etiqueta = 'Nuestros servicios',
    linkGeneral = '/servicios'
}) => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % data.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [data.length]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: current * containerRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }, [current]);

    if (data.length === 0) return null;

    return (
        <div className="py-10 px-4 md:px-10">
            {/* Encabezado */}
            <div className="mb-6 flex justify-between items-center">
                <span className="border px-4 py-1 rounded-full text-sm border-black">{etiqueta}</span>
                <Link
                    to={linkGeneral}
                    className="bg-gradient-to-r from-gray-700 to-[#00e0c7] text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold"
                >
                    Ver todos <FaArrowUpRightFromSquare className="w-4 h-4" />
                </Link>
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10 whitespace-pre-line">{titulo}</h2>

            {/* Carrusel móvil */}
            <div className="md:hidden overflow-x-auto ocultar-scroll arrastrable" ref={containerRef}>
                <div className="flex w-full snap-x snap-mandatory space-x-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`min-w-full snap-start p-6 rounded-2xl transition-all duration-500 ${current === index ? 'bg-[#00e0c7] text-white' : 'bg-gray-100 text-black'
                                }`}
                        >
                            <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                            <p className="text-sm mb-4">{item.descripcion}</p>
                            <div className="overflow-hidden rounded-xl mb-4">
                                <img
                                    src={item.imagen}
                                    alt={item.titulo}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <Link
                                to={item.link}
                                className="w-10 h-10 rounded-full bg-[#00e0c7] text-white flex items-center justify-center hover:bg-[#00e0c7] transition"
                            >
                                <FaArrowUpRightFromSquare />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rejilla desktop */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-2xl shadow-md transition-all duration-500 ${current === index ? 'bg-[#0b9383] text-white' : 'bg-gray-100 text-black'
                            }`}
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                        <p className="text-sm mb-4">{item.descripcion}</p>
                        <div className="overflow-hidden rounded-xl mb-4">
                            <img
                                src={item.imagen}
                                alt={item.titulo}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <Link
                            to={item.link}
                            className="w-10 h-10 rounded-full bg-[#00e0c7] text-white flex items-center justify-center hover:bg-[#019281] transition"
                        >
                            <FaArrowUpRightFromSquare />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 gap-2">
                {data.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${current === index ? 'bg-[#00e0c7]' : 'bg-gray-300'
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CarouselServicios;
