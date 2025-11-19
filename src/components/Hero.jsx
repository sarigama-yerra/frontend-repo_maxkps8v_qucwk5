import { motion } from "framer-motion";

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(34,197,94,0.25),transparent),radial-gradient(500px_250px_at_80%_10%,rgba(56,189,248,0.25),transparent)]" />
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white"
            >
              Fishing QOL for Hypixel Skyblock
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-5 text-lg text-slate-300 max-w-xl"
            >
              Crystal-clear HUD, smarter timers, and buttery-smooth overlays. Reel in trophies faster with a mod built by fishers for fishers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button onClick={onCTAClick} className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold shadow-lg shadow-emerald-500/25 transition">
                Get the Mod
              </button>
              <a href="#features" className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white border border-white/10 transition">
                Explore Features
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-3 backdrop-blur-xl">
              <img src="/fishing-hero.png" alt="Fishing UI" className="rounded-xl" />
              <div className="absolute -bottom-6 -right-6 bg-emerald-400 text-emerald-950 px-4 py-2 rounded-xl shadow-xl">+12% Trophies/hr</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
