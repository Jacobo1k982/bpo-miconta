import React, { useState } from 'react';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const GOOGLE_FORM_ACTION_URL =
        'https://docs.google.com/forms/d/e/1FAIpQLScUsEH8ibgi1lrjIyzHN0ffGXxd7bEN7-yoFyOmIoP0haeQfw/formResponse';
    const GOOGLE_FORM_EMAIL_ENTRY = 'entry.557019311';

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

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
        <div className="text-white font-sans w-full">
            <div className="text-center py-24 px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Business Process Outsourcing MiConta
                </h2>
                <p className="text-gray-300 mb-8 text-sm md:text-base">
                    Simplificamos tu contabilidad para que te enfoques en crecer.
                </p>

                {/* Formulario responsive */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row max-w-md mx-auto bg-[#018676] rounded-xl overflow-hidden shadow-lg"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-3 bg-transparent text-white outline-none flex-grow text-sm"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-lime-[#00e0c7] to-[#00e0c7] px-6 py-3 text-white font-semibold text-sm"
                    >
                        Ver todo →
                    </button>
                </form>
                {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                {success && <p className="text-[#00e0c7] mt-2 text-sm">{success}</p>}
            </div>

            <div className="h-16 md:h-5 w-full bg-gradient-to-t from-green-null to-transparent" />
        </div>
    );
};

export default Hero;
