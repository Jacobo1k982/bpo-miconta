import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ramas from '../data/ramasContabilidad.json';

const AsesoriaContable = () => {
    const [index, setIndex] = useState(0);

    const siguiente = () => {
        setIndex((prev) => (prev + 1) % ramas.length);
    };

    const anterior = () => {
        setIndex((prev) => (prev - 1 + ramas.length) % ramas.length);
    };

    return (
        <section className="bg-[#0D2A22] text-white font-sans px-4 md:px-10 py-16 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-10">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400">
                    Asesoría Contable Especializada
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                    Nuestra asesoría contable ofrece soluciones precisas y profesionales para personas físicas, pymes y grandes empresas. Nos especializamos en guiar a nuestros clientes a través de las distintas ramas de la contabilidad financiera, asegurando cumplimiento, análisis estratégico y toma de decisiones informadas.
                </p>

                {/* Carrusel de ramas */}
                <div className="relative flex items-center justify-center">
                    <button onClick={anterior} className="absolute left-0 text-green-400 hover:text-lime-400 p-3">
                        <FaArrowLeft size={20} />
                    </button>

                    <div className="bg-[#1B3A33] p-6 rounded-xl shadow-lg max-w-md text-center mx-8">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">{ramas[index].titulo}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{ramas[index].descripcion}</p>
                    </div>

                    <button onClick={siguiente} className="absolute right-0 text-green-400 hover:text-lime-400 p-3">
                        <FaArrowRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AsesoriaContable;
