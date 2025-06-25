import React from "react";
import { FaBoxes, FaCheckCircle, FaTruckLoading, FaClipboardList, FaWarehouse, FaChartLine } from "react-icons/fa";

const pasos = [
    {
        icon: <FaTruckLoading className="text-teracotta text-3xl mb-2" />,
        titulo: "Recepción de Productos",
        descripcion: `Verificamos cantidades, estado y documentos. Luego, registramos la entrada al sistema para mantener el control desde el primer momento.`
    },
    {
        icon: <FaClipboardList className="text-teracotta text-3xl mb-2" />,
        titulo: "Registro y Clasificación",
        descripcion: `Asignamos códigos únicos (SKU), categorizamos los productos y los ingresamos al sistema digital para control en tiempo real.`
    },
    {
        icon: <FaWarehouse className="text-teracotta text-3xl mb-2" />,
        titulo: "Almacenamiento Estratégico",
        descripcion: `Ubicamos productos según rotación, tamaño o fragilidad, aplicando el método FIFO para salidas ordenadas.`
    },
    {
        icon: <FaBoxes className="text-teracotta text-3xl mb-2" />,
        titulo: "Monitoreo y Control",
        descripcion: `Monitoreo constante del stock, alertas automáticas, y seguimiento de productos vencidos o con baja rotación.`
    },
    {
        icon: <FaCheckCircle className="text-teracotta text-3xl mb-2" />,
        titulo: "Salida de Productos",
        descripcion: `Cada producto que sale del inventario queda registrado, permitiendo trazabilidad total y actualización automática del sistema.`
    },
    {
        icon: <FaChartLine className="text-teracotta text-3xl mb-2" />,
        titulo: "Auditorías y Análisis",
        descripcion: `Realizamos inventarios físicos, comparamos datos digitales y extraemos métricas para mejorar continuamente.`
    },
];

const GestionInventario = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">🔄 Proceso de Gestión de Inventario</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                Nuestro proceso de gestión de inventario garantiza el control, disponibilidad y eficiencia del flujo de productos desde su recepción hasta su análisis final.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pasos.map((paso, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition duration-300"
                    >
                        <div className="flex flex-col items-center text-center">
                            {paso.icon}
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{paso.titulo}</h3>
                            <p className="text-gray-600">{paso.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">✅ Beneficios</h3>
                <ul className="text-gray-700 space-y-2">
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
