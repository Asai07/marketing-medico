'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScanSearch, Map, Zap, ArrowRight, Asterisk, CheckCircle2 } from 'lucide-react';

/* ---------------- DATA ---------------- */
const stepsData = [
    {
        id: '01',
        phase: 'Diagnóstico',
        title: 'Diagnóstico Real',
        desc: 'Analizamos tu consulta como negocio: cómo llegan hoy tus pacientes y dónde se está perdiendo el crecimiento exacto.',
        bg: 'bg-[#1a1a1a]',
        text: 'text-[#f0f0f0]',
        accent: 'text-[#9CB6EE]',
        icon: ScanSearch,
    },
    {
        id: '02',
        phase: 'Estrategia',
        title: 'Estrategia Clara',
        desc: 'Definimos objetivos concretos, el tipo de paciente que quieres atraer y las acciones que realmente tienen sentido para tu etapa actual.',
        bg: 'bg-[#f0f0f0]',
        text: 'text-[#374E86]',
        accent: 'text-[#4A3AFF]',
        icon: Map,
    },
    {
        id: '03',
        phase: 'Ejecución',
        title: 'Ejecución con Intención',
        desc: 'Medimos resultados y ajustamos con base en lo que impacta de forma real en tu agenda y tus ventas. Nada de métricas vanidosas.',
        bg: 'bg-[#E6F2A2]',
        text: 'text-[#374E86]',
        accent: 'text-[#5F6B18]',
        icon: Zap,
    },
    {
        id: 'CTA',
        isCTA: true,
        bg: 'bg-[#bcb5ff]',
        text: 'text-white',
        accent: 'text-[#BCB5FF]',
    }
];

/* ---------------- CARD COMPONENT (Actualizado) ---------------- */
const Card = ({ data, i, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        // CAMBIO AQUÍ: 'sticky top-0' -> 'sticky top-4 md:top-8'
        // Esto añade un margen de seguridad de ~16px (móvil) a ~32px (escritorio)
        // para que la tarjeta no choque contra el borde superior o el navbar.
        <div ref={container} className="h-screen flex items-center justify-center sticky top-4 md:top-8">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={`relative flex flex-col w-[90vw] md:w-[1000px] h-[75vh] md:h-[70vh] rounded-[2.5rem] origin-top 
        border border-black/5 shadow-2xl overflow-hidden ${data.bg} p-8 md:p-14`}
            >
                {/* HEADER TARJETA */}
                <div className="flex justify-between items-center mb-6 md:mb-10 border-b border-current/10 pb-6">
                    <div className={`flex items-center gap-4 ${data.text}`}>
                        <span className="text-xl font-bold font-serif-display tracking-tighter">({data.id})</span>
                        <span className="text-sm font-bold uppercase tracking-widest opacity-60">{data.phase || 'Start'}</span>
                    </div>
                    {!data.isCTA && <data.icon className={`w-8 h-8 ${data.accent}`} />}
                </div>

                {/* CONTENIDO */}
                <div className="flex flex-col md:flex-row h-full gap-8 md:gap-20">

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        {data.isCTA ? (
                            <h2 className={`text-4xl md:text-6xl font-serif-display leading-[1.1] ${data.text}`}>
                                Claridad, Control y <br />
                                <span className="italic text-[#E6F2A2]">Crecimiento.</span>
                            </h2>
                        ) : (
                            <h2 className={`text-5xl md:text-7xl font-serif-display leading-[0.9] ${data.text}`}>
                                {data.title.split(' ').map((word, idx) => (
                                    <span key={idx} className="block">{word}</span>
                                ))}
                            </h2>
                        )}
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                        {data.isCTA ? (
                            <div className="flex flex-col h-full justify-center">
                                <p className="text-lg md:text-xl text-white/90 mb-8 font-sans-body">
                                    El resultado deja de <span className="italic font-serif-display text-[#BCB5FF]">depender de la suerte</span>.
                                    Antes de trabajar con alguien, evaluamos si este enfoque es adecuado para su consulta.
                                </p>

                                <button className="group relative w-full md:w-auto px-8 py-5 bg-[#E6F2A2] text-[#374E86] rounded-full overflow-hidden transition-all hover:scale-[1.02] duration-300 shadow-xl mb-4">
                                    <span className="relative z-10 font-bold text-lg flex items-center justify-center gap-3">
                                        Evaluar mi negocio <ArrowRight size={20} />
                                    </span>
                                </button>

                                <p className="text-xs text-white/50 text-center md:text-left px-2">
                                    * Test de 3 min para definir si esto es lo que necesitas.
                                </p>
                            </div>
                        ) : (
                            <>
                                <p className={`text-lg md:text-2xl leading-relaxed font-sans-body ${data.text} opacity-80`}>
                                    {data.desc}
                                </p>
                                <div className="mt-8">
                                    <div className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${data.accent}`}>
                                        <Asterisk className="animate-spin-slow w-4 h-4" />
                                        <span>Metodología</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl pointer-events-none mix-blend-overlay" />

            </motion.div>
        </div>
    );
};

/* ---------------- MAIN CONTAINER ---------------- */
const OurApproach = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative bg-white font-sans-body pb-24">

            {/* Intro Section */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">

                    <div className="w-full md:w-1/2">
                        <span className="inline-block py-2 px-4 rounded-full bg-[#E6F2A2] font-sans-body text-xs font-bold uppercase tracking-widest text-[#374E86] mb-8">
                            Nuestro Enfoque
                        </span>

                        <h2 className="font-serif-display text-4xl md:text-6xl text-[#374E86] leading-[1.1]">
                            No ejecutamos marketing sin entender <span className="italic text-[#BCB5FF]">el negocio.</span>
                        </h2>
                    </div>

                    <div className="w-full md:w-1/3 pt-2 md:pt-20">
                        <p className="text-lg md:text-xl text-[#374E86]/80 leading-relaxed font-medium mb-6">
                            No creemos en fórmulas genéricas ni en estrategias copiadas de otros giros.
                        </p>
                        <div className="flex gap-4 items-start text-[#374E86]/60 text-base leading-relaxed">
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-[#E6F2A2]" fill="#374E86" />
                            <p>Cada consulta tiene una dinámica distinta y requiere decisiones pensadas para su contexto.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Cards Stack */}
            <div className="mt-[-10vh]">
                {stepsData.map((project, i) => {
                    const targetScale = 1 - ((stepsData.length - i) * 0.05);
                    return (
                        <Card
                            key={i}
                            i={i}
                            data={project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

        </section>
    );
};

export default OurApproach;