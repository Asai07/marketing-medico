'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('hola@somosmada.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="bg-[#374E86] text-white px-6 md:px-12 pt-20 pb-10 relative overflow-hidden">

            {/* Ruido de fondo sutil */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* --- 1. TOP SECTION (Logo & Socials) --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-20 gap-8">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-1 group">
                        <span className="font-massive text-4xl md:text-5xl font-bold tracking-tight text-white">
                            MADA
                        </span>
                        <span className="w-3 h-3 rounded-full bg-[#E6F2A2] mt-3 group-hover:scale-150 transition-transform duration-300"></span>
                    </Link>

                    {/* Redes Sociales */}
                    <div className="flex gap-6 md:gap-10">
                        {['Instagram', 'LinkedIn', 'WhatsApp'].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                className="font-sans-body text-sm font-bold uppercase tracking-widest text-white/60 hover:text-[#BCB5FF] transition-colors flex items-center gap-1 group"
                            >
                                {social}
                                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- 2. MIDDLE SECTION (Interactive Email) --- */}
                <div className="mb-20">
                    <motion.div
                        onClick={handleCopy}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="group relative w-full border-t border-b border-white/20 py-16 md:py-24 cursor-pointer overflow-hidden"
                    >
                        {/* Fondo Hover animado */}
                        <div className="absolute inset-0 bg-[#E6F2A2] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />

                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 px-4">

                            {/* Texto */}
                            <div className="flex flex-col items-center md:items-start">
                                <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#BCB5FF] group-hover:text-[#374E86] mb-2 transition-colors">
                                    ¿Tienes un proyecto?
                                </span>
                                <h2 className="font-serif-display text-4xl md:text-7xl lg:text-8xl group-hover:text-[#374E86] transition-colors duration-300 text-center md:text-left">
                                    hola@somosmada.com
                                </h2>
                            </div>

                            {/* Botón Acción */}
                            <div className="w-16 h-16 rounded-full border border-white/30 group-hover:border-[#374E86]/30 flex items-center justify-center transition-colors">
                                <AnimatePresence mode='wait'>
                                    {copied ? (
                                        <motion.div
                                            key="check"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <Check size={24} className="text-[#374E86]" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="copy"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <Copy size={24} className="text-white group-hover:text-[#374E86] transition-colors" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* --- 3. BOTTOM SECTION (Reordenado) --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-white/40 text-[10px] md:text-xs font-sans-body uppercase tracking-widest font-medium">

                    {/* IZQUIERDA: Copyright */}
                    <p>&copy; {new Date().getFullYear()} MADA Marketing Médico.</p>

                    {/* CENTRO: Legal */}
                    <div className="flex gap-8">
                        <Link href="/politica" className="hover:text-white transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">
                            Términos y Condiciones
                        </Link>
                    </div>

                    {/* DERECHA: Ubicación + Crédito */}
                    <div className="flex items-center gap-4">
                        <p className="hidden md:block">Monterrey, MX.</p>

                        {/* Separador */}
                        <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />

                        <a
                            href="https://somosmada.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#E6F2A2] transition-colors duration-300"
                        >
                            Diseñado por: somosmada.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;