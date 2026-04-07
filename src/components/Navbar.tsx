import { motion } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-xs">RG</span>
        </div>
        <span className="font-display font-bold tracking-tighter text-xl uppercase">Rohan Gopalan</span>
      </div>

      <div className="hidden md:flex items-center gap-12">
        {["Work", "About", "Presentation", "Blog", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-widest font-medium hover:text-brand transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-bold group">
          Let's talk
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
        <button className="p-2 glass rounded-full md:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
}
