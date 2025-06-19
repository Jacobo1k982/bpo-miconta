import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className="bg-[#0D2A22] text-white font-sans rounded-null overflow-hidden w-full">
            
            {/* Newsletter */}
            <div className="text-center py-12 px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Bussines Process Outsourcing MiConta</h2>
                <p className="text-gray-300 mb-8 text-sm md:text-base">
                    Simplificamos tu contabilidad para que te enfoques en crecer.
                </p>

                {/* Formulario responsive */}
                <div className="flex flex-col sm:flex-row max-w-md mx-auto bg-[#1B3A33] rounded-xl overflow-hidden shadow-lg">
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 bg-transparent text-white outline-none flex-grow text-sm"
                    />
                    <button className="bg-gradient-to-r from-lime-500 to-green-600 px-6 py-3 text-white font-semibold text-sm">
                        View All →
                    </button>
                </div>
            </div>

            {/* Gradiente inferior */}
            <div className="h-16 md:h-24 w-full bg-gradient-to-t from-green-null to-transparent" />
        </div>
    );
};

export default Hero;
