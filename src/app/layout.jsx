import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ReactLenis } from 'lenis/react';

import { Playfair_Display, Syne, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const syne = Syne({
    subsets: ['latin'],
    variable: '--font-syne',
    display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-jakarta',
    display: 'swap',
});

export const metadata = {
    title: 'MADA Marketing',
    description: 'Growth Partner para clínicas.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            {/* 3. INYECTAMOS LAS 3 VARIABLES EN EL BODY */}
            <body className={`${playfair.variable} ${syne.variable} ${jakarta.variable} bg-[#F8F9FF] text-[#374e86] overflow-x-hidden selection:bg-[#bcb5ff] selection:text-[#374e86]`}>

                <ReactLenis root>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ReactLenis>

            </body>
        </html>
    );
}