import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contactanos = () => {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const asunto = e.target.asunto.value;
        const mensaje = e.target.mensaje.value;

        const telefono = "50687905876"; // ← tu número real
        const texto = `Hola, soy *${nombre}*.\nMi correo es: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        e.target.reset();            // Limpia el formulario
        setEnviado(true);            // Muestra confirmación

        setTimeout(() => setEnviado(false), 4000); // Oculta mensaje tras 4 seg
    };

    return (
        <section className="text-white px-4 py-12 md:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Agendar asesoría gratuita</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Información omitida para brevedad, mantenla si ya la tienes */}

                    <form onSubmit={handleSubmit} className="bg-[#1B3A33] p-6 rounded-xl space-y-4 shadow-lg">
                        {enviado && (
                            <div className="bg-green-600 text-white text-sm px-4 py-2 rounded text-center">
                                ¡Mensaje preparado para enviar por WhatsApp!
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                required
                                className="bg-transparent border border-[#00e0c7] px-4 py-2 rounded text-white text-sm outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                required
                                className="bg-transparent border border-[#00e0c7] px-4 py-2 rounded text-white text-sm outline-none"
                            />
                        </div>

                        <input
                            type="text"
                            name="asunto"
                            placeholder="Asunto"
                            required
                            className="bg-transparent border border-[#00e0c7] px-4 py-2 w-full rounded text-white text-sm outline-none"
                        />

                        <textarea
                            rows="5"
                            name="mensaje"
                            placeholder="Mensaje"
                            required
                            className="bg-transparent border border-[#00e0c7] px-4 py-2 w-full rounded text-white text-sm outline-none resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#00e0c7] to-[#019281] px-6 py-2 text-white font-semibold rounded text-sm flex items-center gap-2 justify-center hover:scale-105 transition-transform"
                        >
                            <FaWhatsapp className="text-lg" />
                            Enviar por WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;
