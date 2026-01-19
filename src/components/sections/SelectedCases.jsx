'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: "01",
        client: "Luminous Smile",
        service: "Diseño de Sonrisa",
        stat: "+120 Carillas",
        year: "2026",
        img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2600&auto=format&fit=crop"
    },
    {
        id: "02",
        client: "DermaCenter",
        service: "Acné & Cicatrices",
        stat: "Agenda Llena (3mo)",
        year: "2025",
        img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: "03",
        client: "Dra. Ana V.",
        service: "Ginecología Funcional",
        stat: "300% ROI",
        year: "2025",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
    },
    {
        id: "04",
        client: "Clínica Vital",
        service: "Traumatología",
        stat: "+45 Cirugías",
        year: "2025",
        img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2000&auto=format&fit=crop"
    }
];

const SelectedCases = () => {
    const [activeProject, setActiveProject] = useState(null);

    // Coordenadas del mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Física del resorte (Spring)
    const springConfig = { damping: 20, stiffness: 300 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX - 200);
        mouseY.set(e.clientY - 150);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            // CAMBIO: Fondo #F8F9FF
            className="relative bg-[#F8F9FF] py-24 md:py-32 px-4 md:px-12 overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto">

                {/* HEADER */}
                {/* CAMBIO: Bordes y textos en Azul Profundo #374e86 */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 pb-8 border-b border-[#374e86]/10">
                    <h2 className="font-massive font-semibold text-5xl md:text-8xl leading-[0.9] text-[#374e86]">
                        CASOS <br />
                        {/* CAMBIO: Acento Violeta #bcb5ff */}
                        <span className="text-[#bcb5ff]">SELECTOS.</span>
                    </h2>
                    <div className="text-right hidden md:block">
                        <p className="font-sans-body text-sm font-bold uppercase tracking-widest text-[#374e86]/40 mb-1">
                            Portafolio 2025-2026
                        </p>
                        <p className="font-serif-display text-xl text-[#374e86]">
                            Resultados reales, no vanidad.
                        </p>
                    </div>
                </div>

                {/* LISTA DE PROYECTOS */}
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectRow
                            key={index}
                            project={project}
                            index={index}
                            setActiveProject={setActiveProject}
                        />
                    ))}
                </div>

            </div>

            {/* IMAGEN FLOTANTE */}
            <AnimatePresence>
                {activeProject !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        style={{ x, y }}
                        className="fixed top-0 left-0 w-[400px] h-[300px] rounded-2xl overflow-hidden pointer-events-none z-50 hidden lg:block shadow-2xl shadow-[#374e86]/20"
                    >
                        <motion.div
                            key={projects[activeProject].id}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full" // Necesario para que fill funcione
                        >
                            <Image
                                src={projects[activeProject].img}
                                alt="Project Preview"
                                fill
                                className="object-cover"
                                sizes="400px"
                            />
                        </motion.div>

                        {/* CAMBIO: Overlay violeta/azul suave */}
                        <div className="absolute inset-0 bg-[#374e86]/20 mix-blend-multiply"></div>

                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                            {/* CAMBIO: Punto Lima (#e7f1ad) para destacar sobre la imagen */}
                            <div className="w-2 h-2 rounded-full bg-[#e7f1ad] animate-pulse"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#374e86]">
                                {projects[activeProject].stat}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

// COMPONENTE DE FILA
const ProjectRow = ({ project, index, setActiveProject }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            // CAMBIO: Hover Border Violeta (#bcb5ff)
            className="group relative border-b border-[#374e86]/10 py-8 md:py-12 cursor-pointer transition-colors duration-300 hover:border-[#bcb5ff]"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
        >
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 relative z-10">

                {/* Cliente */}
                <div className="md:w-1/3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-2 block md:hidden">
                        0{index + 1}
                    </span>
                    {/* CAMBIO: Hover Text Violeta */}
                    <h3 className="font-massive text-3xl md:text-5xl text-[#374e86] group-hover:text-[#bcb5ff] transition-colors duration-300">
                        {project.client}
                    </h3>
                </div>

                {/* Servicio */}
                <div className="hidden md:block md:w-1/3 text-center">
                    <p className="font-sans-body text-lg text-[#374e86]/60 group-hover:text-[#374e86] transition-colors">
                        {project.service}
                    </p>
                </div>

                {/* Año + Flecha */}
                <div className="w-full md:w-1/3 flex justify-between md:justify-end items-center gap-8">
                    <span className="font-sans-body text-[#374e86]/40 text-sm">{project.year}</span>
                    {/* CAMBIO: Flecha Hover Violeta */}
                    <div className="w-12 h-12 rounded-full border border-[#374e86]/10 flex items-center justify-center group-hover:bg-[#bcb5ff] group-hover:border-[#bcb5ff] transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-[#374e86] group-hover:text-white transition-colors" />
                    </div>
                </div>

            </div>

            {/* CAMBIO: Hover Background en Azul muy pálido/Blanco (#F0F4FF) */}
            <div className="absolute inset-0 bg-[#F0F4FF] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out -z-0"></div>
        </motion.div>
    );
};

export default SelectedCases;