import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const backend = import.meta.env.VITE_BACKEND_URL;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${backend}/api/reviews`);
        const data = await res.json();
        setReviews(data.items || []);
      } catch {}
    }
    load();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          Loved by fishers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-2xl bg-slate-800/60 border border-white/10 p-5 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-emerald-400/20 border border-emerald-400/30" />
                <div className="text-white font-semibold">{r.username}</div>
              </div>
              <div className="mt-2 text-emerald-300 text-sm">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
              <div className="mt-2 text-slate-300 text-sm">{r.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
