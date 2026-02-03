'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import { AlertCircle, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

// --- CONTENIDO ---
const flowData = [
    {
        type: 'problem',
        id: '01',
        title: "Inestabilidad e Incertidumbre",
        items: ["Semanas con agenda llena y otras flojas.", "Dependencia del boca a boca.", "Probar sin entender qué funciona."],
        badge: "El Síntoma", icon: AlertCircle
    },
    {
        type: 'problem',
        id: '02',
        title: "Desperdicio de Recursos",
        items: ["Inversión sin claridad de resultados.", "Falta de control real sobre el crecimiento.", "Esfuerzos aislados."],
        badge: "El Dolor", icon: AlertCircle
    },
    {
        type: 'agitation',
        id: 'break',
        title: "El error no es soñar con una agenda constante...",
        highlight: "Es perseguirla sin claridad ni dirección.",
        badge: "La Realidad", icon: Lightbulb
    },
    {
        type: 'solution',
        id: '03',
        title: "El Antídoto: Estrategia Clínica",
        items: ["Propósito claro, no improvisación.", "Atraes al paciente correcto.", "Ajustes con calma y datos."],
        badge: "El Resultado", icon: CheckCircle2
    }
];

// --- COMPONENTE TARJETA (Simplificado para este ejemplo) ---
const Card = ({ item, index, isLeft }) => {
    const isAgitation = item.type === 'agitation';

    let bgStyle = isAgitation ? "bg-[#374e86] text-white" : "bg-white border-red-100";
    let badgeColor = isAgitation ? "bg-white text-[#374e86]" : "bg-red-50 text-red-400 border-red-100";
    let iconColor = isAgitation ? "text-[#DFF2A3] bg-white/10" : "text-red-400 bg-red-50";

    return (
        <div className={`relative flex w-full ${isAgitation ? 'justify-center my-24' : (isLeft ? 'justify-start' : 'justify-end')} my-12 z-10`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative w-full md:w-[45%] p-8 rounded-[2rem] border shadow-xl ${bgStyle} group`}
            >
                <div className={`absolute -top-4 px-4 py-1 rounded-full text-xs font-bold uppercase border ${badgeColor}`}>{item.badge}</div>
                <div className="flex flex-col gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconColor}`}><item.icon size={20} /></div>
                    <h3 className="font-serif-display text-2xl leading-tight">{item.title} {item.highlight && <span className="italic text-[#bcb5ff] block">{item.highlight}</span>}</h3>
                    {item.items && <ul className="space-y-2">{item.items.map((line, i) => (<li key={i} className="text-sm opacity-80 flex gap-2"><span className="mt-1.5 w-1 h-1 bg-current rounded-full" />{line}</li>))}</ul>}
                </div>
            </motion.div>
        </div>
    );
};

// --- NUEVO: COMPONENTE DE LA PLANTA QUE FLORECE ---
const BloomingPlant = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // Se activa cuando entra bien en pantalla

    // Variantes para animar las partes de la planta
    const plantVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    const leafVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, type: "spring", stiffness: 200 }
        }
    };

    return (
        <div ref={ref} className="w-24 h-32 mx-auto mb-6 relative">
            <svg className="w-full h-full" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Tallo principal (Crece hacia arriba) */}
                <motion.path
                    d="M50 150 C 50 120, 40 80, 50 50 C 55 35, 50 20, 50 0"
                    stroke="#DFF2A3" strokeWidth="4" strokeLinecap="round"
                    variants={plantVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                />

                {/* Hojas (Aparecen después del tallo) */}
                <motion.g initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ delayChildren: 0.8, staggerChildren: 0.3 }}>
                    {/* Hoja Izquierda */}
                    <motion.path
                        d="M50 100 Q 20 90, 10 70 Q 30 80, 50 90"
                        fill="#DFF2A3" variants={leafVariants} style={{ originX: 1, originY: 1 }}
                    />
                    {/* Hoja Derecha */}
                    <motion.path
                        d="M50 70 Q 80 60, 90 40 Q 70 50, 50 60"
                        fill="#DFF2A3" variants={leafVariants} style={{ originX: 0, originY: 1 }}
                    />
                    {/* Flor/Brote Superior */}
                    <motion.circle cx="50" cy="10" r="8" fill="#374e86" variants={leafVariants} />
                    <motion.circle cx="50" cy="10" r="4" fill="#DFF2A3" variants={leafVariants} transition={{ delay: 1.5 }} />
                </motion.g>
            </svg>
        </div>
    );
};

const ProblemFlow = () => {
    const containerRef = useRef(null);
    const [pathD, setPathD] = useState("");
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end end"] });
    const pathLength = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

    useEffect(() => {
        if (window.innerWidth < 768) return;
        // La línea serpentea y termina JUSTO encima de la tarjeta final (aprox en Y=88)
        setPathD("M 50 0 C 50 10, 25 10, 25 25 V 35 C 25 50, 75 50, 75 65 V 75 C 75 85, 50 80, 50 88 L 50 90");
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 bg-[#fff] overflow-hidden">
            {/* HEADER... (Omitido para brevedad, es igual al anterior) */}
            <div className="text-center mb-16 relative z-20"><h2 className="font-serif-display text-4xl text-[#374e86]">El Proceso de Transformación</h2></div>

            <div className="max-w-[1000px] mx-auto relative px-4 md:px-0">

                {/* >>> CAPA SVG (LA LÍNEA ALIMENTADORA) <<< */}
                <div className="absolute inset-0 w-full h-[90%] pointer-events-none hidden md:block z-0">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ef4444" /> <stop offset="60%" stopColor="#374e86" /> <stop offset="100%" stopColor="#DFF2A3" />
                            </linearGradient>
                            <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                        </defs>
                        {/* Riel Base */}
                        <path d={pathD} fill="none" stroke="#374e86" strokeOpacity="0.05" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                        {/* Línea Animada */}
                        <motion.path d={pathD} fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" vectorEffect="non-scaling-stroke" style={{ pathLength: pathLength }} />
                    </svg>
                </div>

                {/* Línea Móvil */}
                <div className="absolute left-6 top-0 h-[85%] w-[3px] bg-[#374e86]/10 md:hidden z-0"><motion.div style={{ height: useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]) }} className="w-full bg-gradient-to-b from-red-400 via-[#374e86] to-[#DFF2A3]" /></div>

                {/* >>> CONTENIDO <<< */}
                <div className="flex flex-col relative z-10 pb-20">
                    <Card item={flowData[0]} index={0} isLeft={true} />
                    <Card item={flowData[1]} index={1} isLeft={false} />
                    <Card item={flowData[2]} index={2} isLeft={false} />

                    {/* TARJETA FINAL (EL JARDÍN DONDE FLORECE) */}
                    <div className="relative flex justify-center w-full mt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-b from-white to-[#F0FDF4] p-8 md:p-12 rounded-[3rem] border-2 border-[#DFF2A3] shadow-2xl shadow-[#DFF2A3]/20 max-w-xl text-center relative overflow-hidden"
                        >
                            {/* Decoración superior */}
                            <div className="absolute top-0 left-0 w-full h-3 bg-[#DFF2A3]"></div>

                            {/* >>> AQUÍ ESTÁ EL TRUCO: LA PLANTA SVG <<< */}
                            {/* Se coloca justo arriba del contenido, donde termina la línea principal */}
                            <BloomingPlant />

                            <h3 className="font-serif-display text-3xl md:text-4xl text-[#374e86] mb-6">{flowData[3].title}</h3>
                            <ul className="text-left space-y-4 max-w-md mx-auto mb-10">
                                {flowData[3].items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#374e86]/80 text-lg"><CheckCircle2 className="shrink-0 text-[#DFF2A3] mt-1" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <button className="group relative px-8 py-4 bg-[#374e86] text-white rounded-full overflow-hidden hover:scale-105 duration-300 shadow-lg">
                                <div className="absolute inset-0 bg-[#DFF2A3] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10 font-bold text-lg flex items-center gap-2 group-hover:text-[#374e86]">Evaluar mi negocio <ArrowRight /></span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemFlow;