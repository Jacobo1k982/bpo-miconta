import React from 'react';
import { useParams, Link } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import { FaArrowLeft } from 'react-icons/fa';

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
            <div className="mb-6">
                <Link to="/noticias" className="flex items-center text-green-400 gap-2 hover:underline mb-4">
                    <FaArrowLeft /> Volver a noticias
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{noticia.titulo}</h1>
                <p className="text-gray-400 text-sm mb-6">{noticia.fecha}</p>
                <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <p className="text-gray-300 leading-relaxed text-base">
                    {noticia.resumen} <br /><br />
                    Este texto es un ejemplo de cuerpo extendido para la noticia. Puedes reemplazarlo por contenido real más adelante.
                </p>
            </div>
        </div>
    );
};

export default NoticiaDetalle;
