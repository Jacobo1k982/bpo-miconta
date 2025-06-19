import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Inicio", to: "/" },
        { name: "Sobre nosotros", to: "/about" },
        { name: "Servicios", to: "/services" },
        { name: "Noticias", to: "/noticias" },
        { name: "Contáctenos", to: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClass = ({ isActive }) =>
        `transition-colors ${isActive ? "text-green-400 font-semibold" : "hover:text-green-400 text-white"}`;

    return (
        <header
            className={`px-4 md:px-6 py-4 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled
                ? "bg-[#0D2A22]/100 shadow-md"
                : "bg-[#0D2A22]/90 shadow-none"
                }`}
        >
            <div className="flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <img
                        src="/Logo/LogoBlanco.png"
                        alt="Logo"
                        className={`transition-all duration-300 ${scrolled ? "w-9 h-7" : "w-11 h-8"
                            }`}
                    />
                    <div>
                        <h1 className="font-bold text-xl">BPOMICONTA</h1>
                        <p className="text-xs text-gray-300 -mt-1">Finanzas e Inversión</p>
                    </div>
                </NavLink>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-6 text-sm">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={getLinkClass}
                            end={link.to === "/"}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Botón móvil */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-sm bg-[#1A3C31] p-4 rounded-lg shadow-lg">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={getLinkClass}
                            end={link.to === "/"}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
