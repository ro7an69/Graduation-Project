import { motion } from "motion/react";
import { Play, Quote, Video } from "lucide-react";

export default function VideoScript() {
  return (
    <section id="presentation" className="px-6 md:px-12 py-24 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            Video <span className="text-stroke">Presentation</span>
          </h2>
          <div className="flex-1 h-[1px] bg-white/10" />
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Script & Context</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Video Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 aspect-video glass rounded-3xl overflow-hidden relative group"
          >
            <iframe 
              src="https://www.loom.com/embed/40815ff411854fbfb52768804c915087" 
              frameBorder="0" 
              webkitallowfullscreen="true" 
              mozallowfullscreen="true" 
              allowFullScreen 
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
            
            <div className="absolute bottom-6 left-6 flex items-center gap-2 glass px-3 py-1.5 rounded-full pointer-events-none">
              <Video className="w-3 h-3 text-brand" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Loom Recording</span>
            </div>
          </motion.div>

          {/* Script Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-l-4 border-l-brand"
            >
              <Quote className="w-8 h-8 text-brand/20 mb-4" />
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted italic">
                <p>
                  "Hey, I am <span className="text-white font-bold">Rohan</span>. I did my Master’s in Applied Data Science at Syracuse University, and honestly, this program changed how I think."
                </p>
                <p>
                  "I came in expecting to just learn tools — machine learning, coding, all of that. But what I actually learned was how to <span className="text-brand">solve real problems</span> using data."
                </p>
                <p>
                  "Two classes really stood out to me — one with <span className="text-white">Raj Dewan</span>, where I learned data visualization, and another with <span className="text-white">Josh Introne</span>, where I understood machine learning at a deeper level."
                </p>
                <p>
                  "Outside academics, moving from <span className="text-white">Dubai to the US</span> was a huge experience. It pushed me out of my comfort zone and helped me grow personally."
                </p>
                <p>
                  "All of this eventually led me to start my own company, <span className="text-brand font-bold">In10shin</span>, where we focus on building AI systems that actually solve business problems."
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2">Key Mentors</h4>
                <p className="text-xs text-muted leading-relaxed">Raj Dewan & Josh Introne</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2">Venture</h4>
                <p className="text-xs text-muted leading-relaxed">Founder, In10shin</p>
              </div>
            </div>

            <motion.a 
              href="https://www.loom.com/share/40815ff411854fbfb52768804c915087"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-black font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-white transition-colors"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch on Loom
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
