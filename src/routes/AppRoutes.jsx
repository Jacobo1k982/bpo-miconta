// AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Contactanos from "../Components/Contactanos.jsx";
import FinanceDivider from "../page/FinanceDivider.jsx";

// 👇 Lazy import
const Hero = lazy(() => import("../Components/Hero.jsx"));
const Noticias = lazy(() => import("../Components/Noticias.jsx"));
const NoticiaDetalle = lazy(() => import("../page/NoticiaDetalle.jsx"));
const QuienesSomos = lazy(() => import("../Components/QuienesSomos.jsx"));
const AsesoriaContable = lazy(() => import("../Components/AsesoriaContable.jsx"));
const OtrosServicios = lazy(() => import("../page/OtrosServicios.jsx"));
const GestionInventario = lazy(() => import("../Components/GestionInventario.jsx"));



const Loader = () => (
    <div className="flex items-center justify-center h-screen bg-[#0D2A22]">
        <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#00e0c7] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#00e0c7] text-sm">Cargando contenido...</p>
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
                            <FinanceDivider />
                            <OtrosServicios />
                        </>
                    } />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/noticias/:id" element={<NoticiaDetalle />} />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/contact" element={<Contactanos />} />
                    <Route path="/about" element={<QuienesSomos />} />
                    <Route path="/AsesoriaContable" element={<AsesoriaContable />} />
                    <Route path="/inventario" element={<GestionInventario />} />
                </Routes>
            </Layout>
        </Suspense>
    );
};

export default AppRoutes;
