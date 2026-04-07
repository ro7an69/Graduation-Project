import { motion } from "motion/react";
import { CheckCircle2, Database, Layout, LineChart, Users } from "lucide-react";

export default function Overview() {
  const outcomes = [
    { icon: Database, text: "Break down messy, real-world problems into structured data problems" },
    { icon: LineChart, text: "Build models that are not just accurate, but meaningful" },
    { icon: Layout, text: "Communicate insights in a way that non-technical people can understand" },
    { icon: CheckCircle2, text: "Design solutions that actually solve business problems" },
    { icon: Users, text: "Work with people, not just data" }
  ];

  return (
    <section id="about" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter mb-8">
              Program <span className="text-stroke">Outcomes</span>
            </h2>
            <p className="text-xl text-muted leading-relaxed mb-12">
              During my Master’s in <span className="text-white font-bold">Applied Data Science</span> at Syracuse University, 
              I did not just learn tools — I learned how to actually <span className="text-brand italic">think with data</span>.
            </p>
          </motion.div>

          <div className="space-y-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                  <outcome.icon className="w-5 h-5" />
                </div>
                <p className="flex-1 text-muted group-hover:text-white transition-colors py-2">
                  {outcome.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="font-display font-bold text-2xl uppercase tracking-tight mb-8">
              Project <span className="text-stroke">Highlights</span>
            </h3>
            <div className="space-y-8">
              {[
                { title: "SC Weather Analysis", desc: "A deep dive into climate storytelling using R and Python." },
                { title: "Diabetes Risk ML", desc: "Predictive modeling and decision science in healthcare." },
                { title: "TAP Dashboard", desc: "Simplifying financial aid data for student clarity." },
                { title: "Airbus Procurement", desc: "Real-world KPI tracking for global supply chains." },
                { title: "In10shin AI Hub", desc: "Entrepreneurial AI knowledge management platform." }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-sm font-bold uppercase tracking-widest text-brand/60 group-hover:text-brand transition-colors">{item.title}</span>
                  <span className="text-xs text-muted text-right max-w-[200px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full" />
            
            <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-6">
              Mapping Projects to Outcomes
            </h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand mb-2">Outcome 1 & 2: Problem Solving & Modeling</p>
                <p className="text-xs text-muted leading-relaxed">
                  Demonstrated through the <span className="text-white">Diabetes Risk Assessment</span> and <span className="text-white">SC Weather Analysis</span>, where I broke down complex health and climate questions into predictive and descriptive models.
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand mb-2">Outcome 3: Communication</p>
                <p className="text-xs text-muted leading-relaxed">
                  Achieved via the <span className="text-white">TAP Dashboard</span> and <span className="text-white">Airbus Procurement</span> projects, focusing on turning raw data into intuitive visual stories for non-technical stakeholders.
                </p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand mb-2">Outcome 4 & 5: Business Value & Collaboration</p>
                <p className="text-xs text-muted leading-relaxed">
                  Proven by <span className="text-white">In10shin AI Hub</span>, where I co-founded a platform to solve real-world organizational knowledge gaps using AI.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-brand/5 rounded-2xl border border-brand/20">
              <p className="text-sm leading-relaxed text-muted">
                The program was <span className="text-brand font-bold uppercase tracking-widest text-xs">very R and Python-heavy</span>, 
                and working extensively with <span className="text-white">RStudio and Jupyter</span> forced me to become comfortable 
                with data at a deeper level. At first, it was uncomfortable, but over time it shaped how I think analytically.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-bg bg-surface flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/tool${i}/100/100`} 
                      alt="Tool" 
                      className="w-full h-full object-cover opacity-50"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Extensive Toolset Mastery</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
