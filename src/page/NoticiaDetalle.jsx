import React from 'react';
import { useParams, Link } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import { FaArrowLeft, FaFilePdf } from 'react-icons/fa';

const NoticiaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData.find(n => n.id === parseInt(id));

    if (!noticia) {
        return (
            <div className="text-white h-screen flex items-center justify-center">
                <p className="text-lg">Noticia no encontrada.</p>
            </div>
        );
    }

    return (
        <div className="text-white px-4 md:px-10 py-12 font-sans min-h-screen">
            <div className="max-w-3xl mx-auto">
                {/* Volver */}
                <Link to="/noticias" className="flex items-center text-[#00e0c7] gap-2 hover:underline mb-6">
                    <FaArrowLeft /> Volver a noticias
                </Link>

                {/* Título y fecha */}
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{noticia.titulo}</h1>
                <p className="text-gray-400 text-sm mb-6">{noticia.fecha}</p>

                {/* Imagen principal */}
                {noticia.imagen && (
                    <div className="w-full aspect-[4/3] overflow-hidden">
                        <img
                            src={noticia.imagen}
                            alt={noticia.titulo}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                )}

                {/* Contenido dinámico */}
                {Array.isArray(noticia.contenido) && noticia.contenido.map((bloque, index) => {
                    switch (bloque.tipo) {
                        case 'subtitulo':
                            return (
                                <h3 key={index} className="text-lg md:text-xl font-semibold text-[#00e0c7] mb-2 mt-6">
                                    {bloque.texto}
                                </h3>
                            );
                        case 'parrafo':
                            return (
                                <p key={index} className="text-gray-300 leading-relaxed mb-4">
                                    {bloque.texto}
                                </p>
                            );
                        case 'lista':
                            return (
                                <ul key={index} className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                                    {bloque.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            );
                        case 'cita':
                            return (
                                <blockquote
                                    key={index}
                                    className="border-l-4 border-[#00e0c7] pl-4 italic text-gray-400 mb-4"
                                >
                                    {bloque.texto}
                                </blockquote>
                            );
                        default:
                            return null;
                    }
                })}

                {/* PDF link */}
                {noticia.pdf && (
                    <div className="mb-6">
                        <a
                            href={noticia.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-800 text-white px-4 py-2 rounded"
                        >
                            <FaFilePdf /> Ver documento PDF
                        </a>
                    </div>
                )}

                {/* Video embebido */}
                {noticia.video && (
                    <div className="aspect-w-16 aspect-h-9 mb-8">
                        <iframe
                            src={noticia.video}
                            title="Video relacionado"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-64 md:h-[420px] rounded-xl"
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoticiaDetalle;
