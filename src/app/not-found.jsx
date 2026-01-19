'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center px-6 text-center">

            {/* 404 Gigante */}
            <h1 className="font-massive text-[150px] md:text-[200px] leading-none text-[#374e86]/5 select-none">
                404
            </h1>

            <div className="absolute z-10">
                <h2 className="font-serif-display text-4xl md:text-5xl text-[#374e86] mb-4">
                    Diagnóstico: <span className="text-[#bcb5ff]">Extraviado</span>
                </h2>
                <p className="font-sans-body text-[#374e86]/60 mb-8 max-w-md mx-auto">
                    La página que buscas no existe o ha sido movida. Regresemos a terreno seguro.
                </p>

                <Link href="/">
                    <button className="bg-[#374e86] text-white font-bold font-sans-body py-4 px-8 rounded-full hover:bg-[#bcb5ff] hover:text-[#374e86] transition-all duration-300 shadow-xl shadow-[#374e86]/20 flex items-center gap-3 mx-auto">
                        <ArrowLeft size={20} />
                        Volver al Inicio
                    </button>
                </Link>
            </div>

        </div>
    );
}