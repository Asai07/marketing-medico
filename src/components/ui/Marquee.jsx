import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    // Palabras clave que se repetirán
    const keywords = [
        "Dermatología", "•", "Cirugía Plástica", "•", "Odontología", "•",
        "Medicina Estética", "•", "Ginecología", "•", "Traumatología", "•",
        "Alta Especialidad", "•", "Growth Partner", "•"
    ];

    return (
        <div className="relative w-full py-8 bg-[#1A1A1A] overflow-hidden flex items-center border-y border-white/10 z-20">
            {/* Degradados laterales para suavizar la entrada/salida */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10"></div>

            <div className="flex whitespace-nowrap">
                {/* Renderizamos el bloque 2 veces para el loop infinito perfecto */}
                {[0, 1].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex items-center"
                    >
                        {keywords.map((word, idx) => (
                            <span
                                key={idx}
                                className={`mx-6 text-4xl md:text-6xl font-massive uppercase tracking-tighter ${word === "•" ? "text-[#8FA89B]" : "text-white/80"
                                    }`}
                            >
                                {word}
                            </span>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;