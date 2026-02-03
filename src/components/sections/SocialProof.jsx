'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Quote, Star, CheckCircle2 } from 'lucide-react';

/* ---------------- DATA ---------------- */
const testimonialData = {
    headline: "Resultados con contexto, no promesas vacías.",
    subheadline: "No creemos en mostrar resultados sin explicar el proceso detrás. Cada consulta tiene una realidad distinta.",
    storyTitle: "Historia real de crecimiento",
    paragraphs: [
        "Cuando comenzamos a trabajar juntos, la consulta operaba en una zona residencial. Su crecimiento dependía casi exclusivamente de recomendaciones boca a boca, lo cual generaba meses buenos y meses de incertidumbre total.",
        "El primer paso no fue lanzar anuncios. Fue ordenar la captación: definimos prioridades claras y establecimos un sistema para medir qué pacientes eran rentables y cuáles solo ocupaban tiempo en agenda.",
        "A lo largo del acompañamiento, tomamos decisiones estratégicas difíciles pero necesarias. Ajustamos precios, definimos el perfil ideal y creamos los mensajes para atraerlo.",
        "Con el tiempo, la consulta logró consolidarse, mejorar la calidad de los pacientes y dar el siguiente paso natural: establecerse en una plaza comercial con un flujo predecible."
    ],
    quote: "Hoy los pacientes que llegan confían en mi trabajo, no buscan promociones y vienen mejor informados.",
    author: "Dr. Pedro",
    role: "Ortodoncista",
    stats: [
        { label: "Crecimiento", value: "+45%" },
        { label: "Calidad Paciente", value: "9/10" }
    ],
    footerText: "Este crecimiento fue resultado de constancia, acompañamiento y decisiones bien pensadas."
};

/* ---------------- COMPONENTS ---------------- */

const VideoPlaceholder = () => {
    return (
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:h-[550px] rounded-[2rem] overflow-hidden bg-[#2a3b66] border border-white/10 group cursor-pointer shadow-2xl transition-transform duration-500 hover:shadow-[#E6F2A2]/10">
            {/* Background simulado */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 z-10" />

            {/* Botón Play */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E6F2A2] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(230,242,162,0.4)]">
                    <Play fill="#374E86" className="text-[#374E86] ml-1 w-8 h-8" />
                </div>
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-8 left-8 z-20">
                <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#E6F2A2" className="text-[#E6F2A2]" />)}
                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest ml-2">Caso de Éxito</span>
                </div>
                <p className="text-white text-xl font-serif-display">{testimonialData.author} & MADA</p>
            </div>
        </div>
    );
};

/* ---------------- MAIN SECTION ---------------- */

const SocialProof = () => {
    return (
        // Quitamos 'overflow-hidden' del section para asegurar que el sticky funcione bien
        <section className="relative bg-[#374E86] text-white py-24 md:py-32">

            {/* Textura de fondo sutil */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* --- HEADER --- */}
                <div className="max-w-4xl mb-20 md:mb-24">
                    <span className="inline-block py-2 px-4 rounded-full bg-[#BCB5FF]/10 border border-[#BCB5FF]/20 text-[#BCB5FF] font-sans-body text-xs font-bold uppercase tracking-widest mb-8">
                        Evidencia
                    </span>

                    <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.1] mb-6">
                        {testimonialData.headline}
                    </h2>

                    <p className="font-sans-body text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                        {testimonialData.subheadline}
                    </p>
                </div>

                {/* --- SPLIT LAYOUT (Sticky Fix) --- */}
                {/* 'items-start' es CRUCIAL: evita que la columna del video se estire al alto del texto */}
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

                    {/* --- LEFT: VIDEO (Sticky Column) --- */}
                    {/* Aplicamos sticky directamente a la columna */}
                    <div className="w-full lg:w-5/12 lg:sticky lg:top-32 z-20">
                        <VideoPlaceholder />

                        {/* Stats debajo del video */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            {testimonialData.stats.map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                    <p className="text-3xl font-serif-display text-[#E6F2A2] mb-1">{stat.value}</p>
                                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT: NARRATIVE (Scrollable) --- */}
                    <div className="w-full lg:w-6/12 pt-4 lg:pt-0">
                        <div className="flex flex-col gap-8 md:gap-10">

                            <div className="border-l-2 border-[#BCB5FF]/30 pl-6 py-2">
                                <h3 className="font-serif-display text-2xl md:text-3xl text-[#BCB5FF]">
                                    {testimonialData.storyTitle}
                                </h3>
                            </div>

                            {/* Párrafos con buen espaciado para permitir scroll */}
                            <div className="font-sans-body text-lg md:text-xl leading-loose text-white/80 space-y-8">
                                {testimonialData.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            {/* QUOTE DESTACADA */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative my-8 p-8 md:p-12 bg-[#E6F2A2] rounded-tr-[3rem] rounded-bl-[3rem] text-[#374E86] shadow-2xl"
                            >
                                <Quote className="absolute top-6 left-6 text-[#374E86]/20 w-12 h-12 rotate-180" />

                                <blockquote className="relative z-10 font-serif-display text-2xl md:text-3xl leading-tight font-medium">
                                    “{testimonialData.quote}”
                                </blockquote>

                                <div className="mt-6 flex items-center gap-3 relative z-10 border-t border-[#374E86]/20 pt-4">
                                    <div className="w-8 h-8 rounded-full bg-[#374E86] flex items-center justify-center text-[#E6F2A2]">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm uppercase tracking-widest">{testimonialData.author}</p>
                                        <p className="text-xs opacity-70">{testimonialData.role}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Disclaimer / Footer Context */}
                            <div className="p-6 rounded-2xl bg-black/20 border border-white/5 text-sm text-white/50 leading-relaxed">
                                <p className="mb-4">
                                    <span className="text-[#E6F2A2] font-bold uppercase tracking-wider mr-2">* Contexto:</span>
                                    {testimonialData.footerText}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* --- BOTTOM CTA --- */}
                <div className="mt-32 md:mt-48 flex flex-col items-center text-center border-t border-white/10 pt-20">
                    <h3 className="font-serif-display text-3xl md:text-5xl mb-10 max-w-3xl">
                        ¿Listo para construir tu propia <br />
                        <span className="text-[#E6F2A2] italic">historia de éxito?</span>
                    </h3>

                    <div className="flex flex-col items-center gap-4">
                        <button className="group relative px-10 py-5 bg-[#E6F2A2] text-[#374E86] rounded-full overflow-hidden transition-all hover:scale-105 duration-300 shadow-xl shadow-[#E6F2A2]/10 cursor-pointer">
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out will-change-transform" />
                            <span className="relative z-10 font-sans-body font-bold text-lg flex items-center gap-3 group-hover:text-[#374E86] transition-colors duration-300">
                                Evaluar mi negocio
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <p className="text-xs text-white/40 font-sans-body">
                            Test de 3 min para definir si este enfoque es lo que necesitas.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProof;