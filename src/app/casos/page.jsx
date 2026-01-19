'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, TrendingUp, Activity, CheckCircle2,
    Quote, BarChart3, Users, Calendar
} from 'lucide-react';

const CaseStudyPage = () => {
    return (
        <main className="bg-[#F8F9FF] min-h-screen pt-32 pb-20 overflow-hidden">

            {/* 1. HERO: EL RESULTADO CLAVE */}
            <section className="px-6 md:px-12 mb-20">
                <div className="max-w-[1200px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-6 inline-block px-4 py-2 border border-[#bcb5ff]/30 rounded-full">
                            Caso Clínico
                        </span>
                        <h1 className="font-massive font-semibold text-5xl md:text-8xl text-[#374e86] mb-8 leading-[0.9]">
                            EL CASO DEL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] to-[#374e86]">DR. PEDRO.</span>
                        </h1>
                        <p className="font-sans-body text-xl text-[#374e86]/70 max-w-2xl mx-auto leading-relaxed">
                            Cómo transformamos una agenda dependiente de referidos en un sistema automatizado de pacientes privados en 90 días.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS BAR (LOS NÚMEROS NO MIENTEN) */}
            <section className="px-4 md:px-12 mb-24">
                <div className="max-w-[1000px] mx-auto bg-[#374e86] rounded-[3rem] p-8 md:p-12 text-white shadow-2xl shadow-[#374e86]/20 relative overflow-hidden">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#bcb5ff]/10 rounded-full blur-[80px]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center md:text-left">
                        <div>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-[#bcb5ff] mb-2">
                                <TrendingUp size={20} />
                                <span className="text-xs font-bold uppercase tracking-widest">Retorno (ROI)</span>
                            </div>
                            <h3 className="font-massive text-6xl md:text-7xl">4.5x</h3>
                            <p className="text-white/60 text-sm">Por cada $1 invertido</p>
                        </div>
                        <div className="md:border-l md:border-white/10 md:pl-12">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-[#e7f1ad] mb-2">
                                <Users size={20} />
                                <span className="text-xs font-bold uppercase tracking-widest">Pacientes Nuevos</span>
                            </div>
                            <h3 className="font-massive text-6xl md:text-7xl text-[#e7f1ad]">+45</h3>
                            <p className="text-white/60 text-sm">Citas calificadas / mes</p>
                        </div>
                        <div className="md:border-l md:border-white/10 md:pl-12">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-[#bcb5ff] mb-2">
                                <Calendar size={20} />
                                <span className="text-xs font-bold uppercase tracking-widest">Tiempo</span>
                            </div>
                            <h3 className="font-massive text-6xl md:text-7xl">90</h3>
                            <p className="text-white/60 text-sm">Días para consolidar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HISTORIA CLÍNICA (EL ANTES Y DESPUÉS) */}
            <section className="px-6 md:px-12 mb-24">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Texto Historia */}
                    <div>
                        <h2 className="font-serif-display font-bold text-4xl text-[#374e86] mb-8">
                            Historial Clínico.
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-3xl border border-[#374e86]/5 shadow-sm">
                                <h3 className="text-red-400 font-bold font-sans-body uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                                    <Activity size={16} /> Diagnóstico Inicial (El Problema)
                                </h3>
                                <p className="text-[#374e86]/70 leading-relaxed">
                                    El Dr. Pedro es un especialista excelente, pero su consulta era "invisible" digitalmente. Dependía 100% de aseguradoras (pagos bajos/tardíos) y referidos de boca en boca. Su sitio web cargaba lento y no generaba confianza.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-3xl border border-[#374e86]/5 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#e7f1ad]/20 rounded-bl-[4rem]" />
                                <h3 className="text-green-600 font-bold font-sans-body uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                                    <CheckCircle2 size={16} /> Tratamiento MADA (La Solución)
                                </h3>
                                <p className="text-[#374e86]/70 leading-relaxed mb-4">
                                    Implementamos el protocolo "Private Practice Growth":
                                </p>
                                <ul className="space-y-2">
                                    <ListItem text="Rediseño Web de Alta Autoridad (Next.js)" />
                                    <ListItem text="Campaña Google Search (Intención de compra)" />
                                    <ListItem text="Automatización de WhatsApp para confirmaciones" />
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Visual (Mockup) */}
                    <div className="relative h-[600px] bg-[#F0F2F9] rounded-[3rem] overflow-hidden border border-[#374e86]/5 group">
                        {/* Aquí iría una captura de la web del Dr. Pedro o una foto genérica de doctor */}
                        <img
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2664&auto=format&fit=crop"
                            alt="Dr Pedro Resultados"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Overlay Gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#374e86] via-transparent to-transparent opacity-60" />

                        {/* Card Flotante */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#e7f1ad] rounded-full flex items-center justify-center text-[#374e86]">
                                    <BarChart3 size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#374e86]/50">Estatus Actual</p>
                                    <p className="font-serif-display text-xl text-[#374e86]">Agenda Saturada (Lista de Espera)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. TESTIMONIO (PRUEBA SOCIAL) */}
            <section className="px-6 md:px-12 mb-24">
                <div className="max-w-[1000px] mx-auto text-center relative">
                    <Quote className="absolute top-0 left-0 text-[#bcb5ff]/20 w-32 h-32 -translate-x-10 -translate-y-10" />

                    <h3 className="font-serif-display text-3xl md:text-5xl text-[#374e86] leading-tight mb-8 relative z-10">
                        "En 10 años de práctica, nunca había tenido control real sobre mi flujo de pacientes hasta que trabajé con MADA. <span className="text-[#bcb5ff] italic">Ya no persigo pacientes, ellos me encuentran.</span>"
                    </h3>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-[#374e86] overflow-hidden">
                            {/* Placeholder foto Dr */}
                            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop" alt="Dr Pedro" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-[#374e86] font-sans-body">Dr. Pedro</p>
                            <p className="text-sm text-[#374e86]/50 uppercase tracking-widest font-bold">Cirujano Especialista</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA: REPLICABILIDAD (Más profesional y seguro) */}
            <section className="text-center px-6 pb-32">
                <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-12 border border-[#374e86]/5 shadow-2xl shadow-[#374e86]/5 relative overflow-hidden">

                    {/* Fondo decorativo sutil */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#bcb5ff] via-[#e7f1ad] to-[#374e86]" />
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#e7f1ad]/10 rounded-full blur-3xl" />

                    <h2 className="font-massive font-bold text-4xl md:text-6xl text-[#374e86] mb-6 leading-tight">
                        ¿REPLICAMOS ESTOS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] to-[#374e86]">RESULTADOS?</span>
                    </h2>

                    <p className="font-sans-body text-[#374e86]/70 text-lg mb-10 leading-relaxed">
                        El éxito del Dr. Pedro no fue casualidad; fue <strong>metodología</strong>.
                        Agenda una sesión breve para analizar si tu consultorio cumple con los requisitos para implementar este mismo sistema.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <p className="text-xs font-bold text-[#374e86]/40 uppercase tracking-widest mt-4 md:mt-0">
                            Sin compromiso de compra
                        </p>
                        <a href="/contacto" className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#374e86] text-white font-bold font-sans-body py-4 px-10 rounded-full hover:bg-[#bcb5ff] hover:text-[#374e86] transition-all duration-300 shadow-xl shadow-[#374e86]/20">
                            Solicitar Diagnóstico <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};

// Componente auxiliar para lista
const ListItem = ({ text }) => (
    <li className="flex items-start gap-3 text-[#374e86]/80 font-sans-body text-sm">
        <CheckCircle2 size={16} className="text-[#bcb5ff] mt-1 shrink-0" />
        {text}
    </li>
);

export default CaseStudyPage;