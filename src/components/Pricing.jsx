import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const backend = import.meta.env.VITE_BACKEND_URL;

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${backend}/api/plans`);
        const data = await res.json();
        setPlans(data.items || []);
      } catch (e) {
        setError("Failed to load plans");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleBuy(name, price) {
    const email = prompt("Enter your email for license delivery:");
    if (!email) return;
    try {
      const res = await fetch(`${backend}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan_name: name, email }),
      });
      const data = await res.json();
      if (data.success) alert(`Order placed! ID: ${data.order_id}`);
      else alert("Checkout failed");
    } catch (e) {
      alert("Checkout error");
    }
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          Choose your plan
        </motion.h2>

        {loading && <div className="text-slate-300">Loading plans...</div>}
        {error && <div className="text-red-400">{error}</div>}

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative rounded-2xl bg-slate-900/70 border border-white/10 p-6 backdrop-blur group`}
            >
              {p.tag && (
                <div className="absolute -top-3 left-6 bg-emerald-400 text-emerald-950 px-3 py-1 rounded-lg text-xs font-bold shadow">
                  {p.tag}
                </div>
              )}
              <div className="text-white text-xl font-bold">{p.name}</div>
              <div className="text-slate-300 mt-1">${p.price?.toFixed(2)} / mo</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {p.features?.map((f, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleBuy(p.name, p.price)} className="mt-6 w-full px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition">
                Get {p.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
