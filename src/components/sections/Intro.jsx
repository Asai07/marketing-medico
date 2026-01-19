'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Intro = () => {
    // ELIMINAMOS EL DIV WRAPPER "relative w-full"
    // El "sticky" debe ser el elemento raíz del componente para interactuar con sus hermanos (las cards)
    return (
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center bg-[#FDFBF7] z-0 px-6">
            <div className="max-w-4xl text-center">
                <h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl mb-4 leading-[1.1]">
                    <div className="overflow-hidden py-4 px-2">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            ¿Qué hacemos
                        </motion.div>
                    </div>
                    <div className="overflow-hidden py-4 px-2 -mt-8 md:-mt-12">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
                            <span className="text-[#8FA89B] italic">exactamente</span>?
                        </motion.div>
                    </div>
                </h2>

                <div className="mb-16 max-w-xl mx-auto px-4 py-4 relative z-20">
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-[#1A1A1A]/70 font-sans-body font-medium leading-relaxed"
                    >
                        Impulsamos tu
                        <span className="relative inline-block mx-2">
                            <span className="relative z-10 font-bold text-[#1A1A1A]">crecimiento</span>
                            <svg className="absolute bottom-1 left-[-5%] w-[110%] h-[0.8em] -z-10 -rotate-1 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 8 100 5" stroke="#8FA89B" strokeWidth="15" strokeLinecap="round" fill="none" />
                            </svg>
                        </span>
                        con estrategia clínica probada.
                    </motion.p>
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest font-bold">Sigue bajando</span>
                    <ArrowRight className="rotate-90 w-4 h-4" />
                </motion.div>
            </div>
        </div>
    );
};

export default Intro;