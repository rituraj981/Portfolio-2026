import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const Experience = () => {
  // Container animation logic
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Individual row animation logic
  const rowVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full max-w-7xl px-6 md:px-12 py-16 md:py-12 mx-auto" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif text-[#f8f8f5] mb-12 md:mb-16"
      >
        The <span className="italic text-primary">Journey</span>
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-0"
      >
        {experience.map((item) => (
          <motion.div
            key={item.id}
            variants={rowVariants}
            className="group flex flex-col md:grid md:grid-cols-[200px_1fr_200px] gap-4 md:gap-0 border-b border-primary/10 py-8 md:py-12 hover:bg-primary/5 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-500"
          >
            {/* Year Range */}
            <span className="text-[#cbbc90] font-bold text-xs md:text-sm tracking-widest mt-1 md:mt-0">
              {item.period}
            </span>

            {/* Role & Description */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-[#f8f8f5] group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              
              {/* Mobile Company Name: Appears neatly under the role on phones */}
              <span className="md:hidden text-primary font-serif italic text-lg mb-2">
                {item.company}
              </span>
              
              <p className="text-[#cbbc90] text-sm md:text-base max-w-xl leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>

            {/* Desktop Company Name: Aligned to the far right on large screens */}
            <div className="hidden md:flex justify-end items-start">
              <span className="text-primary font-serif italic text-xl">
                {item.company}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;