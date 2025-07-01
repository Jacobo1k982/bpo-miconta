import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const CarouselServicios = ({
    data = [],
    titulo = 'Desbloquee la libertad financiera con decisiones inteligentes',
    etiqueta = 'Nuestros servicios',
    linkGeneral = '/servicios',
}) => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: current * containerRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }, [current]);

    if (!data.length) return null;

    return (
        <section className="py-12 px-4 md:px-10">
            {/* Encabezado */}
            <div className="flex items-center justify-between mb-6">
                <span className="border px-4 py-1 rounded-full text-sm border-black">
                    {etiqueta}
                </span>
                <Link
                    to={linkGeneral}
                    className="bg-[#128073] text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold hover:opacity-90 transition"
                >
                    Ver todos <FaArrowUpRightFromSquare className="w-4 h-4" />
                </Link>
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10 whitespace-pre-line text-gray-900">
                {titulo}
            </h2>

            {/* Carrusel móvil */}
            <div
                className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth ocultar-scroll"
                ref={containerRef}
                role="region"
                aria-label="Carrusel de servicios"
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-full snap-start bg-gray-100 text-black p-6 rounded-2xl shadow-md flex-shrink-0"
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                        <p className="text-sm mb-4">{item.descripcion}</p>
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src={item.imagen}
                                alt={item.titulo}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <Link
                            to={item.link}
                            className="w-10 h-10 rounded-full bg-[#00e0c7] text-white flex items-center justify-center hover:bg-[#019281] transition"
                            aria-label={`Ir a ${item.titulo}`}
                        >
                            <FaArrowUpRightFromSquare />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Rejilla escritorio */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl shadow-lg bg-gray-50 text-black hover:shadow-xl transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                        <p className="text-sm mb-4">{item.descripcion}</p>
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img
                                src={item.imagen}
                                alt={item.titulo}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <Link
                            to={item.link}
                            className="w-10 h-10 rounded-full bg-[#00e0c7] text-white flex items-center justify-center hover:bg-[#019281] transition"
                            aria-label={`Ir a ${item.titulo}`}
                        >
                            <FaArrowUpRightFromSquare />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Indicadores carrusel móvil */}
            <div className="flex justify-center mt-6 gap-2 md:hidden">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={clsx(
                            'w-3 h-3 rounded-full transition-all',
                            current === index ? 'bg-[#00e0c7]' : 'bg-gray-300'
                        )}
                        aria-label={`Ir a la tarjeta ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default CarouselServicios;
