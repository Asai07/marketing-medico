'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    if (pathname === '/links') return null;

    const navLinks = [
        { name: "Soluciones", href: "/soluciones" },
        { name: "Nosotros", href: "/sobre-nosotros" },
        { name: "Casos de Éxito", href: "/casos" }
    ];

    return (
        <>
            <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg shadow-[#374e86]/5 w-full max-w-6xl px-5 py-2 border border-white/30 flex items-center h-[60px]">
                    {/* 1. LOGO */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="flex items-center gap-1 z-50 group">
                            <span className="text-xl md:text-2xl font-massive font-bold tracking-tight text-[#374e86]">
                                MADA
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e7f1ad] mt-2 group-hover:scale-150 transition-transform duration-300"></span>
                        </Link>
                    </div>
                    {/* 2. MENÚ DESKTOP */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-sans-body font-bold text-[#374e86] hover:text-[#bcb5ff] transition-colors relative group py-1"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#bcb5ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                            </Link>
                        ))}
                    </div>
                    {/* 3. CTA DERECHA */}
                    <div className="flex-1 flex justify-end">
                        <div className="hidden md:block">
                            <Link href="/contacto" className="group flex items-center gap-3 cursor-pointer">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#374e86] group-hover:text-[#bcb5ff] transition-colors">
                                    Hablemos
                                </span>
                                <div className="w-9 h-9 rounded-full bg-[#bcb5ff] group-hover:bg-[#374e86] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 shadow-sm group-hover:shadow-md">
                                    <ArrowUpRight size={18} strokeWidth={2.5} />
                                </div>
                            </Link>
                        </div>

                        <button
                            className="md:hidden p-2 text-[#374e86] bg-[#F8F9FF]/50 rounded-full hover:bg-[#bcb5ff]/20 transition-colors border border-[#374e86]/5"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </div>
            </nav>

            {/* --- MENÚ MÓVIL --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#F8F9FF] z-40 flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="text-4xl font-serif-display text-[#374e86] hover:text-[#bcb5ff] transition-colors block"
                                >
                                    {link.name}
                                </motion.span>
                            </Link>
                        ))}

                        <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 bg-[#e7f1ad] text-[#374e86] px-8 py-3 rounded-full text-lg font-bold flex items-center gap-2 shadow-xl shadow-[#e7f1ad]/20"
                            >
                                Hablemos <ArrowUpRight size={20} />
                            </motion.button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;