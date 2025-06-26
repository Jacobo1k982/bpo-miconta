import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col text-white bg-gray-900 font-sans">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
