'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Users, ArrowUpRight, Activity } from 'lucide-react';

const Metrics = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-32 px-4 md:px-12 bg-[#F8F9FF] text-[#374e86] overflow-hidden">

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#374e86 1px, transparent 1px), linear-gradient(90deg, #374e86 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* HEADER */}
                <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-[#374e86]/10 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            {/* Punto pulsante en Lima (#e7f1ad) para destacar */}
                            <div className="w-3 h-3 rounded-full bg-[#e7f1ad] animate-pulse shadow-lg shadow-[#e7f1ad]/50"></div>
                            <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#374e86]/60">Data Auditada Q4</span>
                        </div>
                        <h2 className="font-massive font-semibold text-7xl md:text-9xl leading-[0.8] tracking-tighter text-[#374e86]">
                            IMPACTO <br />
                            {/* Gradiente de Violeta a Azul */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] to-[#374e86]/80">CLÍNICO.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="md:max-w-sm text-right md:text-left font-sans-body font-medium text-lg leading-relaxed text-[#374e86]/60"
                    >
                        Transformamos "likes" en pacientes reales. Métricas de crecimiento validadas en consultorios privados.
                    </motion.p>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 md:h-[750px]">

                    {/* 1. MAIN CARD: ROI GRAPH */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8 md:row-span-1 bg-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-[#374e86]/5 border border-[#374e86]/5"
                    >
                        <div className="relative z-20 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2 md:mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Activity className="w-4 h-4 text-[#bcb5ff]" />
                                            <p className="font-sans-body text-[#374e86]/40 uppercase tracking-widest text-xs font-bold">Retorno de Inversión</p>
                                        </div>
                                        <h3 className="font-massive text-6xl md:text-8xl text-[#374e86] tracking-tighter">4.8x</h3>
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-[#F8F9FF] border border-[#374e86]/10 text-[#374e86] font-bold text-xs md:text-sm font-sans-body">
                                        +12% vs Q3
                                    </div>
                                </div>
                                <p className="max-w-md text-[#374e86]/60 font-sans-body text-sm leading-relaxed relative z-30 pb-4 md:pb-0">
                                    Por cada dólar invertido en publicidad, nuestros doctores generan casi 5 dólares en consultas facturadas.
                                </p>
                            </div>
                        </div>

                        {/* GRÁFICO SVG - Ahora usa el Violeta (#bcb5ff) */}
                        <div className="absolute bottom-0 left-0 right-0 h-[35%] md:h-[50%] z-10 pointer-events-none">
                            <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                <motion.path
                                    d="M0 40 C 30 35, 40 20, 60 15 S 80 5, 100 2"
                                    fill="none" stroke="#bcb5ff" strokeWidth="0.5" strokeOpacity="0.3" className="blur-sm"
                                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                                />
                                <motion.path
                                    d="M0 40 C 30 35, 40 20, 60 15 S 80 5, 100 2"
                                    fill="none" stroke="#bcb5ff" strokeWidth="1"
                                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#bcb5ff" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                                </linearGradient>
                                <motion.path
                                    d="M0 40 C 30 35, 40 20, 60 15 S 80 5, 100 2 L 100 40 Z"
                                    fill="url(#chartGradient)"
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                                />
                            </svg>
                        </div>
                    </motion.div>

                    {/* 2. VIDEO CONTENT CARD - Ahora fondo Azul Profundo (#374e86) */}
                    <motion.div
                        style={{ y: yParallax }}
                        className="md:col-span-4 md:row-span-2 bg-[#374e86] rounded-[2.5rem] relative overflow-hidden group cursor-pointer shadow-2xl shadow-[#374e86]/20"
                    >
                        <div className="absolute inset-0 bg-[#bcb5ff] mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                            alt="Producción Contenido"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#374e86]/90 via-[#374e86]/20 to-transparent z-10" />

                        <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center mb-6 group-hover:bg-[#bcb5ff] group-hover:text-[#374e86] transition-colors border border-white/30">
                                <Play className="fill-current text-white group-hover:text-[#374e86] ml-1" size={20} />
                            </div>

                            <h3 className="font-massive text-4xl text-white mb-2 leading-[0.9]">
                                Estética <br />Visual
                            </h3>

                            <div className="h-[1px] w-full bg-white/20 my-4"></div>
                            <p className="text-white/70 text-sm font-sans-body">
                                Elevamos la percepción de tu clínica con producción audiovisual de alta gama.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. PACIENTES CARD - Fondo Violeta (#bcb5ff) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-4 md:row-span-1 bg-[#bcb5ff] rounded-[2.5rem] p-8 flex flex-col justify-between text-[#374e86] relative overflow-hidden group shadow-lg shadow-[#bcb5ff]/30"
                    >
                        {/* Blob decorativo en Lima (#e7f1ad) */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#e7f1ad]/40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        <div className="flex justify-between items-start relative z-10">
                            <div className="p-2 bg-white/30 backdrop-blur-sm rounded-lg">
                                <Users className="w-5 h-5 text-[#374e86]" />
                            </div>
                            <ArrowUpRight className="text-[#374e86]/80" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-massive text-7xl tracking-tighter mb-0 text-[#374e86] group-hover:translate-x-2 transition-transform">
                                +85
                            </h3>
                            <p className="font-sans-body text-sm font-bold text-[#374e86]/70 uppercase tracking-wide">
                                Pacientes nuevos / mes
                            </p>
                        </div>
                    </motion.div>

                    {/* 4. RETENCION CARD - Bordes y anillo en Violeta */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-4 md:row-span-1 bg-white border border-[#374e86]/5 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-[#bcb5ff] transition-colors shadow-lg shadow-[#374e86]/5"
                    >
                        <div className="absolute inset-0 bg-[#F8F9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90">
                                    <circle cx="64" cy="64" r="60" stroke="#374e86" strokeWidth="2" strokeOpacity="0.05" fill="none" />
                                    <motion.circle
                                        cx="64" cy="64" r="60"
                                        stroke="#bcb5ff" strokeWidth="4" fill="none"
                                        strokeDasharray="377" strokeDashoffset="377" strokeLinecap="round"
                                        whileInView={{ strokeDashoffset: 377 - (377 * 0.92) }}
                                        viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }}
                                    />
                                </svg>
                                <span className="absolute font-massive text-4xl text-[#374e86]">92%</span>
                            </div>
                            <p className="font-sans-body font-bold text-lg text-[#374e86]">Tasa de Asistencia</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Metrics;