import { useRef } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    const el = document.querySelector('#pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="logo" className="h-7 w-7" />
            <span className="font-bold text-white">Fishing QOL</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white text-slate-300">Features</a>
            <a href="#pricing" className="hover:text-white text-slate-300">Pricing</a>
            <a href="#reviews" className="hover:text-white text-slate-300">Reviews</a>
          </nav>
          <button onClick={scrollToPricing} className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold">Get the Mod</button>
        </div>
      </header>

      <main>
        <Hero onCTAClick={scrollToPricing} />
        <Features />
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
