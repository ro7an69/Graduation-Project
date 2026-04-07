import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-12 py-24 border-t border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="font-display font-bold text-6xl md:text-8xl uppercase tracking-tighter mb-8">
              Let's <span className="text-stroke">Connect</span>
            </h2>
            <p className="text-muted max-w-md text-lg leading-relaxed">
              Open for collaborations, freelance opportunities, or just a 
              friendly chat about design and technology.
            </p>
            
            <div className="flex gap-6 mt-12">
              {[
                { icon: Github, label: "Github", href: "#" },
                { icon: Linkedin, label: "Linkedin", href: "https://www.linkedin.com/in/rohan-gopalan-4bb7661b1/" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:rohangopalan3@gmail.com" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted mb-6">Contact</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand mb-1">Dubai</p>
                    <a href="tel:+971585897830" className="text-sm font-mono hover:text-brand transition-colors">+971 58 589 7830</a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand mb-1">United States</p>
                    <a href="tel:+13157184141" className="text-sm font-mono hover:text-brand transition-colors">+1 315 718 4141</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted mb-6">Location</h4>
                <p className="text-sm uppercase tracking-wider">Syracuse, NY</p>
                <p className="text-sm uppercase tracking-wider mt-2">Dubai, UAE</p>
                <p className="text-sm uppercase tracking-wider mt-4 text-brand/60 font-bold">Remote Friendly</p>
              </div>
            </div>

            <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-8">
              <span className="text-[10px] font-mono text-muted uppercase">© 2026 Rohan Gopalan</span>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Built with Passion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
