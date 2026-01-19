'use client';

import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const PrivacyPage = () => {
    return (
        <main className="bg-[#F8F9FF] min-h-screen pt-32 pb-20 px-6 md:px-12">

            {/* ENCABEZADO */}
            <div className="max-w-4xl mx-auto mb-16">
                <Link href="/" className="inline-flex items-center gap-2 text-[#374e86]/60 hover:text-[#374e86] transition-colors mb-8 font-sans-body text-sm font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} /> Volver al Inicio
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#e7f1ad]/20 rounded-full text-[#374e86]">
                        <ShieldCheck size={32} />
                    </div>
                    <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff]">
                        Última actualización: Enero 2026
                    </span>
                </div>

                <h1 className="font-massive font-bold text-4xl md:text-6xl text-[#374e86] mb-6">
                    POLÍTICA DE PRIVACIDAD.
                </h1>
                <p className="font-serif-display text-xl text-[#374e86]/70 leading-relaxed">
                    Tu confianza es nuestro activo más valioso. Aquí te explicamos claramente cómo protegemos, usamos y respetamos tu información y la de tu práctica médica.
                </p>
            </div>

            {/* CONTENIDO LEGAL */}
            <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-[#374e86]/5 border border-[#374e86]/5 font-sans-body text-[#374e86]/80 leading-relaxed text-sm md:text-base space-y-12">

                {/* SECCIÓN 1 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">1. Identidad y Domicilio del Responsable</h2>
                    <p>
                        <strong>MADA Marketing Médico</strong> (en adelante "La Agencia"), con domicilio en Nuevo León, México, es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente.
                    </p>
                </section>

                {/* SECCIÓN 2 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">2. Datos Personales que Recabamos</h2>
                    <p className="mb-4">
                        Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Datos de identificación (Nombre completo del doctor o representante legal).</li>
                        <li>Datos de contacto (Correo electrónico, teléfono móvil, dirección del consultorio).</li>
                        <li>Datos profesionales (Cédula profesional, especialidad médica, universidad de egreso).</li>
                        <li>Datos de facturación (RFC, Razón Social).</li>
                    </ul>
                </section>

                {/* SECCIÓN 3 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">3. Finalidades del Tratamiento</h2>
                    <p className="mb-4">
                        <strong>Finalidades Primarias:</strong> Los datos personales que recabamos los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Proveer los servicios de marketing digital, diseño web y consultoría contratados.</li>
                        <li>Facturación y cobro de honorarios.</li>
                        <li>Creación de perfiles en plataformas publicitarias (Meta Ads, Google Ads) a su nombre.</li>
                    </ul>
                    <p>
                        <strong>Finalidades Secundarias:</strong> De manera adicional, utilizaremos su información personal para fines de mercadotecnia, publicidad y prospección comercial interna (newsletter, invitaciones a eventos), que nos permiten y facilitan brindarle una mejor atención.
                    </p>
                </section>

                {/* SECCIÓN 4 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">4. Derechos ARCO</h2>
                    <p>
                        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
                    </p>
                    <p className="mt-4">
                        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva enviando un correo electrónico a: <a href="mailto:legal@somosmada.com" className="text-[#374e86] font-bold hover:text-[#bcb5ff] underline">legal@somosmada.com</a>.
                    </p>
                </section>

                {/* SECCIÓN 5 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">5. Uso de Cookies y Tecnologías de Rastreo</h2>
                    <p>
                        Le informamos que en nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de Internet, brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página.
                    </p>
                </section>

                {/* SECCIÓN 6 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">6. Cambios al Aviso de Privacidad</h2>
                    <p>
                        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad a través de nuestro sitio web.
                    </p>
                </section>

            </div>
        </main>
    );
};

export default PrivacyPage;