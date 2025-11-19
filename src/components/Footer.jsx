export default function Footer(){
  return (
    <footer className="py-10 border-t border-white/10 text-center text-slate-400">
      <div className="container mx-auto px-6">
        © {new Date().getFullYear()} Fishing QOL Mod • Not affiliated with Hypixel or Mojang.
      </div>
    </footer>
  )
}
