'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    MousePointerClick, Palette, Target, Lightbulb,
    Check, ArrowRight, Layers, Zap,
    XCircle, CheckCircle2, ChevronDown
} from 'lucide-react';

// --- DATA (Sin cambios) ---
const solutionsDeepDive = [
    {
        id: "traffic",
        title: "Adquisición de Pacientes",
        subtitle: "Publicidad Médica (PPC)",
        description: "Dejamos de buscar 'likes'. Configuramos campañas de conversión en Meta y Google Ads para llenar tu agenda de pacientes calificados.",
        icon: MousePointerClick,
        deliverables: [
            "Meta Ads (Facebook/Instagram) Segmentados",
            "Google Search (Intención de compra)",
            "Remarketing para recuperar pacientes",
            "Copywriting con Normativa COFEPRIS"
        ],
        tech: "Meta Pixel API + Google Tag Manager"
    },
    {
        id: "web",
        title: "Infraestructura Digital",
        subtitle: "Web Médica & Embudos",
        description: "Tu web es tu consultorio digital. Diseñamos sitios rápidos que transmiten autoridad y convierten visitas en citas agendadas.",
        icon: Palette,
        deliverables: [
            "Diseño UI/UX de Alta Confianza",
            "Landing Pages por Tratamiento",
            "Velocidad de Carga < 1.5s",
            "Integración con Doctoralia/Calendly"
        ],
        tech: "Next.js + Tailwind CSS"
    },
    {
        id: "local",
        title: "Posicionamiento Local",
        subtitle: "SEO & Google Maps",
        description: "Sé la primera opción cuando busquen tu especialidad en tu ciudad. Optimizamos tu presencia para dominar el mapa local.",
        icon: Target,
        deliverables: [
            "Optimización Perfil Google (GMB)",
            "Gestión de Reputación y Reseñas",
            "Keywords: 'Especialista en [Ciudad]'",
            "Alta en Directorios Médicos"
        ],
        tech: "Google Maps API + Local Schema"
    },
    {
        id: "automation",
        title: "Sistemas de Venta",
        subtitle: "CRM & Automatización",
        description: "Tu recepción no trabaja 24/7, nuestro sistema sí. Automatizamos confirmaciones y seguimiento para reducir el ausentismo.",
        icon: Lightbulb,
        deliverables: [
            "Chatbots de Filtro Inicial",
            "Seguimiento WhatsApp Automático",
            "Recordatorios Anti-Ausentismo",
            "Base de Datos de Pacientes (CRM)"
        ],
        tech: "WhatsApp API + CRM MADA"
    }
];

// --- 1. HERO ---
const SolutionsHero = () => {
    return (
        <section className="relative pt-40 pb-20 px-6 md:px-12 bg-[#F8F9FF] overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-6 inline-block px-4 py-2 border border-[#bcb5ff]/30 rounded-full">
                        Catálogo de Servicios
                    </span>
                    <h1 className="font-massive font-semibold text-5xl md:text-8xl text-[#374e86] mb-8 tracking-tight">
                        ECOSISTEMA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] via-[#95b2ed] to-[#374e86]">INTEGRAL.</span>
                    </h1>
                    <p className="font-sans-body text-lg md:text-xl text-[#374e86]/70 max-w-2xl mx-auto leading-relaxed">
                        Infraestructura completa de adquisición de pacientes diseñada para escalar consultorios privados y clínicas de especialidad.
                    </p>
                </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#bcb5ff]/10 to-[#e7f1ad]/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

// --- 2. LISTA DE SERVICIOS (MODIFICADO CON PUENTE AL FINAL) ---
const ServicesList = () => {
    return (
        <section className="relative px-4 md:px-12 bg-[#F0F2F9] overflow-visible pb-20"> {/* pb-20 da aire al final */}

            <div className="max-w-[1200px] mx-auto relative">

                {/* 2.1 HEADER */}
                <div className="py-16 text-center max-w-3xl mx-auto mix-blend-multiply relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif-display font-bold text-4xl md:text-6xl text-[#374e86] mb-6 leading-tight">
                            Infraestructura de <br />
                            Marketing Médico.
                        </h2>
                        <p className="font-sans-body text-xl text-[#374e86]/80 leading-relaxed font-medium">
                            Construimos una maquinaria digital donde cada pieza cumple una función
                            <span className="relative inline-block mx-2 font-bold text-[#374e86]">
                                ESTRATÉGICA
                                <svg className="absolute w-[110%] h-[15px] -bottom-1 -left-[5%] -z-10 text-[#e7f1ad]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                            para tu facturación y captación de pacientes.
                        </p>
                    </motion.div>
                </div>

                {/* 2.2 TARJETAS STICKY */}
                <div className="relative z-10 flex flex-col mb-12"> {/* mb-12 separa las cartas del puente */}
                    {solutionsDeepDive.map((item, index) => (
                        <StickyServiceCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* --- 2.3 PUENTE / GAP FILLER (NUEVO) --- */}
                {/* Este bloque aparece al terminar de scrollear las tarjetas */}
                <div className="relative z-0 pt-12 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <p className="font-serif-display text-2xl md:text-3xl text-[#374e86] mb-4">
                            Todo esto funciona en <span className="italic text-[#bcb5ff]">sincronía.</span>
                        </p>
                        <div className="flex flex-col items-center gap-2 opacity-50">
                            <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#374e86]">
                                Ver Impacto Financiero
                            </span>
                            <ChevronDown className="animate-bounce text-[#374e86]" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

// Componente de Tarjeta Individual (Ajuste de altura mantenido)
const StickyServiceCard = ({ item, index }) => {
    // top ajustado para que suban más y tapen el texto de arriba
    const stickyTop = `calc(110px + ${index * 25}px)`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ top: stickyTop }}
            className="sticky mb-12 last:mb-0"
        >
            <div className="bg-white rounded-[3rem] border border-[#374e86]/10 shadow-2xl shadow-[#374e86]/10 overflow-hidden relative">

                <div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">

                    {/* Contenido Texto */}
                    <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-[#F8F9FF] text-[#374e86] border border-[#374e86]/5">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <span className="font-massive text-4xl text-[#bcb5ff]/30 font-bold select-none">
                                0{index + 1}
                            </span>
                        </div>

                        <h3 className="font-serif-display font-bold text-3xl md:text-4xl text-[#374e86] mb-2">
                            {item.title}
                        </h3>
                        <p className="font-sans-body text-xs font-bold uppercase tracking-wider text-[#bcb5ff] mb-6">
                            {item.subtitle}
                        </p>

                        <p className="font-sans-body text-lg text-[#374e86]/70 leading-relaxed mb-8 border-l-2 border-[#e7f1ad] pl-6">
                            {item.description}
                        </p>

                        <div className="bg-[#F8F9FF] rounded-2xl p-6 md:p-8">
                            <h4 className="font-sans-body font-bold text-[#374e86] text-sm mb-4 flex items-center gap-2">
                                <Layers size={16} className="text-[#e7f1ad]" />
                                Incluye:
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                {item.deliverables.map((deli, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#374e86]/80 font-sans-body text-sm">
                                        <Check size={16} className="text-[#bcb5ff] mt-0.5 shrink-0" />
                                        {deli}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Visual Abstracto */}
                    <div className="lg:w-[45%] bg-[#F8F9FF] relative min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#374e86]/5 overflow-hidden group">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-[#bcb5ff]/30 to-[#e7f1ad]/30 rounded-full blur-[60px]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-massive text-[120px] leading-none text-[#374e86]/5 rotate-90 lg:rotate-0 select-none whitespace-nowrap">
                                {item.id.toUpperCase()}
                            </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                                <item.icon size={64} strokeWidth={1} className="text-[#374e86]" />
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 text-center">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-[#374e86]/5 shadow-sm">
                                <Zap size={12} className="text-[#e7f1ad] fill-current" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#374e86]/60">
                                    {item.tech}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- 3. COMPARATIVA ---
const Comparison = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#374e86] text-white overflow-hidden relative z-20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <h2 className="font-serif-display font-bold text-4xl md:text-5xl mb-16">
                    ¿Gasto o Inversión?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Opción Barata */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left opacity-60 hover:opacity-100 transition-opacity">
                        <h3 className="font-sans-body font-bold text-xl mb-4 text-[#bcb5ff]">Freelancer / Sobrino</h3>
                        <ul className="space-y-4 font-sans-body text-sm text-white/70">
                            <li className="flex gap-3"><XCircle size={18} /> Diseños sin estrategia médica</li>
                            <li className="flex gap-3"><XCircle size={18} /> Web lenta que pierde pacientes</li>
                            <li className="flex gap-3"><XCircle size={18} /> Sin reportes claros de ROI</li>
                        </ul>
                    </div>

                    {/* Opción MADA */}
                    <div className="p-8 rounded-3xl bg-[#F8F9FF] text-[#374e86] text-left relative transform scale-105 shadow-2xl shadow-[#e7f1ad]/20">
                        <div className="absolute top-0 right-0 bg-[#e7f1ad] text-[#374e86] text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                            RECOMENDADO
                        </div>
                        <h3 className="font-sans-body font-bold text-xl mb-4">Ecosistema MADA</h3>
                        <ul className="space-y-4 font-sans-body text-sm font-medium">
                            <li className="flex gap-3"><CheckCircle2 size={18} className="text-[#bcb5ff]" /> Diseño de Alta Conversión</li>
                            <li className="flex gap-3"><CheckCircle2 size={18} className="text-[#bcb5ff]" /> Infraestructura Tecnológica</li>
                            <li className="flex gap-3"><CheckCircle2 size={18} className="text-[#bcb5ff]" /> Reportes Auditables Mensuales</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 4. CTA ---
const FinalCTA = () => {
    return (
        <section className="py-32 px-6 text-center bg-[#F8F9FF] relative z-20">
            <h2 className="font-massive font-bold text-5xl md:text-7xl text-[#374e86] mb-8">
                AGENDA TU <br />
                <span className="text-[#bcb5ff]">DIAGNÓSTICO.</span>
            </h2>
            <button className="bg-[#374e86] text-white font-bold font-sans-body py-4 px-10 rounded-full hover:bg-[#bcb5ff] hover:text-[#374e86] transition-all duration-300 shadow-xl shadow-[#374e86]/20 flex items-center gap-3 mx-auto">
                Consultar Disponibilidad
                <ArrowRight size={20} />
            </button>
        </section>
    );
};

const SolutionsPage = () => {
    return (
        <main className="bg-[#F8F9FF] min-h-screen">
            <SolutionsHero />
            <ServicesList />
            <Comparison />
            <FinalCTA />
        </main>
    );
};

export default SolutionsPage;