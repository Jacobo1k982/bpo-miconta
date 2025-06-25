import React from 'react';
import { Link } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import { FaArrowRight, FaFilePdf, FaVideo } from 'react-icons/fa';

const Noticias = () => {
    return (
        <section className="bg-[#0D2A22] text-white font-sans px-4 md:px-10 py-10 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Noticias recientes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {noticiasData.map((noticia) => (
                        <div
                            key={noticia.id}
                            className="bg-[#1B3A33] rounded-xl overflow-hidden shadow-lg hover:shadow-[#00e0c7] transition-shadow duration-300 flex flex-col"
                        >
                            {/* Imagen */}
                            <div className="w-full aspect-[4/3] overflow-hidden">
                                <img
                                    src={noticia.imagen}
                                    alt={noticia.titulo}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="p-5 flex flex-col justify-between flex-grow">
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">{noticia.fecha}</p>
                                    <h3 className="text-lg font-semibold mb-2">{noticia.titulo}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{noticia.resumen}</p>
                                </div>

                                {/* Botón según tipo */}
                                {noticia.pdf ? (
                                    <a
                                        href={noticia.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#00e0c7] font-medium flex items-center gap-2 hover:underline"
                                    >
                                        Ver documento <FaFilePdf className="w-4 h-4" />
                                    </a>
                                ) : noticia.link ? (
                                    <Link
                                        to={noticia.link}
                                        className="text-[#00e0c7] font-medium flex items-center gap-2 hover:underline"
                                    >
                                        Leer más <FaArrowRight className="w-4 h-4" />
                                    </Link>
                                ) : noticia.video ? (
                                    <a
                                        href={noticia.video}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#00e0c7] font-medium flex items-center gap-2 hover:underline"
                                    >
                                        Ver video <FaVideo className="w-4 h-4" />
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Noticias;
