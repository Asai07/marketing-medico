'use client';

import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import Link from 'next/link';

const TermsPage = () => {
    return (
        <main className="bg-[#F8F9FF] min-h-screen pt-32 pb-20 px-6 md:px-12">

            {/* ENCABEZADO */}
            <div className="max-w-4xl mx-auto mb-16">
                <Link href="/" className="inline-flex items-center gap-2 text-[#374e86]/60 hover:text-[#374e86] transition-colors mb-8 font-sans-body text-sm font-bold uppercase tracking-widest">
                    <ArrowLeft size={16} /> Volver al Inicio
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#e7f1ad]/20 rounded-full text-[#374e86]">
                        <Scale size={32} />
                    </div>
                    <span className="font-sans-body text-xs font-bold uppercase tracking-widest text-[#bcb5ff]">
                        Vigencia: Desde Enero 2026
                    </span>
                </div>

                <h1 className="font-massive font-bold text-4xl md:text-6xl text-[#374e86] mb-6">
                    TÉRMINOS Y CONDICIONES.
                </h1>
                <p className="font-serif-display text-xl text-[#374e86]/70 leading-relaxed">
                    Lineamientos claros para una relación comercial exitosa, transparente y ética.
                </p>
            </div>

            {/* CONTENIDO LEGAL */}
            <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-[#374e86]/5 border border-[#374e86]/5 font-sans-body text-[#374e86]/80 leading-relaxed text-sm md:text-base space-y-12">

                {/* SECCIÓN 1 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">1. Aceptación de los Términos</h2>
                    <p>
                        Al contratar los servicios de MADA Marketing Médico (en adelante "La Agencia") o utilizar nuestro sitio web, usted (en adelante "El Cliente") acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá contratar nuestros servicios.
                    </p>
                </section>

                {/* SECCIÓN 2 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">2. Descripción del Servicio</h2>
                    <p>
                        La Agencia provee servicios de estrategia digital, incluyendo pero no limitado a: gestión de campañas publicitarias (PPC), diseño y desarrollo web, automatización de CRM y consultoría de negocio.
                    </p>
                    <p className="mt-2 font-bold text-[#374e86]">
                        Nota Importante:
                    </p>
                    <p>
                        La Agencia provee medios y estrategias para aumentar la visibilidad y captación de pacientes potenciales. Sin embargo, no garantizamos un número específico de ventas, cirugías o consultas finales, ya que esto depende de factores externos como la habilidad de venta del equipo del Cliente, temporalidad y condiciones del mercado.
                    </p>
                </section>

                {/* SECCIÓN 3 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">3. Responsabilidad Médica y COFEPRIS</h2>
                    <p className="mb-4">
                        El Cliente declara ser un profesional de la salud debidamente certificado y contar con las cédulas profesionales necesarias para ejercer.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Aviso de Publicidad:</strong> Es responsabilidad exclusiva del Cliente contar con su Aviso de Publicidad ante COFEPRIS vigente. La Agencia puede brindar asesoría sobre mejores prácticas, pero no asume responsabilidad legal por multas o sanciones derivadas del incumplimiento de la Ley General de Salud.</li>
                        <li><strong>Veracidad:</strong> El Cliente garantiza que toda la información médica proporcionada para la creación de contenido es verídica, ética y comprobable.</li>
                    </ul>
                </section>

                {/* SECCIÓN 4 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">4. Pagos y Facturación</h2>
                    <p>
                        Los servicios se cobran por adelantado bajo un esquema de iguala mensual (retainer) o pago por proyecto, según se especifique en la propuesta comercial.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Las facturas se emiten en los primeros 5 días del mes.</li>
                        <li>En caso de falta de pago, La Agencia se reserva el derecho de pausar campañas y suspender el acceso a activos digitales hasta regularizar el saldo.</li>
                        <li>Los precios no incluyen el presupuesto publicitario (ad spend) pagado directamente a plataformas como Meta o Google.</li>
                    </ul>
                </section>

                {/* SECCIÓN 5 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">5. Propiedad Intelectual</h2>
                    <p>
                        Todo el material gráfico, códigos fuente (en caso de desarrollo web) y estrategias creadas por La Agencia son propiedad intelectual de La Agencia hasta que el Cliente haya cubierto el pago total acordado. Una vez liquidado, se ceden los derechos de uso comercial al Cliente. La Agencia se reserva el derecho de mostrar el trabajo realizado en su portafolio, salvo acuerdo de confidencialidad (NDA) firmado.
                    </p>
                </section>

                {/* SECCIÓN 6 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">6. Cancelación y Terminación</h2>
                    <p>
                        Para servicios recurrentes (igualas), se requiere un preaviso de 30 días para la cancelación del servicio. Esto permite realizar una transición ordenada de activos y accesos. No existen reembolsos por periodos de servicio ya iniciados.
                    </p>
                </section>

                {/* SECCIÓN 7 */}
                <section>
                    <h2 className="font-serif-display text-2xl text-[#374e86] mb-4">7. Jurisdicción</h2>
                    <p>
                        Para la interpretación y cumplimiento de los presentes términos, las partes se someten a la jurisdicción de los tribunales competentes en la ciudad de Monterrey, Nuevo León, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
                    </p>
                </section>

            </div>
        </main>
    );
};

export default TermsPage;