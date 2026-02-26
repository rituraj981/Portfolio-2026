import { motion } from 'framer-motion';
import { education } from '../data/education';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const rowVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full max-w-7xl px-6 md:px-12 py-16 md:py-12 mx-auto" id="education">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif text-[#f8f8f5] mb-12 md:mb-16"
      >
        Academic <span className="italic text-[#f2b90d]">Background</span>
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-0"
      >
        {education.map((item) => (
          <motion.div
            key={item.id}
            variants={rowVariants}
            className="group flex flex-col md:grid md:grid-cols-[200px_1fr_200px] gap-4 md:gap-0 border-b border-[#f2b90d]/10 py-8 md:py-12 hover:bg-[#f2b90d]/5 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-500"
          >
            {/* Year Range */}
            <span className="text-[#cbbc90] font-bold text-xs md:text-sm tracking-widest mt-1 md:mt-0">
              {item.period}
            </span>

            {/* Degree & Description */}
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-[#f8f8f5] group-hover:text-[#f2b90d] transition-colors">
                {item.degree}
              </h3>
              
              {/* Mobile Institution Name: Appears under degree on phones */}
              <span className="md:hidden text-[#f2b90d] font-serif italic text-lg mb-2">
                {item.institution}
              </span>
              
              <p className="text-[#cbbc90] text-sm md:text-base max-w-xl leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Desktop Institution Name: Aligned to the far right on large screens */}
            <div className="hidden md:flex justify-end items-start">
              <span className="text-[#f2b90d] font-serif italic text-xl text-right">
                {item.institution}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;