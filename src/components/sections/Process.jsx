'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
    {
        id: "01",
        menuTitle: "Auditoría",
        title: "Diagnóstico Profundo",
        desc: "Antes de cualquier receta, necesitamos una radiografía. Analizamos tu presencia digital actual para detectar fugas de presupuesto y oportunidades invisibles en tu zona.",
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "02",
        menuTitle: "Estrategia",
        title: "Arquitectura Visual",
        desc: "No es solo 'hacer anuncios'. Diseñamos el ecosistema completo: Landing pages éticas, segmentación de pacientes de alto valor y guiones que educan.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "03",
        menuTitle: "Lanzamiento",
        title: "Tracción Inmediata",
        desc: "Activamos los sistemas. Tus campañas empiezan a circular y los pacientes calificados agendan. Tu recepción recibe scripts para asegurar la asistencia.",
        img: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "04",
        menuTitle: "Optimización",
        title: "Ciencia de Datos",
        desc: "Ajustamos semanalmente el costo por adquisición. Escalamos lo que funciona y cortamos lo que no. Tu agenda pasa de ser impredecible a un sistema estable.",
        img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1920&auto=format&fit=crop"
    }
];

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="relative bg-[#FFFFFF] px-4 md:px-12 py-20 md:py-32">

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* --- COLUMNA IZQUIERDA --- */}
                <div className="lg:col-span-7 relative h-[500px] md:h-[550px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full flex flex-col justify-center"
                        >
                            <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden rounded-2xl bg-[#F8F9FF] shadow-lg shadow-[#374e86]/5 mb-8">
                                <img
                                    src={steps[activeStep].img}
                                    alt={steps[activeStep].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="pl-1">
                                <div className="flex items-center gap-3 mb-3">
                                    {/* ID del paso en Violeta suave */}
                                    <span className="font-massive text-4xl text-[#bcb5ff]/50">
                                        {steps[activeStep].id}
                                    </span>
                                    <h3 className="font-serif-display text-3xl text-[#374e86]">
                                        {steps[activeStep].title}
                                    </h3>
                                </div>
                                <p className="font-sans-body text-[#374e86]/70 leading-relaxed text-base max-w-lg">
                                    {steps[activeStep].desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- COLUMNA DERECHA --- */}
                <div className="lg:col-span-5 flex flex-col justify-center h-full">
                    <div className="mb-10 md:mb-12">
                        <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-2 block">
                            El Método
                        </span>
                        <h2 className="font-massive font-semibold text-5xl md:text-6xl leading-[0.9] text-[#374e86]">
                            PROCESO <br /> CLÍNICO.
                        </h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer relative pl-6 py-3"
                                onMouseEnter={() => setActiveStep(index)}
                                onClick={() => setActiveStep(index)}
                            >
                                {/* Línea indicadora vertical en Violeta (#bcb5ff) */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: activeStep === index ? "100%" : "0%",
                                        opacity: activeStep === index ? 1 : 0
                                    }}
                                    className="absolute left-0 top-0 w-[2px] bg-[#bcb5ff]"
                                />

                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#374e86]/5 -z-10"></div>

                                <div className="flex items-center justify-between">
                                    {/* CAMBIO AQUÍ: Eliminamos el estilo 'text-transparent' y 'WebkitTextStroke' */}
                                    <span
                                        className={`font-massive text-4xl md:text-5xl transition-all duration-300 ${activeStep === index
                                            ? 'text-[#374e86] translate-x-2' // Activo: Azul sólido fuerte
                                            : 'text-[#374e86]/25 group-hover:text-[#374e86]/50' // Inactivo: Azul sólido suave (sin borde)
                                            }`}
                                    >
                                        {step.menuTitle}
                                    </span>

                                    {/* Indicador numérico */}
                                    <motion.span
                                        animate={{ opacity: activeStep === index ? 1 : 0, x: activeStep === index ? 0 : -10 }}
                                        className="text-[#95b2ed] text-sm font-bold tracking-widest hidden md:block"
                                    >
                                        0{index + 1}
                                    </motion.span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;