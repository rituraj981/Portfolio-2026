import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl px-6 md:px-12 py-12 mx-auto" id="projects">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-5xl font-serif dark:text-[#f8f8f5]">
          <br /><span className="italic text-[#f2b90d]">Projects</span>
        </h2>
        <span className="text-[#cbbc90] uppercase tracking-widest text-sm mb-2">Portfolio 2026</span>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className={`group relative overflow-hidden rounded-2xl
              ${project.size === 'large' ? 'md:col-span-8 aspect-video' : 'md:col-span-4 aspect-[3/4] md:aspect-auto'}
            `}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-102"
              style={{ backgroundImage: `url(${project.image})` }} // Variable used directly
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1a1812]/70 md:bg-[#1a1812]/40 md:group-hover:bg-[#1a1812]/80 transition-colors duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 z-10">
              
              {/* <span className="text-[#f2b90d] font-bold text-xs tracking-widest mb-2 uppercase drop-shadow-md">
                {project.category}
              </span> */}
              <h3 className="text-2xl md:text-3xl font-serif text-[#f8f8f5] mb-4 drop-shadow-lg">
                {project.title}
              </h3>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-xs text-[#f8f8f5]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links (Live & GitHub) */}
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-primary text-[#1a1812] text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_4px_15px_rgba(242,185,13,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4 md:w-4 md:h-4 stroke-[2.5px]" />
                    Live Site
                  </a>
                )}

                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-[#f8f8f5] text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Github className="w-4 h-4 md:w-4 md:h-4" />
                    Code
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;