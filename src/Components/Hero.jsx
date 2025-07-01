import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScVlAVkhTc6mpZh20GWNjbs-4Kk7P77UmgTiVf1TFgQPkMS8g/formResponse";
const GOOGLE_FORM_EMAIL_ENTRY = "entry.1306143321";

const Hero = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState({ error: "", success: "" });
    const formRef = useRef(null);

    const validateEmail = (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setStatus({ error: "Por favor ingresa un email válido.", success: "" });
            return;
        }

        // Crear y enviar formulario oculto
        const form = document.createElement("form");
        form.action = GOOGLE_FORM_ACTION_URL;
        form.method = "POST";
        form.target = "_blank";
        form.style.display = "none";

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = GOOGLE_FORM_EMAIL_ENTRY;
        input.value = email;
        form.appendChild(input);

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        setStatus({ error: "", success: "¡Gracias por suscribirte!" });
        setEmail("");
    };

    return (
        <section className="bg-gradient-to-r from-[#0d1521] via-[#07131c] to-[#0e1f2c] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
                {/* Contenido */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center md:text-left space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Business Process Outsourcing <br />
                        <span className="text-[#00e0c7]">MiConta</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Externaliza tus procesos contables y financieros con expertos. Más
                        enfoque en tu negocio, menos preocupaciones fiscales.
                    </p>

                    {/* Formulario */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-xl shadow-lg max-w-md mx-auto md:mx-0 overflow-hidden"
                    >
                        <label htmlFor="email" className="sr-only">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electrónico"
                            className="w-full sm:flex-1 px-4 py-3 bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
                            required
                            aria-label="Email"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#00e0c7] to-[#00bfa5] hover:opacity-90 transition-all px-6 py-3 font-semibold text-sm w-full sm:w-auto"
                        >
                            Suscribirme →
                        </button>
                    </form>

                    {/* Mensajes */}
                    {status.error && (
                        <p className="text-red-400 mt-2 text-sm">{status.error}</p>
                    )}
                    {status.success && (
                        <p className="text-[#00e0c7] mt-2 text-sm">{status.success}</p>
                    )}
                </motion.div>

                {/* Imagen */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <img
                        src="/Imagen/workbook.jpg"
                        alt="Ilustración contabilidad financiera"
                        className="w-full max-w-md mx-auto md:mx-0 drop-shadow-xl rounded-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
