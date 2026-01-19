'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // IMPORTANTE: Importar Link
import { motion } from 'framer-motion';
import {
    Mail, MapPin, Phone, Send, checkCircle2,
    Calendar, ArrowRight, CheckCircle2, Loader2, Info
} from 'lucide-react';

const ContactPage = () => {
    const [formState, setFormState] = useState('idle');
    const [acceptedTerms, setAcceptedTerms] = useState(false); // NUEVO ESTADO

    const handleSubmit = (e) => {
        e.preventDefault();

        // Doble validación de seguridad
        if (!acceptedTerms) return;

        setFormState('loading');
        // Simulación de envío
        setTimeout(() => setFormState('success'), 2000);
    };

    return (
        <main className="min-h-screen bg-[#F8F9FF] pt-32 pb-20 px-6 md:px-12 flex items-center justify-center relative overflow-hidden">

            {/* Decoración de Fondo */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#bcb5ff]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e7f1ad]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                {/* --- COLUMNA IZQUIERDA --- */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center"
                >
                    <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-6">
                        Agenda Abierta Q1 2026
                    </span>
                    <h1 className="font-massive font-semibold text-5xl md:text-7xl text-[#374e86] mb-8 leading-[0.9]">
                        HABLEMOS DE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] to-[#374e86]">RENTABILIDAD.</span>
                    </h1>
                    <p className="font-sans-body text-lg text-[#374e86]/70 mb-12 leading-relaxed max-w-md">
                        Si tu consultorio ya factura pero sientes que el crecimiento se estancó, es momento de auditar tu ecosistema digital.
                    </p>

                    <div className="space-y-8">
                        <ContactItem
                            icon={Mail}
                            title="Correo Electrónico"
                            value="hola@somosmada.com"
                            link="mailto:hola@somosmada.com"
                        />
                        <ContactItem
                            icon={MapPin}
                            title="Oficinas Centrales"
                            value="Monterrey, N.L."
                        />
                        <ContactItem
                            icon={Calendar}
                            title="Disponibilidad"
                            value="Lunes a Viernes, 9am - 6pm"
                        />
                    </div>
                </motion.div>

                {/* --- COLUMNA DERECHA: FORMULARIO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#374e86]/5 border border-[#374e86]/5 relative overflow-hidden"
                >
                    {formState === 'success' ? (
                        <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8">
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                className="w-20 h-20 bg-[#e7f1ad] rounded-full flex items-center justify-center mb-6"
                            >
                                <CheckCircle2 size={40} className="text-[#374e86]" />
                            </motion.div>
                            <h3 className="font-serif-display text-3xl text-[#374e86] mb-4">¡Mensaje Recibido!</h3>
                            <p className="font-sans-body text-[#374e86]/60">
                                Nuestro equipo analizará tu caso y te contactará en menos de 24 horas.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <h3 className="font-serif-display text-2xl text-[#374e86] mb-6">
                                Solicitar Auditoría
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="Nombre" placeholder="Dr. Juan Pérez" type="text" />
                                <InputGroup label="Especialidad" placeholder="Dermatología" type="text" />
                            </div>

                            <InputGroup label="Correo Electrónico" placeholder="doctor@clinica.com" type="email" />

                            <InputGroup label="Sitio Web Actual (Opcional)" placeholder="www.miclinica.com" type="text" />

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#374e86]/50 mb-2">
                                    Objetivo Principal
                                </label>
                                <select className="w-full bg-[#F8F9FF] border border-[#374e86]/10 rounded-xl px-4 py-4 text-[#374e86] focus:outline-none focus:border-[#bcb5ff] transition-colors font-sans-body appearance-none cursor-pointer">
                                    <option>Quiero más pacientes privados</option>
                                    <option>Quiero mejorar mi imagen/branding</option>
                                    <option>Necesito un sitio web nuevo</option>
                                    <option>Solo estoy explorando opciones</option>
                                </select>
                            </div>

                            {/* --- CHECKBOX LEGAL (NUEVO) --- */}
                            <div className="flex items-start gap-3 pt-2">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#374e86]/20 bg-[#F8F9FF] transition-all checked:border-[#374e86] checked:bg-[#374e86]"
                                    />
                                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <label htmlFor="terms" className="text-xs text-[#374e86]/60 leading-relaxed cursor-pointer select-none">
                                    He leído y acepto la <Link href="/politica-de-privacidad" target="_blank" className="font-bold text-[#374e86] underline hover:text-[#bcb5ff]">Política de Privacidad</Link>. Entiendo que mis datos serán tratados de forma confidencial.
                                </label>
                            </div>

                            <div className="pt-2">
                                <button
                                    // Bloqueamos el botón si no aceptó términos O si está cargando
                                    disabled={!acceptedTerms || formState === 'loading'}
                                    className="w-full bg-[#374e86] text-white font-bold font-sans-body py-4 rounded-xl hover:bg-[#bcb5ff] hover:text-[#374e86] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#374e86]/20"
                                >
                                    {formState === 'loading' ? (
                                        <>
                                            <Loader2 className="animate-spin" /> Procesando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Solicitud <ArrowRight size={20} />
                                        </>
                                    )}
                                </button>

                                {!acceptedTerms && (
                                    <p className="text-center text-[10px] text-red-400 mt-3 font-medium">
                                        * Debes aceptar la política de privacidad para continuar.
                                    </p>
                                )}
                            </div>
                        </form>
                    )}
                </motion.div>

            </div>
        </main>
    );
};

// Componente Auxiliar para Inputs
const InputGroup = ({ label, placeholder, type }) => (
    <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#374e86]/50 mb-2">
            {label}
        </label>
        <input
            required
            type={type}
            placeholder={placeholder}
            className="w-full bg-[#F8F9FF] border border-[#374e86]/10 rounded-xl px-4 py-4 text-[#374e86] placeholder:text-[#374e86]/30 focus:outline-none focus:border-[#bcb5ff] transition-colors font-sans-body"
        />
    </div>
);

// Componente Auxiliar para Info de Contacto
const ContactItem = ({ icon: Icon, title, value, link }) => (
    <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-white border border-[#374e86]/10 flex items-center justify-center shrink-0 text-[#374e86]">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="font-bold text-[#374e86] text-sm mb-1">{title}</h4>
            {link ? (
                <a href={link} className="text-[#374e86]/60 hover:text-[#bcb5ff] transition-colors text-lg font-serif-display">
                    {value}
                </a>
            ) : (
                <p className="text-[#374e86]/60 text-lg font-serif-display">{value}</p>
            )}
        </div>
    </div>
);

export default ContactPage;