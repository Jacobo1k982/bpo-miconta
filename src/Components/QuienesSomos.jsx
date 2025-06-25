import React from 'react';
import data from '../data/quienesSomos.json';
import { FaArrowRight } from 'react-icons/fa';

const QuienesSomos = () => {
    return (
        <section className="bg-[#0D2A22] text-white font-sans px-4 md:px-10 py-16 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-10">
                {data.map((item) => {
                    if (item.activo === false) return null; // Ignora elementos deshabilitados

                    switch (item.tipo) {
                        case 'titulo':
                            return (
                                <h2
                                    key={item.id}
                                    className="text-3xl md:text-4xl font-bold text-center text-[#00e0c7]"
                                >
                                    {item.texto}
                                </h2>
                            );

                        case 'parrafo':
                            return (
                                <p
                                    key={item.id}
                                    className="text-gray-300 text-base md:text-lg leading-relaxed text-justify"
                                >
                                    {item.contenido}
                                </p>
                            );

                        case 'bloque':
                            return (
                                <div
                                    key={item.id}
                                    className="bg-[#1B3A33] p-6 rounded-xl shadow-lg"
                                >
                                    <h3 className="text-xl font-semibold text-[#00e0c7] mb-3 text-justify">
                                        {item.titulo}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed text-justify">
                                        {item.contenido}
                                    </p>
                                </div>
                            );

                        case 'lista':
                            return (
                                <div
                                    key={item.id}
                                    className="bg-[#1B3A33] p-6 rounded-xl shadow-lg"
                                >
                                    <h3 className="text-xl font-semibold text-[#00e0c7] mb-3 text-justify">
                                        {item.titulo}
                                    </h3>
                                    <ul className="text-gray-300 text-sm list-disc list-inside space-y-1 text-justify">
                                        {item.items.map((val, index) => (
                                            <li key={index}>{val}</li>
                                        ))}
                                    </ul>
                                </div>
                            );

                        case 'imagen':
                            return (
                                <div key={item.id}>
                                    <img
                                        src={item.imagen}
                                        alt={item.alt || ''}
                                        className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-xl"
                                    />
                                </div>
                            );

                        case 'video':
                            return (
                                <div
                                    key={item.id}
                                    className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg"
                                >
                                    <iframe
                                        src={item.video}
                                        title={item.titulo}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-xl"
                                    ></iframe>
                                </div>
                            );

                        case 'link':
                            return (
                                <div key={item.id} className="text-center">
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-green-400 hover:underline text-sm"
                                    >
                                        {item.titulo} <FaArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
            </div>
        </section>
    );
};

export default QuienesSomos;
