'use client';
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Configuración del resorte: un poco más suave para que se sienta más "líquido"
    const springConfig = { damping: 30, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            // Restamos 16px porque el cursor ahora mide 32px (w-8 h-8)
            // Esto asegura que el centro de la bolita esté en la punta del mouse.
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                // Clases actualizadas:
                // w-8 h-8: Tamaño un poco más grande (32px)
                // border-2 border-[#8FA89B]: Borde verde sólido
                // bg-[#8FA89B]/20: Fondo verde al 20% de opacidad (semitransparente)
                // backdrop-blur-sm: Un ligero desenfoque detrás para un efecto de cristal/burbuja
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#8FA89B] bg-[#8FA89B]/20 backdrop-blur-sm pointer-events-none z-[9999] hidden lg:block shadow-[0_0_15px_rgba(143,168,155,0.3)]"
                style={{ x: cursorXSpring, y: cursorYSpring }}
            />
            {/* Mantenemos el ruido de fondo si lo deseas */}
            <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.035] bg-noise mix-blend-overlay"></div>
        </>
    );
};

export default CustomCursor;