'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe, Instagram, MessageCircle, FileText,
    ArrowUpRight, MonitorPlay
} from 'lucide-react';
import Link from 'next/link';

const LinksPage = () => {
    // Lista de enlaces estratégicos
    const links = [
        {
            title: "Diagnóstico Gratuito",
            subtitle: "Aplica para trabajar con nosotros",
            icon: FileText,
            url: "/contacto",
            highlight: true // Destacado
        },
        {
            title: "Caso de Estudio: Dr. Pedro",
            subtitle: "Cómo escalamos una clínica en 90 días",
            icon: MonitorPlay,
            url: "/casos",
            highlight: false
        },
        {
            title: "Nuestro Ecosistema",
            subtitle: "Servicios y Soluciones",
            icon: Globe,
            url: "/soluciones",
            highlight: false
        },
        {
            title: "WhatsApp Directo",
            subtitle: "Hablemos ahora mismo",
            icon: MessageCircle,
            url: "https://wa.me/521MONTERREY", // Pon tu número real aquí
            highlight: false
        }
    ];

    return (
        <main className="min-h-screen bg-[#F8F9FF] flex flex-col items-center py-20 px-6 relative overflow-hidden">

            {/* Fondo Animado Simple */}
            <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-[#bcb5ff]/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px] bg-[#e7f1ad]/20 rounded-full blur-[80px]" />

            {/* Contenido Central */}
            <div className="max-w-md w-full relative z-10 text-center">

                {/* Avatar / Logo */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-24 h-24 mx-auto bg-white rounded-full p-1 shadow-xl mb-6 border border-[#374e86]/5"
                >
                    <div className="w-full h-full bg-[#374e86] rounded-full flex items-center justify-center">
                        <span className="font-massive text-3xl text-white">M.</span>
                    </div>
                </motion.div>

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-massive text-3xl text-[#374e86] mb-2"
                >
                    MADA MARKETING
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="font-sans-body text-sm text-[#374e86]/60 mb-10"
                >
                    Growth Partner para Médicos Especialistas.
                </motion.p>

                {/* Botones */}
                <div className="space-y-4">
                    {links.map((link, i) => (
                        <LinkButton key={i} link={link} index={i} />
                    ))}
                </div>

                {/* Footer Social */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex justify-center gap-6"
                >
                    <a href="https://instagram.com" target="_blank" className="text-[#374e86]/40 hover:text-[#e7f1ad] transition-colors">
                        <Instagram size={24} />
                    </a>
                    <Link href="/" className="text-[#374e86]/40 hover:text-[#e7f1ad] transition-colors">
                        <Globe size={24} />
                    </Link>
                </motion.div>

            </div>
        </main>
    );
};

const LinkButton = ({ link, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.1) }}
        >
            <Link href={link.url} className="group block">
                <div className={`
                    relative p-4 rounded-2xl flex items-center gap-4 transition-all duration-300
                    ${link.highlight
                        ? 'bg-[#374e86] text-white shadow-xl shadow-[#374e86]/20 border border-transparent hover:scale-[1.02]'
                        : 'bg-white text-[#374e86] shadow-sm border border-[#374e86]/5 hover:border-[#bcb5ff] hover:shadow-md'
                    }
                `}>
                    <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center shrink-0
                        ${link.highlight ? 'bg-white/10' : 'bg-[#F8F9FF]'}
                    `}>
                        <link.icon size={20} />
                    </div>

                    <div className="text-left flex-1">
                        <h3 className="font-bold text-sm leading-tight">{link.title}</h3>
                        <p className={`text-xs ${link.highlight ? 'text-white/60' : 'text-[#374e86]/50'}`}>
                            {link.subtitle}
                        </p>
                    </div>

                    <ArrowUpRight size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${link.highlight ? 'text-[#e7f1ad]' : 'text-[#bcb5ff]'}`} />
                </div>
            </Link>
        </motion.div>
    );
};

export default LinksPage;