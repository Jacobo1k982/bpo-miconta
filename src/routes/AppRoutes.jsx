// AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Contactanos from "../Components/Contactanos.jsx";

// 👇 Lazy import
const Hero = lazy(() => import("../Components/Hero.jsx"));
const CarouselServicios = lazy(() => import("../Components/CarouselServicios.jsx"));
const Noticias = lazy(() => import("../Components/Noticias.jsx"));
const NoticiaDetalle = lazy(() => import("../page/NoticiaDetalle.jsx"));



const Loader = () => (
    <div className="flex items-center justify-center h-screen bg-[#0D2A22]">
        <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-sm">Cargando contenido...</p>
        </div>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layout>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Noticias />
                            <CarouselServicios />
                        </>
                    } />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/noticias/:id" element={<NoticiaDetalle />} />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/contact" element={<Contactanos />} />
                </Routes>
            </Layout>
        </Suspense>
    );
};

export default AppRoutes;
