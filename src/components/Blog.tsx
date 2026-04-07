import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, User } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="px-6 md:px-12 py-24 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand">Journal / 01</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>
          
          <h2 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
            My Journey Through <span className="text-stroke">Applied Data Science</span>
          </h2>

          <div className="flex flex-wrap items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-muted border-y border-white/10 py-6">
            <div className="flex items-center gap-2">
              <User className="w-3 h-3 text-brand" />
              <span>By Rohan Gopalan</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3 text-brand" />
              <span>April 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-brand" />
              <span>5 Min Read</span>
            </div>
          </div>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light italic border-l-4 border-brand pl-8">
              "When I joined the program at Syracuse University, I thought I knew what I was signing up for."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted leading-relaxed">
            <div className="space-y-6">
              <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tight">The Expectations</h3>
              <p>I expected the standard curriculum: coding, machine learning, and data analysis. And yes, I got all of that. But what I did not expect was how much this program would change the way I think, especially through the invaluable <span className="text-brand">connection with alumni</span> who shared real-world perspectives.</p>
              <ul className="space-y-2 list-none p-0">
                {["Coding", "Machine Learning", "Data Analysis"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                    <span className="text-sm uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tight">The Reality</h3>
              <p>Very quickly, I realized something fundamental: <span className="text-brand font-bold">Data science is not about tools. It is about thinking.</span></p>
              <p>A big part of the program was working with <span className="text-white">R and Python</span>. At first, it was frustrating. It was not what I was used to. But over time, it forced me to evolve.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl"
          >
            <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-8 text-center">
              The <span className="text-brand">Evolution</span> of Thought
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Slow Down", desc: "Learning to pause and assess before diving into code." },
                { title: "Think Analytically", desc: "Breaking complex problems into manageable data structures." },
                { title: "Understand 'Why'", desc: "Grasping the underlying logic behind every algorithm." }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="text-4xl font-display font-bold text-stroke">0{i+1}</div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white">{item.title}</h4>
                  <p className="text-[11px] text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <h3 className="font-display font-bold text-4xl uppercase tracking-tighter">
              Projects That Actually <span className="text-stroke">Meant Something</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex-shrink-0 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all duration-500">
                  <span className="font-display font-bold text-2xl">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand transition-colors">South Carolina Weather Analysis</h4>
                  <p className="text-muted text-sm mt-4 leading-relaxed">
                    This was my favorite project because it was my first real encounter with <span className="text-white">storytelling through data</span>. 
                    Working in <span className="text-white">R and Python</span>, I learned that a visualization isn't just a chart—it's a narrative. It taught me how to handle messy, 
                    unstructured climate data and turn it into something that a non-expert could look at and immediately understand the impact of climate change.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex-shrink-0 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all duration-500">
                  <span className="font-display font-bold text-2xl">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand transition-colors">BRFSS Diabetes Risk Assessment</h4>
                  <p className="text-muted text-sm mt-4 leading-relaxed">
                    This project was my deep dive into <span className="text-white">Machine Learning and Decision Science</span>. 
                    It wasn't just about getting the highest accuracy; it was about understanding *why* the model made certain predictions. 
                    It contributed to my education by showing me the ethical and practical implications of using ML in healthcare.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex-shrink-0 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all duration-500">
                  <span className="font-display font-bold text-2xl">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand transition-colors">TAP Tableau Dashboard</h4>
                  <p className="text-muted text-sm mt-4 leading-relaxed">
                    The TAP project was where my <span className="text-white">Information Design</span> skills really clicked. 
                    I had to take complex financial aid data and make it accessible for students. It taught me that data is only 
                    valuable if it empowers the user to make a better decision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tight">Beyond the Classroom</h3>
                <p className="text-muted text-sm leading-relaxed">
                  My internship at <span className="text-brand font-bold">Airbus</span> was a game-changer. Building a procurement dashboard 
                  to track global spend and supplier performance showed me how data science operates at scale. It wasn't just about 
                  the code; it was about understanding the supply chain business logic.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Additionally, co-founding <span className="text-brand font-bold">In10shin AI</span> allowed me to apply my 
                  technical skills to an entrepreneurial venture. Building a RAG-based knowledge hub taught me about the 
                  bleeding edge of AI and the importance of solving real organizational pain points.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tight">Favorite Class & Surprises</h3>
                <p className="text-muted text-sm leading-relaxed">
                  My favorite class was <span className="text-white font-bold">IST 719: Information Visualization</span>. 
                  It was here that I realized data science is as much an art as it is a science. The biggest surprise of the 
                  program was how much I ended up loving the <span className="text-brand">analytical thinking</span> process 
                  more than the actual coding.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The best part of the program? The <span className="text-white">collaborative culture</span> at Syracuse. 
                  Exchanging ideas with peers from diverse backgrounds made every project richer and more insightful.
                </p>
              </div>
            </div>

            <div className="p-12 bg-white/5 rounded-3xl border border-white/10">
              <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tight mb-8">Achieving Learning Outcomes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Data Structuring", desc: "Learned to clean and structure messy datasets in R, Python, and SQL." },
                  { label: "Predictive Modeling", desc: "Built and evaluated classification models for health risk." },
                  { label: "Visual Communication", desc: "Mastered Tableau and ggplot2 for stakeholder storytelling." },
                  { label: "Business Strategy", desc: "Applied data insights to procurement and AI ventures." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand">{item.label}</p>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
