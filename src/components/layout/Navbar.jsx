'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// 1. IMPORTAMOS usePathname
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. OBTENEMOS LA RUTA ACTUAL
    const pathname = usePathname();

    // 3. SI ESTAMOS EN '/links', NO MOSTRAMOS EL NAVBAR
    if (pathname === '/links') return null;

    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    const navLinks = [
        { name: "Soluciones", href: "/soluciones" },
        { name: "Nosotros", href: "/sobre-nosotros" },
        { name: "Casos de Éxito", href: "/casos" } // Actualicé este link por si acaso
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-[#F8F9FF]/90 backdrop-blur-md border-b border-[#374e86]/5">

                {/* LOGO */}
                <Link href="/" className="text-3xl font-massive font-medium tracking-tight z-50 text-[#374e86]">
                    MADA
                    <span className="text-[#e7f1ad]">.</span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex space-x-10 items-center text-sm font-sans-body font-semibold tracking-wide text-[#374e86]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-[#bcb5ff] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#bcb5ff] transition-all group-hover:w-full"></span>
                        </Link>
                    ))}

                    <Link href="/contacto">
                        <button className="font-sans-body border border-[#374e86] text-[#374e86] px-6 py-2.5 rounded-full hover:bg-[#374e86] hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-bold shadow-lg shadow-[#374e86]/5 hover:shadow-[#bcb5ff]/20">
                            Hablemos
                        </button>
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button className="md:hidden z-50 p-2 relative text-[#374e86]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-[#F8F9FF] z-40 flex flex-col justify-center items-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
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
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-6 bg-[#374e86] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest shadow-xl shadow-[#374e86]/20"
                                >
                                    Hablemos
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;