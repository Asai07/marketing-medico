// IMPORTANTE: NO importes Navbar ni Footer aquí.
import Hero from '../components/sections/Hero';
import IsThisForYou from '../components/sections/IsThisForYou';
import OurApproach from '../components/sections/OurApproach.jsx';
import TheRealProblem from '../components/sections/TheRealProblem';
import HowWeHelp from '../components/sections/HowWeHelp';
import SocialProof from '../components/sections/SocialProof';
import FinalCTA from '../components/sections/FinalCTA';
import FAQ from '../components/sections/FAQ';

export default function Home() {
    return (
        <main className="w-full relative min-h-screen">
            {/* Sin Navbar ni CustomCursor aquí, ya están en el layout */}
            <Hero />
            <IsThisForYou />
            <TheRealProblem />
            <OurApproach />
            <HowWeHelp />
            <SocialProof />
            <FinalCTA />
            <FAQ />
            {/* Sin Footer aquí */}
        </main>
    );
}