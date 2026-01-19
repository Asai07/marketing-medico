'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle, Brain, Code, LineChart, MapPin } from 'lucide-react';

// --- 1. HERO ---
const AboutHero = () => {
    return (
        <section className="relative pt-40 pb-20 px-6 md:px-12 bg-[#F8F9FF] overflow-hidden min-h-[60vh] flex flex-col justify-center">
            {/* Fondo Vivo Sutil */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#bcb5ff]/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#95b2ed]/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff] mb-6 block">
                        Agencia Especializada en Salud
                    </span>

                    <h1 className="font-massive font-semibold text-5xl md:text-8xl lg:text-9xl text-[#374e86] leading-[0.9] tracking-tighter mb-8">
                        MARKETING CON <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] to-[#374e86]">RIGOR CLÍNICO.</span>
                    </h1>

                    <div className="max-w-2xl">
                        <p className="font-sans-body text-xl md:text-2xl text-[#374e86]/80 leading-relaxed font-medium">
                            Fusionamos diseño de alta gama con ciencia de datos. Somos tu <span className="text-[#374e86] font-bold bg-[#e7f1ad]/50 px-2">Growth Partner</span> para captar pacientes calificados y escalar tu consulta privada.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- 2. SECCIÓN: ORIGEN (MONTERREY + BLOB ESTILO REFERENCIA) ---
const OriginStory = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#F8F9FF] overflow-hidden">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* COLUMNA DE TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 lg:order-1 flex flex-col justify-center"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-full bg-[#e7f1ad]/30">
                            <MapPin className="text-[#374e86]" size={20} />
                        </div>
                        <span className="font-sans-body text-sm font-bold uppercase tracking-widest text-[#374e86]/80">
                            Origen: Monterrey, N.L.
                        </span>
                    </div>

                    <h2 className="font-serif-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#374e86] mb-8 leading-[1.1]">
                        Nacimos en el norte, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcb5ff] to-[#374e86]">pensamos global.</span>
                    </h2>

                    <div className="space-y-6 font-sans-body text-lg text-[#374e86]/80 leading-relaxed">
                        <p>
                            MADA es una agencia de marketing especializada que nació en la tierra del trabajo duro y la innovación: Monterrey. Llevamos ese ADN regio en cada estrategia.
                        </p>
                        <p>
                            Entendemos que en el sector médico, los resultados no son opcionales. Nos especializamos en traducir la complejidad clínica en sistemas de atracción de pacientes que son rentables, éticos y escalables.
                        </p>
                    </div>
                </motion.div>

                {/* COLUMNA VISUAL CON BLOB ESTILO REFERENCIA */}
                <div className="relative order-1 lg:order-2 flex justify-center items-center h-[500px] lg:h-[600px]">

                    {/* --- EL BLOB LÍQUIDO (Igual a tu referencia) --- */}
                    <motion.div
                        animate={{
                            // Animación de forma (morphing)
                            borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"],
                        }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        // Estilos ajustados a tu paleta: Fondo blanco/azul sutil, borde y sombras
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#ffffff] to-[#dce4ff] border border-white/60 shadow-2xl shadow-[#374e86]/10 backdrop-blur-3xl overflow-hidden z-0"
                    >
                        {/* Blob Interno 1 (Lima - #e7f1ad) */}
                        <motion.div
                            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#e7f1ad] mix-blend-multiply opacity-80 blur-[40px]"
                        />
                        {/* Blob Interno 2 (Violeta - #bcb5ff) */}
                        <motion.div
                            animate={{ x: [-20, 20, -20], y: [10, -10, 10] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                            className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[#bcb5ff] mix-blend-multiply opacity-60 blur-[50px]"
                        />
                    </motion.div>

                    {/* --- LA FOTO --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative z-10 w-[300px] h-[400px] lg:w-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#374e86]/20 border-[6px] border-white rotate-3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Equipo MADA Monterrey"
                            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

// --- 3. MANIFIESTO ---
const Manifesto = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-white border-y border-[#374e86]/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="opacity-50 hover:opacity-100 transition-opacity duration-500">
                        <h3 className="font-serif-display font-bold text-3xl text-[#374e86] mb-8 flex items-center gap-3">
                            <XCircle className="text-red-400" />
                            Agencias Generalistas
                        </h3>
                        <ul className="space-y-6 font-sans-body text-[#374e86]/70">
                            <li className="flex gap-4">
                                <span className="w-1 h-full bg-red-100 block shrink-0"></span>
                                <p>Se enfocan en "Likes" y métricas de vanidad que no generan citas reales en agenda.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-1 h-full bg-red-100 block shrink-0"></span>
                                <p>Desconocen la ética médica y las normativas de publicidad sanitaria (COFEPRIS).</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-1 h-full bg-red-100 block shrink-0"></span>
                                <p>Usan plantillas genéricas que abaratan la percepción de tus honorarios médicos.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="relative p-8 rounded-3xl bg-[#F8F9FF] border border-[#bcb5ff]/20 shadow-xl shadow-[#bcb5ff]/5">
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-3 h-3 bg-[#e7f1ad] rounded-full animate-pulse shadow-[0_0_10px_#e7f1ad]"></div>
                        </div>
                        <h3 className="font-serif-display font-bold text-3xl text-[#374e86] mb-8 flex items-center gap-3">
                            <CheckCircle2 className="text-[#e7f1ad] fill-[#374e86]" />
                            La Metodología MADA
                        </h3>
                        <ul className="space-y-6 font-sans-body text-[#374e86]">
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 size={20} className="text-[#bcb5ff] shrink-0 mt-1" />
                                <p className="font-medium">
                                    <strong>Rentabilidad Auditada:</strong> Cada peso invertido en publicidad está rastreado hasta convertirse en paciente.
                                </p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 size={20} className="text-[#bcb5ff] shrink-0 mt-1" />
                                <p className="font-medium">
                                    <strong>Autoridad Digital:</strong> Creamos una imagen que refleja tu experiencia y justifica el valor de tu consulta.
                                </p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 size={20} className="text-[#bcb5ff] shrink-0 mt-1" />
                                <p className="font-medium">
                                    <strong>Sistema Automatizado:</strong> Tu recepción deja de filtrar curiosos. Nuestro sistema nutre a los prospectos 24/7.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 4. VALORES ---
const CoreValues = () => {
    const values = [
        {
            icon: Brain,
            title: "Diagnóstico",
            desc: "No adivinamos. Analizamos el mercado local y tu competencia para encontrar dónde tu especialidad puede liderar."
        },
        {
            icon: Code,
            title: "Ecosistema",
            desc: "Desarrollamos webs médicas rápidas, CRMs automatizados y sistemas de seguimiento de pacientes."
        },
        {
            icon: LineChart,
            title: "Resultados",
            desc: "Nuestra métrica norte es tu facturación. Si tu agenda no se llena de pacientes calificados, no estamos cumpliendo."
        }
    ];

    return (
        <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[#374e86] to-[#2a3c69] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#bcb5ff]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-[#bcb5ff]/30 transition-all duration-500 shadow-xl"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#bcb5ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#e7f1ad] group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(188,181,255,0.1)] group-hover:shadow-[0_0_30px_rgba(231,241,173,0.4)]">
                                <val.icon size={32} className="text-[#bcb5ff] group-hover:text-[#374e86] transition-colors duration-500" />
                            </div>

                            <h3 className="font-serif-display font-bold text-3xl mb-4 text-[#F8F9FF] group-hover:text-[#e7f1ad] transition-colors">
                                {val.title}
                            </h3>

                            <p className="font-sans-body text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                                {val.desc}
                            </p>

                            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#bcb5ff]/30 group-hover:bg-[#e7f1ad] transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 5. CTA FINAL ---
const ContactCTA = () => {
    return (
        <section className="py-32 px-6 text-center bg-[#F8F9FF]">
            <h2 className="font-massive font-extrabold text-5xl md:text-7xl text-[#374e86] mb-8">
                ¿HACEMOS <span className="text-[#bcb5ff]">QUÍMICA?</span>
            </h2>
            <p className="font-sans-body text-[#374e86]/60 text-lg mb-12 max-w-2xl mx-auto">
                Buscamos doctores que ya son excelentes en su práctica y solo necesitan el sistema correcto para que el mundo lo sepa.
            </p>
            <button className="bg-[#374e86] text-white font-bold font-sans-body py-4 px-10 rounded-full hover:bg-[#bcb5ff] hover:text-[#374e86] transition-all duration-300 shadow-xl shadow-[#374e86]/20 flex items-center gap-3 mx-auto">
                Agendar Entrevista
                <ArrowRight size={20} />
            </button>
        </section>
    );
};

// --- COMPONENTE PRINCIPAL ---
const AboutPage = () => {
    return (
        <main className="bg-[#F8F9FF] min-h-screen">
            <AboutHero />
            <OriginStory />
            <Manifesto />
            <CoreValues />
            <ContactCTA />
        </main>
    );
};

export default AboutPage;