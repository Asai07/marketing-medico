'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

/* --- COMPONENTE DE ANIMACIÓN (MASK REVEAL) --- */
/* CORRECCIÓN: Ahora acepta clases para ajustar el padding interno y evitar recortes */
const RevealText = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        // Agregamos 'relative' y permitimos pasar clases extra (padding)
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "110%" }} // Empezamos un poco más abajo para asegurar que no se vea nada
                animate={isInView ? { y: "0%" } : { y: "110%" }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

/* --- SECCIÓN PRINCIPAL --- */
const FinalCTA = () => {
    return (
        <section className="relative bg-white py-32 md:py-48 overflow-hidden">

            {/* Fondo decorativo (Glow Verde) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E6F2A2]/20 rounded-full blur-[100px] pointer-events-none opacity-60" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* 1. TAGLINE */}
                <div className="mb-10 overflow-hidden pb-2"> {/* pb-2 extra por seguridad */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-3 px-6 rounded-full bg-[#E6F2A2] text-[#374E86] font-sans-body text-xs md:text-sm font-bold uppercase tracking-widest shadow-lg shadow-[#E6F2A2]/20">
                            Antes de avanzar, evaluemos si este enfoque es para ti
                        </span>
                    </motion.div>
                </div>

                {/* 2. TÍTULO GIGANTE CON CORRECCIONES DE RECORTE */}
                <div className="mb-12 flex flex-col items-center">

                    {/* Línea 1: ¿Damos el */}
                    {/* CORRECCIÓN: pb-4 para que el signo '¿' (que baja) no se corte abajo */}
                    <RevealText className="pb-4 px-2">
                        <h2 className="font-serif-display text-6xl md:text-8xl text-[#374E86] leading-tight tracking-tight">
                            ¿Damos el
                        </h2>
                    </RevealText>

                    {/* Línea 2: siguiente paso? */}
                    {/* CORRECCIÓN: pr-6 (padding derecho) para que el '?' itálico no se corte */}
                    {/* CORRECCIÓN: pb-4 (padding inferior) para que la 'p' o 'g' no se corten */}
                    <RevealText delay={0.15} className="pb-4 pr-6 px-2">
                        <span className="font-serif-display text-6xl md:text-8xl text-[#BCB5FF] italic leading-tight tracking-tight">
                            siguiente paso?
                        </span>
                    </RevealText>
                </div>

                {/* 3. DESCRIPCIÓN */}
                <div className="max-w-2xl mx-auto mb-16 space-y-2">
                    <RevealText delay={0.3} className="pb-2">
                        <p className="font-sans-body text-xl md:text-2xl text-[#374E86] font-bold leading-relaxed">
                            El primer paso no es una llamada de venta.
                        </p>
                    </RevealText>

                    <RevealText delay={0.4} className="pb-2">
                        <p className="font-sans-body text-lg md:text-xl text-[#374E86]/70 leading-relaxed">
                            Es una evaluación breve para entender tu consulta, tu momento actual
                            y si este enfoque tiene sentido para ti.
                        </p>
                    </RevealText>
                </div>

                {/* 4. BOTÓN */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-[#E6F2A2] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />

                    <button className="relative px-12 py-6 md:px-16 md:py-8 bg-[#374E86] text-white rounded-full overflow-hidden transition-all hover:scale-[1.02] duration-300 shadow-2xl cursor-pointer">
                        <div className="absolute inset-0 bg-[#E6F2A2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.22,1,0.36,1] will-change-transform" />
                        <span className="relative z-10 font-sans-body font-bold text-xl md:text-2xl flex items-center gap-4 group-hover:text-[#374E86] transition-colors duration-300">
                            Evaluar mi negocio
                            <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </motion.div>

                {/* 5. MICROCOPY */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 text-sm text-[#374E86]/50 font-sans-body"
                >
                    Test de 3 min para definir si este enfoque es lo que necesitas.
                </motion.p>

                {/* 6. GARANTÍA DE CLARIDAD (CORREGIDA: Una sola línea) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-20 inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-[#F4F4F4] border border-[#374E86]/5 max-w-4xl"
                // ^ Aumenté el max-w si fuera necesario, aunque 'inline-flex' se ajusta al contenido
                >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-[#374E86]">
                        <Sparkles size={18} />
                    </div>

                    {/* CORRECCIÓN: 'text-left' y quitamos 'block' del span para que sea continuo */}
                    <p className="text-left text-[#374E86]/80 text-sm md:text-base font-medium leading-snug">
                        Si después de la evaluación vemos que no somos el enfoque adecuado, {' '}
                        <span className="text-[#374E86] font-bold">
                            te lo diremos con total claridad.
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default FinalCTA;