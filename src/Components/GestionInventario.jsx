import React from "react";
import pasosData from "../data/gestionInventario.json";
import {
    FaBoxes,
    FaCheckCircle,
    FaTruckLoading,
    FaClipboardList,
    FaWarehouse,
    FaChartLine,
} from "react-icons/fa";

// Mapeo de nombres de íconos a componentes
const iconMap = {
    FaTruckLoading: <FaTruckLoading className="text-teracotta text-3xl mb-2" />,
    FaClipboardList: <FaClipboardList className="text-teracotta text-3xl mb-2" />,
    FaWarehouse: <FaWarehouse className="text-teracotta text-3xl mb-2" />,
    FaBoxes: <FaBoxes className="text-teracotta text-3xl mb-2" />,
    FaCheckCircle: <FaCheckCircle className="text-teracotta text-3xl mb-2" />,
    FaChartLine: <FaChartLine className="text-teracotta text-3xl mb-2" />,
};

const GestionInventario = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-200">🔄 Proceso de Gestión de Inventario</h2>
            <p className="text-center text-gray-200 max-w-2xl mx-auto mb-10">
                Nuestro proceso de gestión de inventario garantiza el control, disponibilidad y eficiencia del flujo de productos desde su recepción hasta su análisis final.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pasosData.map((paso, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 shadow-md rounded-2xl p-6 border hover:shadow-lg transition duration-300"
                        style={{ borderColor: '#00e0c7' }}
                    >
                        <div className="flex flex-col items-center text-center">
                            {iconMap[paso.icon]}
                            <h3 className="text-xl font-semibold mb-2 text-gray-200">{paso.titulo}</h3>
                            <p className="text-gray-300">{paso.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">✅ Beneficios</h3>
                <ul className="text-gray-200 space-y-2">
                    <li>• Disponibilidad garantizada de productos.</li>
                    <li>• Menor pérdida por vencimiento o deterioro.</li>
                    <li>• Mayor eficiencia operativa.</li>
                    <li>• Datos precisos para decisiones inteligentes.</li>
                </ul>
            </div>
        </div>
    );
};

export default GestionInventario;
