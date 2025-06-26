import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import menuData from "../data/navbar.json";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpenIndex, setSubMenuOpenIndex] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [desktopSubMenuIndex, setDesktopSubMenuIndex] = useState(null);

    const subMenuRef = useRef(null);
    const desktopMenuRef = useRef(null);
    const hoverTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            setMenuOpen(false);
            setSubMenuOpenIndex(null);
            setDesktopSubMenuIndex(null);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
                setSubMenuOpenIndex(null);
            }
            if (desktopMenuRef.current && !desktopMenuRef.current.contains(event.target)) {
                setDesktopSubMenuIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getLinkClass = ({ isActive }) =>
        `transition-colors ${isActive ? "text-[#00e0c7] font-semibold" : "hover:text-[#00e0c7] text-white"}`;

    const handleMouseEnter = (index) => {
        clearTimeout(hoverTimeout.current);
        setDesktopSubMenuIndex(index);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setDesktopSubMenuIndex(null);
        }, 150);
    };

    const renderIcon = (iconName) => {
        const IconComponent = FaIcons[iconName];
        return IconComponent ? <IconComponent className="inline mr-2" /> : null;
    };

    return (
        <header className={`px-4 md:px-6 py-4 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled
            ? "bg-gray-600/25 shadow-md"
            : "bg-gray-900/100 shadow-none"
            }`}>
            <div className="flex justify-between items-center">
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

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-sm relative">
                    {menuData.map((link, index) =>
                        link.hasSubMenu ? (
                            <div
                                key={link.to}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                ref={desktopMenuRef}
                            >
                                <NavLink to={link.to} className={getLinkClass}>
                                    {renderIcon(link.icon)}{link.name}
                                </NavLink>

                                {desktopSubMenuIndex === index && (
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] p-4 bg-white rounded-lg shadow-xl flex flex-wrap gap-4 z-50 text-black max-w-[90vw]">
                                        {link.subMenu.map((item) => (
                                            <div key={item.to} className="w-[140px]">
                                                <NavLink
                                                    to={item.to}
                                                    className="flex flex-col hover:scale-105 transition-transform"
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-24 object-cover rounded-md mb-2"
                                                    />
                                                    <p className="text-sm font-medium text-center">{item.name}</p>
                                                </NavLink>
                                                {item.children && (
                                                    <div className="ml-2 mt-2 text-xs text-gray-600">
                                                        {item.children.map((child) => (
                                                            <NavLink
                                                                key={child.to}
                                                                to={child.to}
                                                                className="block hover:text-green-500"
                                                            >
                                                                - {child.name}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
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
                                {renderIcon(link.icon)}{link.name}
                            </NavLink>
                        )
                    )}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 text-sm bg-[#1A3C31] p-4 rounded-lg shadow-lg">
                    {menuData.map((link, index) =>
                        link.hasSubMenu ? (
                            <div key={link.to} ref={subMenuRef}>
                                <button
                                    onClick={() =>
                                        setSubMenuOpenIndex(subMenuOpenIndex === index ? null : index)
                                    }
                                    className={`w-full text-left font-semibold flex items-center justify-between transition-colors duration-300 ${subMenuOpenIndex === index ? "text-[#00e0c7]" : "text-white"
                                        }`}
                                >
                                    <span className="flex items-center gap-2 transition-colors duration-300">
                                        {renderIcon(link.icon)}
                                        {link.name}
                                    </span>
                                    <FaChevronDown
                                        className={`ml-2 transform transition-transform duration-300 ${subMenuOpenIndex === index ? "rotate-180 text-[#00e0c7]" : "text-white"
                                            }`}
                                    />
                                </button>

                                {subMenuOpenIndex === index && (
                                    <div className="mt-2 ml-4 space-y-4">
                                        {link.subMenu.map((item) => (
                                            <div key={item.to}>
                                                <NavLink
                                                    to={item.to}
                                                    className="flex items-start gap-3 text-white"
                                                    onClick={() => {
                                                        setMenuOpen(false);
                                                        setSubMenuOpenIndex(null);
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                                                    />
                                                    <span className="text-sm">{item.name}</span>
                                                </NavLink>
                                                {item.children && (
                                                    <div className="ml-4 mt-1 text-xs text-gray-300">
                                                        {item.children.map((child) => (
                                                            <NavLink
                                                                key={child.to}
                                                                to={child.to}
                                                                className="block"
                                                                onClick={() => {
                                                                    setMenuOpen(false);
                                                                    setSubMenuOpenIndex(null);
                                                                }}
                                                            >
                                                                - {child.name}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={`flex items-center gap-2 ${getLinkClass({ isActive: false })}`}
                                onClick={() => {
                                    setMenuOpen(false);
                                    setSubMenuOpenIndex(null);
                                }}
                            >
                                {renderIcon(link.icon)}
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
