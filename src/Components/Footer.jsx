import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#0D2A22] text-white font-sans w-full rounded-t-xl overflow-hidden mt-10">
            {/* Redes y Navegación */}
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-6 gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/Logo/LogoBlanco.png" alt="Logo" className="w-11 h-8" />
                    <div>
                        <h1 className="font-bold text-xl">BPOMICONTA</h1>
                        <p className="text-sm text-gray-300 -mt-1">Finanzas e Inversión</p>
                    </div>
                </div>

                {/* Enlaces */}
                <nav className="flex flex-col md:flex-row md:space-x-6 items-center text-sm text-gray-400">
                    <a href="#" className="hover:text-green-400">Inicio</a>
                    <a href="#" className="hover:text-green-400">Sobre nosotros</a>
                    <a href="#" className="hover:text-green-400">Servicios</a>
                    <a href="#" className="hover:text-green-400">Noticias</a>
                    <a href="#" className="hover:text-green-400">Contáctenos</a>
                </nav>

                {/* Redes sociales */}
                <div className="flex gap-3 text-xl text-white">
                    <FaFacebookF className="hover:text-green-400" />
                    <FaInstagram className="hover:text-green-400" />
                    <FaXTwitter className="hover:text-green-400" />
                    <FaYoutube className="hover:text-green-400" />
                    <FaWhatsapp className="hover:text-green-400" />
                </div>
            </div>

            {/* Línea divisoria */}
            <div className="border-t border-green-400 mx-4 md:mx-6" />

            {/* Info legal */}
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 text-xs md:text-sm text-gray-400 gap-2">
                <span>© 2025 BPOMICONTA. Todos los derechos reservados.</span>
                <a href="#" className="hover:text-green-400">Política de privacidad y cookies</a>
            </div>

            {/* Gradiente inferior */}
            <div className="h-10 md:h-16 w-full bg-gradient-to-t from-green-800 to-transparent" />
        </footer>
    );
};

export default Footer;
