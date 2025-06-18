import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0D2A22] text-white">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
