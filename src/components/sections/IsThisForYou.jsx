'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

/* ---------------- DATOS ---------------- */
const fitData = {
    positive: {
        title: "Es para ti si...",
        subtitle: "Buscas construcción y estrategia",
        items: [
            "Ya tienes consulta activa y ventas (aunque sean irregulares).",
            "Buscas crecer tu agenda con orden y control, no solo volumen.",
            "Quieres entender qué está funcionando en tu captación.",
            "Prefieres tomar decisiones con información clara, no a ciegas.",
            "Estás dispuesto a invertir de forma consciente para escalar.",
            "Prefieres crecimiento sostenible en lugar de picos impredecibles."
        ]
    },
    negative: {
        title: "No es para ti si...",
        subtitle: "Buscas parches temporales",
        items: [
            "Buscas viralidad o exposición sin impacto real en ventas.",
            "Solo quieres un 'manejo de redes sociales' genérico.",
            "Esperas resultados inmediatos sin un proceso detrás.",
            "No tienes claridad sobre tu presupuesto o modelo.",
            "Comparas agencias únicamente por precio barato.",
            "Buscas soluciones rápidas o fórmulas mágicas."
        ]
    }
};

/* ---------------- COMPONENTES ---------------- */

const NegativeItem = ({ children }) => (
    <motion.li
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 text-white/50 hover:text-white/80 transition-colors duration-300 group py-2"
    >
        <div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-400/50 group-hover:bg-red-400/10 transition-colors">
            <X size={12} className="text-white/40 group-hover:text-red-400 transition-colors" />
        </div>
        <span className="font-sans-body text-base leading-relaxed decoration-white/20 group-hover:line-through transition-all">
            {children}
        </span>
    </motion.li>
);

const PositiveItem = ({ children, index }) => (
    <motion.li
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start gap-4 text-white group py-3 border-b border-white/10 last:border-0"
    >
        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F2A2] flex items-center justify-center shadow-[0_0_15px_rgba(230,242,162,0.4)] group-hover:scale-110 transition-transform duration-300">
            <Check size={14} strokeWidth={3} className="text-[#38106A]" />
        </div>
        <span className="font-sans-body text-lg leading-relaxed font-medium group-hover:text-[#E6F2A2] transition-colors duration-300">
            {children}
        </span>
    </motion.li>
);

/* ---------------- MAIN SECTION ---------------- */

const IsThisForYou = () => {
    return (
        <section className="relative py-32 px-4 md:px-12 bg-[#374E86] overflow-hidden font-sans-body">

            {/* =======================================================
               CAPA 1: LUCES DE FONDO (Los colores vivos)
               ======================================================= */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* Morado Profundo (Base) */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-[#4C2882] rounded-full blur-[120px] mix-blend-screen opacity-60"
                />

                {/* Lila Vibrante (Movimiento) */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#BCB5FF] rounded-full blur-[150px] mix-blend-screen opacity-50"
                />

                {/* Azul Cian/Claro (Contraste) */}
                <motion.div
                    animate={{ x: [-50, 50, -50], y: [50, -50, 50] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] left-[10%] w-[70vw] h-[70vw] bg-[#3B82F6] rounded-full blur-[160px] mix-blend-screen opacity-40"
                />

                {/* Blanco (Punto de Luz / Reflejo) */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-white rounded-full blur-[180px] mix-blend-overlay opacity-40"
                />
            </div>

            {/* =======================================================
               CAPA 2: EL "VIDRIO" (Textura + Desenfoque Global)
               Aquí es donde ocurre la magia del efecto "detrás de un cristal"
               ======================================================= */}
            <div className="absolute inset-0 z-0">
                {/* Desenfoque global para unificar las luces */}
                <div className="absolute inset-0 backdrop-blur-[100px]" />

                {/* Textura de ruido granulado (Physical Feel) */}
                <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                />

                {/* Brillo especular (Reflejo del cristal) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-black/20 mix-blend-overlay" />
            </div>


            {/* =======================================================
               CONTENIDO PRINCIPAL
               ======================================================= */}
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28 border-b border-white/10 pb-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E6F2A2] text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                                Fit Cultural
                            </span>
                            <h2 className="font-serif-display text-5xl md:text-7xl text-white leading-none drop-shadow-xl">
                                ¿Hacemos <span className="italic text-[#BCB5FF]">match?</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="max-w-xs text-right hidden md:block">
                        <p className="text-white/80 text-sm leading-relaxed font-medium">
                            La transparencia ahorra tiempo. <br />
                            Definamos si somos el equipo correcto para ti.
                        </p>
                    </div>
                </div>

                {/* --- GRID INTERACTIVO --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* 1. TARJETA NEGATIVA (Vidrio Ahumado) */}
                    <div className="lg:col-span-5 relative p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden flex flex-col hover:bg-black/30 transition-colors duration-500">
                        <div className="mb-10">
                            <div className="flex items-center gap-3 text-white/40 mb-4 uppercase tracking-widest text-xs font-bold">
                                <AlertCircle size={16} />
                                <span>No alineado</span>
                            </div>
                            <h3 className="font-serif-display text-3xl md:text-4xl text-white/50">
                                {fitData.negative.title}
                            </h3>
                        </div>
                        <ul className="space-y-4 relative z-10">
                            {fitData.negative.items.map((item, i) => (
                                <NegativeItem key={i}>{item}</NegativeItem>
                            ))}
                        </ul>
                        <div className="mt-auto pt-10 border-t border-white/5 text-white/30 text-sm italic">
                            "Buscamos arreglos rápidos sin cambiar el fondo."
                        </div>
                    </div>

                    {/* 2. TARJETA POSITIVA (Morado Sólido Vibrante) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        // Morado Fuerte (#38106A) para destacar sobre el fondo etéreo
                        className="lg:col-span-7 relative p-8 md:p-16 rounded-[2.5rem] 
                                   bg-[#bcb5ff] text-white
                                   shadow-[0_20px_60px_-15px_rgba(56,16,106,0.6)]
                                   border border-white/10
                                   overflow-hidden flex flex-col justify-between group"
                    >

                        {/* Glow Interno para volumen */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#BCB5FF]/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

                        <div className="mb-12 relative z-10">
                            <div className="flex items-center gap-2 text-[#38106A] mb-4 uppercase tracking-widest text-xs font-bold bg-[#E6F2A2] w-fit px-3 py-1 rounded-full shadow-lg shadow-[#E6F2A2]/20">
                                <Sparkles size={14} />
                                <span>Perfil Ideal</span>
                            </div>
                            <h3 className="font-serif-display text-4xl md:text-6xl text-white leading-none">
                                {fitData.positive.title}
                            </h3>
                            <p className="text-white/80 text-lg mt-4 max-w-md font-medium">
                                {fitData.positive.subtitle}
                            </p>
                        </div>

                        <ul className="space-y-2 relative z-10 mb-12">
                            {fitData.positive.items.map((item, i) => (
                                <PositiveItem key={i} index={i}>{item}</PositiveItem>
                            ))}
                        </ul>

                        <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center gap-6 justify-between">
                            <p className="font-medium text-lg text-white">
                                ¿Te identificas con este perfil?
                            </p>

                            <button className="group relative px-8 py-4 bg-white text-[#38106A] rounded-full overflow-hidden transition-all hover:scale-105 duration-300 shadow-lg cursor-pointer font-bold border-2 border-transparent hover:border-[#E6F2A2]">
                                <div className="absolute inset-0 bg-[#E6F2A2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#38106A]">
                                    Sí, evaluar mi negocio
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default IsThisForYou;