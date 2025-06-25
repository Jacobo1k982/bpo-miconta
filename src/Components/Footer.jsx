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

                {/* Redes sociales */}
                <div className="flex gap-3 text-xl text-white">
                    <FaFacebookF className="hover:text-[#00e0c7]" />
                    <FaInstagram className="hover:text-[#00e0c7]" />
                    <FaXTwitter className="hover:text-[#00e0c7]" />
                    <FaYoutube className="hover:text-[#00e0c7]" />
                    <a
                        href="https://wa.me/50687905876"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00e0c7"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            {/* Línea divisoria */}
            <div className="border-t border-[#00e0c7] mx-4 md:mx-6" />

            {/* Info legal */}
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 text-xs md:text-sm text-gray-400 gap-2">
                <span>© 2025 BPOMICONTA. Todos los derechos reservados.</span>
                <a href="#" className="hover:text-[#00e0c7]">Política de privacidad y cookies</a>
            </div>

            {/* Gradiente inferior */}
            <div className="h-10 md:h-32 w-full bg-gradient-to-t from-green-900 to-transparent" />
        </footer>
    );
};

export default Footer;
