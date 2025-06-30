import React, { useState } from 'react';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const GOOGLE_FORM_ACTION_URL =
        'https://docs.google.com/forms/d/e/1FAIpQLScUsEH8ibgi1lrjIyzHN0ffGXxd7bEN7-yoFyOmIoP0haeQfw/formResponse';
    const GOOGLE_FORM_EMAIL_ENTRY = 'entry.557019311';

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Por favor ingresa un email válido.');
            setSuccess('');
            return;
        }

        setError('');
        setSuccess('¡Gracias por suscribirte!');

        const form = document.createElement('form');
        form.action = GOOGLE_FORM_ACTION_URL;
        form.method = 'POST';
        form.target = '_blank';

        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = GOOGLE_FORM_EMAIL_ENTRY;
        emailInput.value = email;

        form.appendChild(emailInput);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        setEmail('');
    };

    return (
        <section className="bg-gradient-to-r from-[#0d1521] via-[#07131c] to-[#0e1f2c] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Texto */}
                <div className="md:w-1/1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                        Business Process Outsourcing <br /> <span className="text-[#00e0c7]">MiConta</span>
                    </h1>
                    <p className="text-gray-300 text-lg mb-8">
                        Externaliza tus procesos contables y financieros con expertos. Más enfoque en tu negocio, menos preocupaciones fiscales.
                    </p>

                    {/* Formulario */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-xl shadow-lg max-w-md mx-auto md:mx-0 overflow-hidden"
                    >
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:flex-1 px-4 py-3 border-0 rounded-none text-sm text-white placeholder-gray-400 bg-transparent focus:ring-0 focus:outline-none"
                            required
                            aria-label="Email"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#00e0c7] to-[#00bfa5] hover:opacity-90 transition-all px-6 py-3 text-white font-semibold text-sm w-full sm:w-auto"
                        >
                            Suscribirme →
                        </button>
                    </form>
                    {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                    {success && <p className="text-[#00e0c7] mt-2 text-sm">{success}</p>}
                </div>

                {/* Imagen */}
                <div className="md:w-1/2">
                    <img
                        src="/Imagen/workbook.jpg"
                        alt="Ilustración contabilidad financiera"
                        className="w-full max-w-md mx-auto md:mx-0 drop-shadow-xl animate-fadeIn"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
