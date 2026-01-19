// IMPORTANTE: NO importes Navbar ni Footer aquí.
// import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Metrics from '../components/sections/Metrics';
import Process from '../components/sections/Process';
import SelectedCases from '../components/sections/SelectedCases';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';

export default function Home() {
    return (
        <main className="w-full relative min-h-screen">
            {/* Sin Navbar ni CustomCursor aquí, ya están en el layout */}
            {/* <Hero /> */}
            <Services />
            <Process />
            <Metrics />
            <SelectedCases />
            <Testimonials />
            <FAQ />
            {/* Sin Footer aquí */}
        </main>
    );
}