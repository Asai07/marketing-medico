'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, MousePointerClick, Lightbulb, Target, Megaphone, PenTool } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

// Data de servicios - Mantenemos la misma estructura
const servicesData = [
    {
        id: "01",
        icon: MousePointerClick,
        title: "Publicidad de Respuesta Directa",
        description: "Campañas diseñadas para generar citas, no solo clics. Segmentación láser en pacientes de alto valor.",
        tags: ["Meta Ads", "Google Ads", "Retargeting"],
        highlight: "Resultados Medibles"
    },
    {
        id: "02",
        icon: Palette,
        title: "Diseño Web y Landings Éticas",
        description: "Sitios que convierten visitantes en pacientes, respetando la ética médica y transmitiendo confianza profesional.",
        tags: ["UX Médico", "Conversión CRO", "Mobile First"],
        highlight: "Confianza Digital"
    },
    {
        id: "03",
        icon: Target,
        title: "Estrategia de Captación Local",
        description: "Domina tu zona geográfica. Hacemos que tu clínica sea la opción #1 para pacientes cercanos.",
        tags: ["SEO Local", "Google Maps", "Geo-fencing"],
        highlight: "Dominio Zonal"
    },
    {
        id: "04",
        icon: PenTool,
        title: "Creación de Contenido Clínico",
        description: "Contenido educativo que posiciona tu autoridad sin ser 'vendedor'. Guiones, producción y edición.",
        tags: ["Video Marketing", "Guiones Médicos", "Reels/TikTok"],
        highlight: "Autoridad Visual"
    },
    {
        id: "05",
        icon: Lightbulb,
        title: "Automatización de Citas",
        description: "Sistemas que nutren prospectos y confirman citas automáticamente, liberando a tu recepción.",
        tags: ["CRM Médico", "Email/SMS Flow", "Chatbots IA"],
        highlight: "Eficiencia 24/7"
    },
    {
        id: "06",
        icon: Megaphone,
        title: "Consultoría de Crecimiento",
        description: "Auditoría de tus procesos actuales y hoja de ruta clara para escalar tu facturación mes a mes.",
        tags: ["Auditoría", "Estrategia Trimestral", "KPIs Clínicos"],
        highlight: "Visión Estratégica"
    }
];

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        // Fondo y texto base actualizados a la nueva paleta
        <section ref={containerRef} className="relative py-24 md:py-32 px-4 md:px-12 bg-[#F8F9FF] text-[#374e86] overflow-hidden">
            {/* Patrón de fondo sutil en Azul Profundo */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #374e86 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-[#374e86]/10 pb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-10 bg-[#bcb5ff]"></div>
                            <span className="font-sans-body text-xs font-bold uppercase tracking-[0.25em] text-[#374e86]/70">
                                Soluciones Integrales
                            </span>
                        </div>
                        <h2 className="font-serif-display text-5xl md:text-7xl text-[#374e86] leading-[1.05] tracking-tight">
                            Sistema Operativo <br />
                            {/* Gradiente del texto destacado: de Violeta a Azul Profundo */}
                            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] via-[#95b2ed] to-[#374e86]">
                                para tu crecimiento.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-4 text-right md:max-w-md"
                    >
                        <p className="font-sans-body text-lg font-medium text-[#374e86]/80 leading-relaxed">
                            No vendemos "servicios sueltos". Implementamos el ecosistema digital exacto que tu clínica necesita para escalar de forma predecible.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    style={{ y: yParallax }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} index={index + 1} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;