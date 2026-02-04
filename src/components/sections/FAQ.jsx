'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

/* ---------------- DATA REAL ---------------- */
const faqs = [
    {
        id: 1,
        question: "¿Trabajan con todo tipo de profesionales?",
        answer: "No. Trabajamos con profesionales de la salud y clínicas que ya tienen consulta activa y buscan crecer con mayor orden, claridad y criterio en sus decisiones."
    },
    {
        id: 2,
        question: "¿Ofrecen manejo de redes sociales o creación de contenido?",
        answer: "No ofrecemos manejo básico de redes ni contenido sin una estrategia detrás. Nuestro enfoque está en decisiones estratégicas que impacten directamente en la agenda y el crecimiento del negocio, no en publicar por publicar."
    },
    {
        id: 3,
        question: "¿Prometen resultados específicos?",
        answer: "No. Cada consulta es distinta y los resultados dependen del contexto, la constancia y las decisiones que se tomen. Trabajamos con procesos estratégicos, no con promesas genéricas."
    },
    {
        id: 4,
        question: "¿Cuánto tiempo toma ver cambios?",
        answer: "Depende del punto de partida y del nivel de involucramiento. No trabajamos con soluciones inmediatas, sino con crecimiento sostenible a mediano y largo plazo."
    },
    {
        id: 5,
        question: "¿Cuál es la inversión?",
        answer: "La inversión se define según el contexto de cada consulta y el tipo de acompañamiento que realmente necesita. Trabajamos con profesionales que, independientemente de su tamaño actual, entienden el crecimiento como una inversión estratégica y están dispuestos a construir con constancia."
    },
    {
        id: 6,
        question: "¿Tengo que grabar videos bailando en TikTok?",
        answer: "Absolutamente no. No trabajamos desde la viralidad ni desde formatos que no se alineen con tu perfil profesional. La estrategia se adapta a lo que tenga sentido para tu consulta, no a lo que esté de moda."
    },
    {
        id: 7,
        question: "¿Cómo es el primer paso para trabajar juntos?",
        answer: "El primer paso es una evaluación breve para entender tu consulta, tu momento actual y definir si este enfoque es el adecuado para ti."
    }
];

/* ---------------- COMPONENTE INDIVIDUAL DE FAQ ---------------- */
const FAQItem = ({ data, isOpen, onClick }) => {
    return (
        <motion.div
            initial={false}
            className={`border-b border-[#374E86]/10 ${isOpen ? 'bg-[#374E86]/[0.02]' : ''} transition-colors duration-300`}
        >
            {/* --- HEADER (PREGUNTA) --- */}
            {/* CORRECCIÓN: Eliminé 'overflow-hidden' de aquí para que el icono no se corte al girar */}
            <button
                onClick={onClick}
                className="w-full py-6 md:py-9 flex justify-between items-start gap-6 text-left group relative"
            >
                {/* Título */}
                <h3 className={`font-serif-display text-xl md:text-3xl leading-snug transition-colors duration-300 pr-4
          ${isOpen ? 'text-[#374E86]' : 'text-[#374E86] group-hover:text-[#BCB5FF]'}`}>
                    {data.question}
                </h3>

                {/* Icono Animado */}
                {/* CORRECCIÓN: Añadí 'p-1' (padding) extra por seguridad */}
                <div className="relative shrink-0 mt-1 p-1">
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#374E86]/60 group-hover:text-[#BCB5FF] transition-colors"
                    >
                        <Plus size={24} />
                    </motion.div>

                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 90, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#E6F2A2]"
                    >
                        <Minus size={24} />
                    </motion.div>

                    {/* Espacio invisible para mantener dimensiones */}
                    <div className="w-6 h-6 opacity-0 pointer-events-none"><Plus size={24} /></div>
                </div>
            </button>

            {/* --- BODY (RESPUESTA) --- */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto", marginBottom: 32 },
                            collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="overflow-hidden"
                    >
                        <div className="font-sans-body text-base md:text-lg text-[#374E86]/80 leading-relaxed max-w-3xl pl-4 border-l-2 border-[#E6F2A2] ml-1">
                            <p>{data.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ---------------- SECCIÓN PRINCIPAL ---------------- */
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-[#F8F9FC] py-24 md:py-36 px-6 md:px-12 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#BCB5FF]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row gap-10 md:items-end justify-between mb-20 md:mb-24">
                    <div className="max-w-2xl">
                        <span className="inline-block py-2 px-4 rounded-full bg-[#E6F2A2] text-[#374E86] font-sans-body text-xs font-bold uppercase tracking-widest mb-8">
                            Preguntas Frecuentes
                        </span>

                        <h2 className="font-serif-display text-5xl md:text-7xl text-[#374E86] leading-[1.05]">
                            Resolver dudas <br className="hidden md:block" />
                            antes <span className="italic text-[#BCB5FF]">de avanzar.</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 text-[#374E86]/60 font-bold text-xs uppercase tracking-widest pb-2">
                        <Sparkles size={14} className="text-[#E6F2A2]" />
                        <span>Transparencia Radical</span>
                    </div>
                </div>

                {/* --- LISTA --- */}
                <div className="border-t border-[#374E86]/10">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.id}
                            data={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;