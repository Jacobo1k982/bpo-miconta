import React from 'react';
import CarouselServicios from '../Components/CarouselServicios.jsx';
import otrosServiciosData from '../data/otrosServicios.json';

const OtrosServicios = () => {
    return (
        <CarouselServicios
            data={otrosServiciosData}
            titulo="Desbloquee la libertad financiera con decisiones inteligentes"
            etiqueta="Contabilidad"
            linkGeneral="/"
        />
    );
};

export default OtrosServicios;
