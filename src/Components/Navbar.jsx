import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [desktopSubMenuVisible, setDesktopSubMenuVisible] = useState(false);
    const subMenuRef = useRef(null);
    const desktopMenuRef = useRef(null);
    const hoverTimeout = useRef(null);

    const links = [
        { name: "Inicio", to: "/" },
        { name: "Quiénes Somos", to: "/about" },
        {
            name: "Servicios", to: "/services", hasSubMenu: true, subMenu: [
                { name: "Contabilidad de costos", to: "/AsesoriaContable", image: "/Imagen/Navbar/close-up-people-working-office.jpg" },
                { name: "Contabilidad financiera", to: "/AsesoriaContable", image: "/Imagen/Navbar/close-up-people-working-office.jpg" },
                { name: "Declaración de impuestos", to: "/AsesoriaContable", image: "/Imagen/Navbar/close-up-people-working-office.jpg" },
                { name: "Certificación de ingresos", to: "/AsesoriaContable", image: "/Imagen/Navbar/close-up-people-working-office.jpg" },
                { name: "Consultoría Financiera", to: "/services/consultoria-financiera", image: "/Imagen/Navbar/researchers-looking-alternative-energy-souces.jpg" },
                { name: "Planificación Tributaria", to: "/services/planificacion-tributaria", image: "/Imagen/Navbar/calculator-magnifying-glass-table.jpg" },
            ]
        },
        { name: "Noticias", to: "/noticias" },
        { name: "Contáctenos", to: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            setMenuOpen(false);
            setSubMenuOpen(false);
            setDesktopSubMenuVisible(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
                setSubMenuOpen(false);
            }
            if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)) {
                setDesktopSubMenuVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getLinkClass = ({ isActive }) =>
        `transition-colors ${isActive ? "text-green-400 font-semibold" : "hover:text-green-400 text-white"}`;

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout.current);
        setDesktopSubMenuVisible(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setDesktopSubMenuVisible(false);
        }, 150);
    };

    return (
        <header className={`px-4 md:px-6 py-4 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled
            ? "bg-[#0D2A22]/100 shadow-md"
            : "bg-[#0D2A22]/90 shadow-none"
            }`}>
            <div className="flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <img
                        src="/Logo/LogoBlanco.png"
                        alt="Logo"
                        className={`transition-all duration-300 ${scrolled ? "w-9 h-7" : "w-11 h-8"}`}
                    />
                    <div>
                        <h1 className="font-bold text-xl">BPOMICONTA</h1>
                        <p className="text-xs text-gray-300 -mt-1">Finanzas e Inversión</p>
                    </div>
                </NavLink>

                {/* Menú Desktop */}
                <nav className="hidden md:flex space-x-6 text-sm relative">
                    {links.map((link) =>
                        link.hasSubMenu ? (
                            <div
                                key={link.to}
                                className="relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={desktopMenuRef}
                            >
                                <NavLink to={link.to} className={getLinkClass}>
                                    {link.name}
                                </NavLink>

                                {desktopSubMenuVisible && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] p-4 bg-white rounded-lg shadow-xl flex flex-wrap gap-4 z-50 text-black max-w-[90vw]">
                                        {link.subMenu.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                className="w-[140px] flex-shrink-0 hover:scale-105 transition-transform"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-24 object-cover rounded-md mb-2"
                                                />
                                                <p className="text-sm font-medium text-center">{item.name}</p>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}

                            </div>
                        ) : (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={getLinkClass}
                                end={link.to === "/"}
                            >
                                {link.name}
                            </NavLink>
                        )
                    )}
                </nav>

                {/* Botón móvil */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Menú Móvil */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-sm bg-[#1A3C31] p-4 rounded-lg shadow-lg">
                    {links.map((link) =>
                        link.hasSubMenu ? (
                            <div key={link.to} ref={subMenuRef}>
                                <button
                                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                                    className="w-full text-left text-white font-semibold flex justify-between items-center"
                                >
                                    {link.name}
                                    <FaChevronDown className={`transition-transform duration-300 ${subMenuOpen ? "rotate-180" : ""}`} />
                                </button>

                                {subMenuOpen && (
                                    <div className="mt-2 ml-4 space-y-4">
                                        {link.subMenu.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                className="flex items-start gap-3 text-white"
                                                onClick={() => {
                                                    setMenuOpen(false);
                                                    setSubMenuOpen(false);
                                                }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                                                />
                                                <span className="text-sm">{item.name}</span>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={getLinkClass}
                                end={link.to === "/"}
                                onClick={() => {
                                    setMenuOpen(false);
                                    setSubMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </NavLink>
                        )
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;
