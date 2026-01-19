'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, tags, highlight, index }) => {
    // Formatear índice a dos dígitos
    const formattedIndex = index.toString().padStart(2, '0');

    return (
        // Tarjeta Base: Fondo blanco, borde sutil azul. Hover: Fondo Azul Profundo, sombra violeta.
        <div className="group relative h-full bg-white border border-[#374e86]/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden hover:bg-[#374e86] hover:border-transparent transition-all duration-500 shadow-xl shadow-[#374e86]/5 hover:shadow-2xl hover:shadow-[#bcb5ff]/20">

            {/* Blob de fondo animado en Hover (Violeta y Lima) */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#bcb5ff]/40 to-[#e7f1ad]/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>

            <div>
                <div className="flex justify-between items-start mb-6">
                    {/* Ícono: Fondo azul claro, ícono azul. Hover: Fondo violeta, ícono blanco */}
                    <div className="p-4 rounded-2xl bg-[#F8F9FF] text-[#374e86] group-hover:bg-[#bcb5ff] group-hover:text-white transition-colors duration-500 shadow-sm">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>
                    {/* Índice: Color azul claro. Hover: Color Lima para contraste vibrante */}
                    <span className="font-massive text-4xl text-[#95b2ed]/50 group-hover:text-[#e7f1ad] transition-colors duration-500">
                        {formattedIndex}
                    </span>
                </div>

                {/* Título: Azul. Hover: Blanco */}
                <h3 className="font-serif-display text-2xl mb-4 text-[#374e86] group-hover:text-white transition-colors duration-300 leading-snug">
                    {title}
                </h3>

                {/* Descripción: Azul/70. Hover: Blanco/80 */}
                <p className="font-sans-body text-[#374e86]/70 group-hover:text-white/80 mb-8 text-base leading-relaxed transition-colors duration-300">
                    {description}
                </p>

                {/* Tags: Fondo azul claro, texto azul. Hover: Fondo azul oscuro (ligeramente más claro que la tarjeta), texto violeta */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag, i) => (
                        <span key={i} className="font-sans-body text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#F8F9FF] text-[#374e86]/80 border border-[#374e86]/5 group-hover:bg-[#374e86]/50 group-hover:text-[#bcb5ff] group-hover:border-[#bcb5ff]/30 transition-all duration-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#374e86]/10 group-hover:border-white/20 transition-colors duration-300 relative z-10">
                <div className="flex items-center gap-2">
                    {/* Punto destacado: Violeta. Hover: Lima */}
                    <div className="w-2 h-2 rounded-full bg-[#bcb5ff] group-hover:bg-[#e7f1ad] transition-colors duration-500"></div>
                    {/* Texto destacado: Azul. Hover: Blanco */}
                    <span className="font-sans-body text-sm font-bold text-[#374e86] group-hover:text-white transition-colors duration-300">
                        {highlight}
                    </span>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent group-hover:bg-[#bcb5ff] transition-all duration-500 group-hover:rotate-45">
                    {/* Flecha: Azul. Hover: Blanco */}
                    <ArrowRight className="text-[#374e86] group-hover:text-white transition-colors duration-300" size={20} />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;