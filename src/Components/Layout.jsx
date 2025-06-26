import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col text-white bg-fondo-principal">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
