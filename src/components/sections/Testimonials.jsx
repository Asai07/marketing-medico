'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: "Dra. Sofía M.",
        role: "Dermatóloga",
        clinic: "Skin & Care",
        quote: "Dejamos de depender de referidos. En 3 meses, mi agenda de procedimientos láser se llenó completamente con pacientes de Instagram.",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Dr. Carlos R.",
        role: "Cirujano Plástico",
        clinic: "Aesthetic Center",
        quote: "No entendía nada de marketing hasta que conocí a Mada. Su equipo no solo trae leads, trae pacientes educados listos para operarse.",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Dra. Elena V.",
        role: "Odontóloga",
        clinic: "Luminous Smile",
        quote: "La inversión se pagó sola en la primera semana. La calidad de producción de los videos elevó totalmente la percepción de mi clínica.",
        img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Dr. Manuel G.",
        role: "Traumatólogo",
        clinic: "OrtoSports",
        quote: "Profesionalismo puro. No me hacen perder el tiempo con métricas vanidosas, vamos directo a consultas agendadas.",
        img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop"
    },
];

const Testimonials = () => {
    return (
        // CAMBIO: Fondo #F8F9FF y borde azul suave
        <section className="relative bg-[#F8F9FF] py-24 md:py-32 overflow-hidden border-t border-[#374e86]/5">

            {/* HEADER CENTRADO */}
            <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
                {/* CAMBIO: Subtítulo Violeta */}
                <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-4 block">
                    Voces de Autoridad
                </span>
                {/* CAMBIO: Título Azul Profundo */}
                <h2 className="font-massive font-semibold text-5xl md:text-7xl text-[#374e86] leading-[0.95]">
                    DOCTORES QUE <br />
                    {/* CAMBIO: Acento Violeta */}
                    <span className="text-[#bcb5ff]">CONFÍAN.</span>
                </h2>
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="relative w-full flex overflow-hidden mask-gradient-horizontal">

                {/* MÁSCARAS DE DEGRADADO - Ajustadas a #F8F9FF */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F8F9FF] to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F8F9FF] to-transparent z-10"></div>

                {/* TRACK ANIMADO */}
                <div className="flex gap-8 animate-infinite-scroll hover:pause-animation pl-8">
                    {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                        <TestimonialCard key={`${item.id}-${index}`} item={item} />
                    ))}
                </div>

            </div>

            {/* --- CSS --- */}
            <style>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-100% / 3)); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 20s linear infinite;
                    width: max-content; 
                }
                .hover\\:pause-animation:hover {
                    animation-play-state: paused;
                }
                .mask-gradient-horizontal {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
};

const TestimonialCard = ({ item }) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            // CAMBIO: Borde azul suave, sombra violeta al hover
            className="relative w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-3xl p-8 md:p-10 border border-[#374e86]/5 shadow-xl shadow-[#374e86]/5 flex flex-col justify-between group cursor-default transition-all duration-300 hover:border-[#bcb5ff]/50 hover:shadow-[#bcb5ff]/10"
        >
            <Quote className="absolute top-8 right-8 text-[#374e86]/5 w-12 h-12 rotate-180" />

            <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                    // CAMBIO: Estrellas en Lima (#e7f1ad) para que resalten vibrantes
                    <Star key={star} className="w-4 h-4 text-[#e7f1ad] fill-current" />
                ))}
            </div>

            {/* CAMBIO: Texto Azul Profundo */}
            <p className="font-serif-display text-xl md:text-2xl text-[#374e86] leading-relaxed mb-8 relative z-10">
                "{item.quote}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#374e86]/10 flex-shrink-0">
                    <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="50px" // Solo descarga una versión diminuta
                    />
                </div>
                <div>
                    <h4 className="font-bold font-sans-body text-[#374e86] text-sm">{item.name}</h4>
                    {/* CAMBIO: Rol en azul suave, Clínica destacada en Violeta */}
                    <p className="text-xs font-sans-body text-[#374e86]/50 uppercase tracking-wide font-medium">
                        {item.role} · <span className="text-[#bcb5ff] font-bold">{item.clinic}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonials;