import { Target, Search, Palette, Megaphone } from 'lucide-react';

export const servicesData = [
    {
        id: "01",
        displayTitle: "ADS",
        fullTitle: "Pacientes Calificados",
        description: "Dejamos de perseguir 'likes'...",
        icon: Target, // <--- SOLO EL NOMBRE, sin < > ni className
        color: "bg-[#F4F1EA]",
        textColor: "text-[#1A1A1A]",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "02",
        displayTitle: "SEO",
        fullTitle: "Autoridad Local",
        description: "Cuando alguien busca tu especialidad...",
        icon: Search, // <--- SOLO EL NOMBRE
        color: "bg-[#D6E0D6]",
        textColor: "text-[#1A1A1A]",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "03",
        displayTitle: "BRAND",
        fullTitle: "Identidad Clínica",
        description: "La medicina entra por los ojos...",
        icon: Palette, // <--- SOLO EL NOMBRE
        color: "bg-[#1C1C1C]",
        textColor: "text-[#FDFBF7]",
        image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "04",
        displayTitle: "CRM",
        fullTitle: "Retención & Lealtad",
        description: "Automatizamos el seguimiento...",
        icon: Megaphone, // <--- SOLO EL NOMBRE
        color: "bg-[#8FA89B]",
        textColor: "text-white",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    }
];