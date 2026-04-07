import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Background Accent */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-brand" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand">Rohan | Graduate Portfolio 2026</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 glass px-4 py-2 rounded-full"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Syracuse_Orange_S.svg/1200px-Syracuse_Orange_S.svg.png" 
              alt="Syracuse University" 
              className="w-6 h-6 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest">Syracuse University</span>
          </motion.div>
        </motion.div>

        <h1 className="font-display font-bold leading-[0.85] tracking-tighter uppercase">
          <motion.span 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block text-6xl sm:text-8xl md:text-[10vw] lg:text-[12vw]"
          >
            Rohan
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block text-6xl sm:text-8xl md:text-[10vw] lg:text-[12vw] text-stroke ml-[10%]"
          >
            Gopalan
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block text-6xl sm:text-8xl md:text-[8vw] lg:text-[10vw] text-brand"
          >
            Data Science Graduate
          </motion.span>
        </h1>

        <div className="mt-12 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-md text-muted leading-relaxed text-sm md:text-base"
          >
            Graduate student at <span className="text-white font-bold">Syracuse University</span>. 
            Crafting immersive digital experiences through the intersection of code, 
            design, and human psychology. A showcase of innovation and technical excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-black transition-all duration-500">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold">Explore Projects</span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-6 md:left-12 hidden lg:block">
        <div className="flex flex-col gap-2">
          {["01", "02", "03"].map((num) => (
            <div key={num} className="flex items-center gap-4 group cursor-pointer">
              <span className="text-[10px] font-mono text-muted group-hover:text-brand">{num}</span>
              <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-brand transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
