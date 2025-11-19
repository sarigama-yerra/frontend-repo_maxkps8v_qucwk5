import { motion } from "framer-motion";

const features = [
  {
    title: "Sea Creature Chain",
    desc: "Predictive timers and chain tracking so you never miss a spawn.",
  },
  {
    title: "Bobber Overlay",
    desc: "High-contrast visual + audio cues tuned for skyblock waters.",
  },
  {
    title: "Trophy Tracker",
    desc: "Instant feedback on trophies/hr, streaks, and loot value.",
  },
  {
    title: "Festival Presets",
    desc: "Swap between Marina or Winter fishing profiles in one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          Smarter tools, cleaner UI
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl bg-slate-800/60 border border-white/10 p-5 backdrop-blur"
            >
              <div className="text-emerald-400 text-sm font-semibold mb-1">Feature</div>
              <div className="text-white font-semibold">{f.title}</div>
              <div className="text-slate-300 text-sm mt-1">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
