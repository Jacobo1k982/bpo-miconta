import React from 'react';
import { FaGlobe, FaMoneyBillWave } from 'react-icons/fa';
import { FaColonSign } from 'react-icons/fa6';

const FinanceXDivider = () => {
    const Banda = ({ rotate, gradient, delay = 0 }) => (
        <div
            className="absolute top-1/3 left-1 -translate-x-1/2 -translate-y-1/2"
            style={{
                width: '80vw', // muy amplio para cubrir todo cuando rota
                height: '4rem',
                transform: `translate (-50%, -50%) rotate(${rotate}deg)`,
                background: gradient,
                zIndex: 1,
                animationDelay: `${delay}s`,
            }}
        >
            <div className="flex gap-6 animate-marquee text-white font-semibold text-sm md:text-lg whitespace-nowrap h-full items-center px-4">
                {Array(20).fill(0).map((_, i) => (
                    <span key={i} className="flex items-center gap-2">
                        Inversión<FaGlobe />Finanza<FaMoneyBillWave />bpomiconta<FaColonSign />
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <div className="relative h-5 md:h-5 overflow-hidden w-screen left-1/2 -translate-x-1/2">
            
            <Banda
                rotate={25}
                gradient="linear-gradient(to right)"
                delay={25}
            />
        </div>
    );
};

export default FinanceXDivider;
