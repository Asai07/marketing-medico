'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "¿Trabajan con cualquier especialidad médica?",
        answer: "Nos enfocamos en especialidades de alto valor (Cirugía Plástica, Dermatología, Odontología, Traumatología, Ginecología, etc.). Si tu consulta depende de pacientes privados que valoran la calidad, somos para ti."
    },
    {
        question: "¿En cuánto tiempo veré resultados?",
        answer: "Nuestro sistema está diseñado para generar tracción desde el primer mes (Lanzamiento). Sin embargo, la optimización de costos y la estabilidad total de la agenda se consolida típicamente en el mes 2 y 3."
    },
    {
        question: "¿Tengo que grabar videos bailando en TikTok?",
        answer: "Absolutamente no. Tu autoridad médica es lo primero. Diseñamos contenido educativo y profesional que eleva tu reputación, sin tendencias ridículas que dañen tu imagen."
    },
    {
        question: "¿Qué incluye el servicio mensual?",
        answer: "Todo lo necesario para crecer: Gestión de campañas (Meta/Google Ads), diseño de Landing Pages, guiones de venta para tu recepción, edición de video profesional y reportes de ROI auditables."
    },
    {
        question: "¿Hay plazos forzosos?",
        answer: "Trabajamos con un esquema de partnership de 3 meses iniciales para garantizar la maduración de las campañas. Después, es mensual. Queremos que te quedes por los resultados, no por un contrato."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        // CAMBIO: Fondo claro #F8F9FF y borde azul
        <section className="relative bg-[#F8F9FF] py-24 md:py-32 px-6 md:px-12 border-t border-[#374e86]/5">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* COLUMNA IZQUIERDA: Título Sticky */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32">
                        {/* CAMBIO: Subtítulo Violeta */}
                        <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-4 block">
                            Dudas Comunes
                        </span>
                        <h2 className="font-massive font-semibold text-5xl md:text-6xl text-[#374e86] leading-[0.95] mb-6">
                            PREGUNTAS <br />
                            {/* CAMBIO: Acento Violeta */}
                            <span className="text-[#bcb5ff]">FRECUENTES.</span>
                        </h2>
                        <p className="font-sans-body text-[#374e86]/60 text-lg leading-relaxed max-w-sm">
                            Resolvemos las inquietudes principales antes de nuestra primera llamada. Transparencia total.
                        </p>
                    </div>
                </div>

                {/* COLUMNA DERECHA: Acordeón */}
                <div className="lg:col-span-8 flex flex-col">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            faq={faq}
                            isOpen={activeIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

const AccordionItem = ({ faq, isOpen, onClick }) => {
    return (
        // CAMBIO: Borde inferior azul suave
        <div
            onClick={onClick}
            className="border-b border-[#374e86]/10 py-8 cursor-pointer group"
        >
            <div className="flex justify-between items-center gap-6">
                {/* CAMBIO: Texto activo Violeta */}
                <h3 className={`font-serif-display text-2xl md:text-3xl transition-colors duration-300 ${isOpen ? 'text-[#bcb5ff]' : 'text-[#374e86] group-hover:text-[#374e86]/70'}`}>
                    {faq.question}
                </h3>

                {/* CAMBIO: Botón activo Violeta */}
                <div className={`relative flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-[#bcb5ff] bg-[#bcb5ff] text-white' : 'border-[#374e86]/20 text-[#374e86]'}`}>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pt-6 pb-2 font-sans-body text-lg text-[#374e86]/70 leading-relaxed max-w-2xl">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQ;