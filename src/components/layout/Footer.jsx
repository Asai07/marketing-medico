'use client';

import React from 'react';
import Link from 'next/link';
// 1. IMPORTAMOS usePathname
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    // 2. OBTENEMOS LA RUTA
    const pathname = usePathname();

    // 3. SI ESTAMOS EN '/links', NO RENDERIZAMOS NADA
    if (pathname === '/links') return null;

    return (
        <footer className="bg-[#374e86] text-[#F8F9FF] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">

            {/* DECORACIÓN: Luz ambiental Violeta */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#bcb5ff]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col justify-between min-h-[60vh]">

                {/* 1. SECCIÓN DE CONVERSIÓN (CTA) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24 border-b border-white/10 pb-16">
                    <div className="max-w-3xl">
                        <h2 className="font-massive font-semibold text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter mb-8 text-white">
                            ¿LISTO PARA <br />
                            <span className="text-[#e7f1ad]">ESCALAR?</span>
                        </h2>
                        <p className="font-sans-body text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
                            Deja de depender de referidos. Construye un sistema predecible de pacientes calificados hoy mismo.
                        </p>
                    </div>

                    <Link href="/contacto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-6 bg-[#F8F9FF] text-[#374e86] rounded-full flex items-center gap-4 font-bold uppercase tracking-widest text-sm hover:bg-[#bcb5ff] transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            Agendar Auditoría
                            <div className="w-8 h-8 bg-[#374e86] rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#374e86] transition-colors">
                                <ArrowUpRight size={16} />
                            </div>
                        </motion.button>
                    </Link>
                </div>

                {/* 2. GRID DE ENLACES E INFO */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">

                    {/* Brand Info */}
                    <div className="md:col-span-2 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="font-massive text-3xl font-bold mb-6 block text-[#e7f1ad]">
                                MADA.
                            </Link>
                            <p className="text-white/40 text-sm max-w-xs font-sans-body mb-8 leading-relaxed">
                                Growth Partner para clínicas y especialistas médicos que buscan excelencia digital y resultados auditables.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <SocialButton icon={Instagram} href="#" />
                            <SocialButton icon={Linkedin} href="#" />
                            <SocialButton icon={Mail} href="mailto:hola@somosmada.com" />
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-6">Explorar</h4>
                        <ul className="space-y-4 font-sans-body text-white/70 text-sm">
                            <li><Link href="/soluciones" className="hover:text-[#e7f1ad] transition-colors">Soluciones</Link></li>
                            <li><Link href="/sobre-nosotros" className="hover:text-[#e7f1ad] transition-colors">Nosotros</Link></li>
                            <li><Link href="/casos" className="hover:text-[#e7f1ad] transition-colors">Casos de Éxito</Link></li>
                        </ul>
                    </div>

                    {/* Contacto / Legal */}
                    <div>
                        <h4 className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-6">Contacto</h4>
                        <ul className="space-y-4 font-sans-body text-white/70 text-sm mb-8">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-1 text-[#bcb5ff]" />
                                <span>Monterrey, N.L.<br />Disponible Globalmente.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-[#bcb5ff]" />
                                <a href="mailto:hola@somosmada.com" className="hover:text-white transition-colors">hola@somosmada.com</a>
                            </li>
                        </ul>

                        <h4 className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-4">Legal</h4>
                        <ul className="space-y-2 font-sans-body text-white/40 text-xs">
                            <li>
                                <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
                                    Términos y Condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
                    <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-widest font-sans-body">
                        &copy; {new Date().getFullYear()} Mada Marketing Médico. Todos los derechos reservados.
                    </p>
                </div>

                {/* MARCA DE AGUA GIGANTE */}
                <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
                    <h1 className="font-massive text-[22vw] leading-none text-white tracking-tighter">MADA</h1>
                </div>

            </div>
        </footer>
    );
};

// Botón Social
const SocialButton = ({ icon: Icon, href }) => (
    <a href={href} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#bcb5ff] hover:border-[#bcb5ff] hover:text-[#374e86] transition-all duration-300">
        <Icon size={18} />
    </a>
);

export default Footer;