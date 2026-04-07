/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import VideoScript from "./components/VideoScript";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const projects = [
  {
    title: "South Carolina Weather Analysis",
    description: "A comprehensive exploratory data analysis of historical weather patterns in South Carolina. This project involved cleaning large datasets, performing statistical analysis, and creating compelling visualizations to tell a story about climate trends. It was a pivotal experience in collaborative data science and narrative-driven analysis.",
    tags: ["Weather Data", "Storytelling"],
    techStack: ["R", "RStudio", "ggplot2", "Tidyverse"],
    year: "2026",
    seed: "storm-clouds",
    isFavorite: true,
    learnings: ["Collaborative Analysis", "Data Storytelling"],
    link: "https://github.com/gautambalgi/South-Carolina-Weather-Analysis"
  },
  {
    title: "BRFSS Diabetes Risk Assessment",
    description: "A machine learning project using the Behavioral Risk Factor Surveillance System (BRFSS) dataset to predict diabetes risk. I implemented various classification models, performed feature engineering, and conducted rigorous model evaluation to understand the key drivers of health outcomes and model decision-making.",
    tags: ["Machine Learning", "Health Data"],
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    year: "2026",
    seed: "medical-research",
    learnings: ["Model Evaluation", "Decision Science"],
    link: "https://github.com/sid12super/BRFSS-Diabetes-Risk-Assessment"
  },
  {
    title: "TAP Tableau Dashboard",
    description: "An interactive visualization project for the Tuition Assistance Program (TAP). I transformed complex, multi-layered financial aid data into an intuitive dashboard that allows stakeholders to easily identify trends, gaps, and opportunities in student funding through clear information design.",
    tags: ["Tableau", "Data Visualization"],
    techStack: ["Tableau", "SQL", "Excel"],
    year: "2026",
    seed: "new-york-skyline",
    learnings: ["Information Design", "User Clarity"]
  },
  {
    title: "Airbus Procurement Dashboard",
    description: "Developed a high-impact procurement dashboard for Airbus to monitor global spend and supplier performance. The project involved integrating data from multiple sources to provide real-time KPIs that bridge the gap between raw procurement data and actionable business intelligence.",
    tags: ["Tableau", "Procurement", "KPIs"],
    techStack: ["Tableau Desktop", "SQL Server", "Alteryx"],
    year: "2026",
    seed: "airplane-hangar",
    learnings: ["KPI Tracking", "Supplier Performance"]
  },
  {
    title: "In10shin AI Knowledge Hub",
    description: "Co-founded and developed an AI-powered knowledge management system. Using RAG (Retrieval-Augmented Generation) and LLMs, we built a platform that allows organizations to query their internal documents in natural language, turning static data into an interactive intelligence hub.",
    tags: ["AI", "Knowledge Management"],
    techStack: ["Python", "OpenAI API", "LangChain", "Pinecone"],
    year: "2025",
    seed: "neural-network",
    learnings: ["AI Integration", "Knowledge Systems"]
  }
];

export default function App() {
  return (
    <main className="relative min-h-screen bg-bg selection:bg-brand selection:text-black">
      <Navbar />
      <Hero />
      
      <Overview />
      
      <VideoScript />
      
      <Blog />
      
      <section id="work" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            Portfolio <span className="text-stroke">Projects</span>
          </h2>
          <div className="flex-1 h-[1px] bg-white/10" />
          <span className="text-[10px] font-mono text-muted">01 / 05</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const CardContent = (
              <div className="group cursor-pointer">
                <div className="aspect-video bg-surface overflow-hidden rounded-2xl relative">
                  <div className="absolute inset-0 bg-brand/10 group-hover:bg-brand/0 transition-all duration-500" />
                  {project.isFavorite && (
                    <div className="absolute top-4 left-4 z-10 glass px-3 py-1 rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Favorite Project</span>
                    </div>
                  )}
                  <img 
                    src={`https://picsum.photos/seed/${project.seed}/1200/800`} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-tight group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mt-2 max-w-sm leading-relaxed">{project.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.learnings?.map(learning => (
                        <span key={learning} className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">
                          • {learning}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-[9px] uppercase tracking-widest font-bold text-muted mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack?.map(tech => (
                            <span key={tech} className="text-[10px] font-mono text-white/80 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-brand/60 border border-brand/20 px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded-full">{project.year}</span>
                </div>
              </div>
            );

            return project.link ? (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                {CardContent}
              </a>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
