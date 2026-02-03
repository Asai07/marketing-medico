'use client';
import React from 'react'; // Eliminamos hooks complejos si no son necesarios
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';

// --- DATOS ---
const fitData = {
    positive: {
        title: "Es para ti si...",
        items: [
            "Ya tienes consulta activa y ventas (aunque sean irregulares).",
            "Buscas crecer tu agenda con orden y control, no solo volumen.",
            "Quieres entender qué está funcionando en tu captación.",
            "Prefieres tomar decisiones con información clara, no a ciegas.",
            "Estás dispuesto a invertir de forma consciente para escalar.",
            "Prefieres crecimiento sostenible en lugar de picos impredecibles."
        ]
    },
    negative: {
        title: "No es para ti si...",
        items: [
            "Buscas viralidad o exposición sin impacto real en ventas.",
            "Solo quieres un 'manejo de redes sociales' genérico.",
            "Esperas resultados inmediatos sin un proceso detrás.",
            "No tienes claridad sobre tu presupuesto o modelo.",
            "Comparas agencias únicamente por precio barato.",
            "Buscas soluciones rápidas o fórmulas mágicas."
        ]
    }
};

// COMPONENTE LISTITEM (Simple y ligero)
const ListItem = ({ children, type }) => {
    return (
        <li className="flex items-start gap-4 text-[#374e86]/80">
            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${type === 'positive' ? 'bg-[#bcb5ff]/20 text-[#374e86]' : 'bg-red-100 text-red-400'}`}>
                {type === 'positive' ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
            </div>
            <span className="font-sans-body text-base leading-relaxed">{children}</span>
        </li>
    );
};

const IsThisForYou = () => {
    return (
        <section className="relative py-32 px-4 md:px-12 bg-[#F8F9FF] overflow-hidden">

            {/* Fondo Decorativo Sutil (Estático) */}
            <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* --- HEADER (Animación mínima solo de opacidad) --- */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[#374e86]/5 border border-[#374e86]/10 font-sans-body text-xs font-bold uppercase tracking-widest text-[#374e86]/70 mb-6">
                            Fit Cultural
                        </span>
                        <h2 className="font-serif-display text-5xl md:text-7xl text-[#374e86]">
                            ¿Somos para ti?
                        </h2>
                    </motion.div>
                </div>

                {/* --- GRID DE CONTENIDO --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* COLUMNA IZQUIERDA (SI ES PARA TI) */}
                    <motion.div
                        // ELIMINAMOS EL MOVIMIENTO LATERAL (X). Solo aparece suavemente.
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        // El 'hover' sigue dando el toque premium sin afectar la carga inicial
                        className="group relative p-8 md:p-12 rounded-[2rem] bg-white border border-[#374e86]/5 shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Efecto de degradado sutil al hover (CSS puro para rendimiento) */}
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#bcb5ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <h3 className="font-serif-display text-3xl md:text-4xl text-[#374e86] mb-8 italic relative z-10">
                            {fitData.positive.title}
                        </h3>

                        <ul className="space-y-6 mb-12 relative z-10">
                            {fitData.positive.items.map((item, i) => (
                                <ListItem key={i} type="positive">{item}</ListItem>
                            ))}
                        </ul>

                        <div className="relative pt-8 border-t border-[#374e86]/10 z-10">
                            <p className="font-sans-body font-medium text-lg text-[#374e86] leading-relaxed">
                                Trabajamos con profesionales que quieren dejar de
                                <span className="ml-1 italic font-serif-display text-[#374e86] bg-[#DFF2A3] px-2 py-0.5 rounded-md">
                                    improvisar su crecimiento
                                </span>.
                            </p>
                        </div>
                    </motion.div>

                    {/* COLUMNA DERECHA (NO ES PARA TI) */}
                    <motion.div
                        // Aparece con un ligero retraso para dar ritmo, pero sin movimiento brusco
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative p-8 md:p-12 rounded-[2rem] bg-[#F1F3FA] border border-transparent hover:border-[#374e86]/10 transition-colors duration-300"
                    >
                        <h3 className="font-serif-display text-3xl md:text-4xl text-[#374e86]/60 mb-8">
                            {fitData.negative.title}
                        </h3>

                        <ul className="space-y-6 mb-12">
                            {fitData.negative.items.map((item, i) => (
                                <ListItem key={i} type="negative">{item}</ListItem>
                            ))}
                        </ul>

                        <div className="pt-8 border-t border-[#374e86]/5 text-[#374e86]/70">
                            <p className="font-sans-body text-lg leading-relaxed">
                                Priorizamos estrategia y proceso,
                                <span className="font-bold text-[#374e86]/40 line-through decoration-red-300 ml-1"> no las ocurrencias.</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* --- CTA SECTION --- */}
                <motion.div
                    className="mt-20 md:mt-32 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="inline-flex flex-col items-center gap-6">
                        <button className="group relative px-8 py-4 bg-[#374e86] text-white rounded-full overflow-hidden transition-transform hover:scale-105 duration-300 shadow-lg shadow-[#374e86]/20">
                            <div className="absolute inset-0 bg-[#DFF2A3] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 font-sans-body font-bold text-lg flex items-center gap-2 group-hover:text-[#374e86]">
                                Evaluar mi negocio
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <p className="font-sans-body text-sm text-[#374e86]/60 max-w-xs mx-auto">
                            Test de 3 min para definir si este enfoque es lo que necesitas para crecer tu consulta.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default IsThisForYou;