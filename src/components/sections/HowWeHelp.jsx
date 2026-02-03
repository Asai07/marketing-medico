'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

/* ---------------- DATA ---------------- */
const solutions = [
    {
        id: 1,
        step: '01',
        label: 'Diagnóstico',
        title: 'Te ayudamos a entender qué está pasando en tu consulta',
        desc: 'Qué sí funciona, qué no y qué decisiones tienen sentido para tu momento actual.',
        bg: 'bg-[#374E86]', // Azul Oscuro
        text: 'text-white',
        accent: 'text-[#E6F2A2]',
    },
    {
        id: 2,
        step: '02',
        label: 'Diseño',
        title: 'Diseñamos cómo atraer pacientes de forma intencional',
        desc: 'Alineando visibilidad, mensajes y acciones con los tratamientos y objetivos que quieres priorizar.',
        bg: 'bg-[#F4F4F4]', // Gris Claro
        text: 'text-[#374E86]',
        accent: 'text-[#4A3AFF]',
    },
    {
        id: 3,
        step: '03',
        label: 'Ejecución',
        title: 'Acompañamos la ejecución, medimos resultados',
        desc: 'Ajustamos con base en lo que realmente impacta en tu agenda y tus ingresos.',
        bg: 'bg-[#E6F2A2]', // Verde Lima
        text: 'text-[#374E86]',
        accent: 'text-[#374E86]',
    }
];

/* ---------------- COMPONENTES ---------------- */

const Panel = ({ data, isActive, onHover }) => {
    return (
        <motion.div
            onMouseEnter={() => onHover(data.id)}
            layout
            transition={{ layout: { type: 'spring', stiffness: 100, damping: 20 } }}
            // CAMBIO 1: Agregamos 'justify-between' para separar Header (arriba) y Contenido (abajo).
            // Mantenemos la altura controlada (h-[420px]) para que el diseño se vea compacto pero con aire.
            className={`relative h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden cursor-default 
        flex flex-col justify-between p-8 md:p-10
        ${isActive ? 'flex-[3]' : 'flex-[1]'} 
        ${data.bg} transition-colors duration-500`}
        >
            {/* --- HEADER DEL PANEL (Se queda arriba) --- */}
            <div className="flex justify-between items-start shrink-0">
                <div className={`flex flex-col gap-1 ${data.text}`}>
                    <span className="text-xl md:text-2xl font-serif-display opacity-50">{data.step}</span>
                    <motion.span
                        layout="position"
                        className={`font-bold text-xs uppercase tracking-widest ${isActive ? 'opacity-100' : 'opacity-60'}`}
                    >
                        {data.label}
                    </motion.span>
                </div>

                <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    className={`opacity-50 ${data.text}`}
                >
                    <ArrowUpRight size={24} />
                </motion.div>
            </div>

            {/* --- CONTENIDO PRINCIPAL (Se va al fondo) --- */}
            {/* CAMBIO 2: Eliminamos 'mt-5' y usamos 'mt-auto' implícito por el justify-between del padre */}
            <div className="relative z-10">
                <AnimatePresence mode="popLayout">
                    {isActive ? (
                        <motion.div
                            key="active"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <h3 className={`font-serif-display text-2xl md:text-3xl lg:text-4xl leading-[1.1] mb-6 ${data.text} max-w-lg`}>
                                {data.title}
                            </h3>

                            {/* CAMBIO 3: Color explícito Morado (#BCB5FF) en lugar de 'bg-current' */}
                            {/* Esto asegura que se vea bien sobre el Azul Oscuro y crea coherencia */}
                            <motion.div
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1, originX: 0 }}
                                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                                className={`w-12 h-[4px] bg-[#BCB5FF] mb-6 rounded-full`}
                            />

                            <p className={`font-sans-body text-base md:text-lg leading-relaxed opacity-90 max-w-md ${data.text}`}>
                                {data.desc}
                            </p>
                        </motion.div>
                    ) : (
                        // Estado inactivo
                        <motion.div
                            key="inactive"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                        >
                            {/* Ajuste de posición del título decorativo */}
                            <h3 className={`font-serif-display text-3xl opacity-20 origin-bottom-left -rotate-90 translate-x-8 -translate-y-8 whitespace-nowrap ${data.text} hidden md:block absolute bottom-0 left-0`}>
                                {data.label}
                            </h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Gradiente sutil para profundidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none mix-blend-multiply" />
        </motion.div>
    );
};

/* ---------------- SECCIÓN PRINCIPAL ---------------- */

const HowWeHelp = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <section className="relative py-24 md:py-36 bg-white overflow-hidden px-4 md:px-12">
            <div className="max-w-[1400px] mx-auto">

                {/* ENCABEZADO */}
                <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
                    <div className="w-full lg:w-1/2">
                        <span className="inline-block py-2 px-4 rounded-full bg-[#E6F2A2] text-[#374E86] font-sans-body text-xs font-bold uppercase tracking-widest mb-8">
                            Cómo te ayudamos
                        </span>
                        <h2 className="font-serif-display text-4xl md:text-6xl text-[#374E86] leading-[1.1] mb-6">
                            Un acompañamiento estratégico pensado para tu consulta
                        </h2>
                        <h3 className="font-serif-display text-2xl text-[#374E86]/60 leading-tight">
                            No trabajamos con acciones no pensadas, ni soluciones rápidas.
                        </h3>
                    </div>

                    <div className="w-full lg:w-1/3 lg:pt-24">
                        <p className="font-sans-body text-[#374E86]/80 text-lg leading-relaxed mb-6">
                            Nuestro enfoque es acompañarte en decisiones estratégicas que impactan directamente en tu agenda y tus ventas.
                        </p>
                        <div className="flex items-center gap-2 text-[#374E86] font-bold text-xs uppercase tracking-widest opacity-60">
                            <Sparkles size={14} />
                            <span>Sin Fórmulas Mágicas</span>
                        </div>
                    </div>
                </div>

                {/* PANELES */}
                <div className="flex flex-col lg:flex-row gap-4 mb-24">
                    {solutions.map((item) => (
                        <Panel
                            key={item.id}
                            data={item}
                            isActive={activeId === item.id}
                            onHover={setActiveId}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="font-serif-display text-3xl md:text-5xl text-[#374E86] leading-tight mb-12">
                        El resultado es más orden, más control y un crecimiento que deja de{' '}
                        <span className="italic font-serif-display text-[#BCB5FF]">depender de la improvisación.</span>
                    </h3>

                    <div className="flex flex-col items-center gap-4">
                        <button className="group relative px-10 py-5 bg-[#374E86] text-white rounded-full overflow-hidden transition-all hover:scale-105 duration-300 shadow-xl shadow-[#374E86]/20 cursor-pointer">
                            <div className="absolute inset-0 bg-[#E6F2A2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out will-change-transform" />
                            <span className="relative z-10 font-sans-body font-bold text-lg flex items-center gap-3 group-hover:text-[#374E86] transition-colors duration-300">
                                Evaluar mi negocio
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <p className="text-xs text-[#374E86]/50 font-sans-body">
                            Por eso, antes de trabajar con alguien, evaluamos si este enfoque es el adecuado para su consulta.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowWeHelp;