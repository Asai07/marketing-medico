'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const LivingBlobs = () => {
    const blobVariants = (index) => ({
        animate: {
            x: [0, Math.random() * 400 - 200, Math.random() * -400 + 200, 0],
            y: [0, Math.random() * 300 - 150, Math.random() * -300 + 150, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            rotate: [0, 180, 360, 0],
            transition: {
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
            },
        },
    });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#F8F9FF]">

            {/* OPTIMIZACIÓN 1: Ruido sin mix-blend-mode complejo */}
            <div
                className="absolute inset-0 opacity-[0.04] z-20" // Quitamos mix-blend-overlay
                style={{
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/noise-lines.png")`,
                    backgroundRepeat: 'repeat'
                }}
            ></div>

            {/* OPTIMIZACIÓN 2: Blobs con 'will-change-transform', 'transform-gpu' y blur reducido */}

            {/* Blob 1: Violeta */}
            <motion.div
                variants={blobVariants(1)}
                animate="animate"
                className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#bcb5ff]/40 blur-[60px] mix-blend-multiply will-change-transform transform-gpu"
            />

            {/* Blob 2: Azul Cielo */}
            <motion.div
                variants={blobVariants(2)}
                animate="animate"
                className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#95b2ed]/40 blur-[50px] mix-blend-multiply will-change-transform transform-gpu"
            />

            {/* Blob 3: Lima Eléctrico */}
            <motion.div
                variants={blobVariants(3)}
                animate="animate"
                className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-[#e7f1ad]/50 blur-[50px] mix-blend-multiply will-change-transform transform-gpu"
            />

            {/* Blob 4: Azul Profundo (Reducido) */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 30, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute top-[30%] left-[50%] w-[250px] h-[250px] rounded-full bg-[#374e86]/10 blur-[40px] mix-blend-multiply will-change-transform transform-gpu"
            />
        </div>
    );
};

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="relative flex-grow flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 min-h-screen z-10 overflow-hidden">

            {/* AQUI INSERTAMOS EL NUEVO FONDO VIVO */}
            <LivingBlobs />

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                <div className="lg:col-span-7">
                    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>

                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-[#95b2ed]"></div>
                            <span className="font-sans-body text-xs font-bold uppercase tracking-[0.2em] text-[#374e86]/70">
                                Marketing para médicos
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="font-serif-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] mb-6 text-[#374e86]">
                            Tu consulta merece <br />
                            <span className="relative inline-block text-[#bcb5ff] font-normal italic">
                                excelencia
                                <svg className="absolute -bottom-2 left-0 w-full h-[0.4em] pointer-events-none" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M2 7 Q 100 12 198 7"
                                        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                                    />
                                </svg>
                            </span> y pacientes.
                        </motion.h1>

                        <motion.p variants={itemVariants} className="font-sans-body text-lg md:text-xl text-[#374e86]/80 max-w-xl leading-relaxed mb-8 font-semibold">
                            Implementamos sistemas de atracción que llenan tu agenda con pacientes calificados. Deja de perseguir prospectos, haz que ellos te encuentren a ti.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
                            <button className="font-sans-body group flex items-center justify-center gap-4 bg-[#374e86] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#bcb5ff] hover:text-[#374e86] transition-all duration-500 shadow-2xl shadow-[#374e86]/20 hover:scale-105">
                                Aumentar mis Pacientes
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="font-sans-body flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-[#374e86] border border-[#374e86]/20 hover:border-[#374e86] transition-all duration-300 bg-transparent">
                                Ver Casos de Éxito
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
                    <div className="absolute top-10 -right-10 w-full h-full border border-[#374e86]/10 rounded-t-[10rem] rounded-b-[2rem] z-0"></div>

                    <motion.div
                        style={{ y: yParallax }}
                        className="relative w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-[#bcb5ff]/20 z-10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                            alt="Doctora Estética"
                            fill // Ocupa todo el contenedor padre
                            priority // ¡CRÍTICO! Carga inmediata
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw" // Ayuda a descargar la versión ligera en móvil
                        />
                        <div className="absolute inset-0 bg-[#bcb5ff]/10 mix-blend-multiply"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="absolute bottom-20 -left-12 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-[220px]"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#e7f1ad] animate-pulse"></div>
                            <span className="text-[10px] uppercase tracking-widest text-[#374e86]/50 font-bold">Agenda Llena</span>
                        </div>
                        <p className="font-serif-display font-bold text-4xl text-[#374e86] mb-1 italic">+45%</p>
                        <p className="font-sans-body text-xs text-[#374e86]/80 uppercase tracking-wider leading-tight font-semibold">
                            Citas calificadas primer mes.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;