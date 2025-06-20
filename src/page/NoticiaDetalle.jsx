import React from 'react';
import { useParams, Link } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import { FaArrowLeft, FaFilePdf, FaVideo } from 'react-icons/fa';

const NoticiaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData.find(n => n.id === parseInt(id));

    if (!noticia) {
        return (
            <div className="bg-[#0D2A22] text-white h-screen flex items-center justify-center">
                <p className="text-lg">Noticia no encontrada.</p>
            </div>
        );
    }

    return (
        <div className="bg-[#0D2A22] text-white px-4 md:px-10 py-12 font-sans min-h-screen">
            <div className="max-w-3xl mx-auto">
                {/* Enlace para volver */}
                <Link to="/noticias" className="flex items-center text-green-400 gap-2 hover:underline mb-6">
                    <FaArrowLeft /> Volver a noticias
                </Link>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{noticia.titulo}</h1>
                <p className="text-gray-400 text-sm mb-6">{noticia.fecha}</p>

                {/* Imagen principal */}
                <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                />

                {/* Contenido */}
                <div className="text-gray-300 leading-relaxed text-base space-y-4 mb-8">
                    <p>{noticia.resumen}</p>
                    {noticia.contenido && <p>{noticia.contenido}</p>}
                </div>

                {/* Botones adicionales */}
                <div className="flex flex-wrap gap-4">
                    {noticia.pdf && (
                        <a
                            href={noticia.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
                        >
                            <FaFilePdf /> Ver documento PDF
                        </a>
                    )}
                    {noticia.video && (
                        <a
                            href={noticia.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded flex items-center gap-2"
                        >
                            <FaVideo /> Ver video
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NoticiaDetalle;
