import { motion } from 'framer-motion';
import { 
  Code2, Layers, Zap, Terminal, Server, Database,
  Braces, GitBranch, Network, Bot, BarChart3, Figma,
  HardDrive, FileCode2, Smartphone, Cloud, Cpu, Globe
} from 'lucide-react';

// Restructured data into categories
const skillCategories = [
  {
    id: 1,
    title: "Frontend & Design",
    subtitle: "Client-side architecture & UI",
    skills: [
      { name: 'React.js', icon: Code2 },
      { name: 'Tailwind CSS', icon: Layers },
      { name: 'Vite', icon: Zap },
      { name: 'JavaScript', icon: Braces },
      { name: 'Responsive UI', icon: Smartphone },
      { name: 'Figma', icon: Figma },
      {name: 'Framer Motion', icon: Zap },
    ]
  },
  {
    id: 2,
    title: "Backend & Systems",
    subtitle: "Server logic & databases",
    skills: [
      { name: 'Python', icon: Terminal },
      { name: 'Django', icon: Server },
      { name: 'SQL DBs', icon: Database },
      { name: 'MySQL', icon: HardDrive },
      { name: 'REST APIs', icon: Network },
      { name: 'Web Architecture', icon: Globe },
      {name: 'PostgreSQL', icon: Database },
    ]
  },
  {
    id: 3,
    title: "Specialized & Tools",
    subtitle: "Deployment, data & design",
    skills: [
      { name: 'AI Integration', icon: Bot },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'Data Structures', icon: Cpu },
      { name: 'Git / GitHub', icon: GitBranch },
      { name: 'Cloud Deployment', icon: Cloud },
      { name: 'Docker', icon: FileCode2 },
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl px-6 md:px-12 py-8 mx-auto" id="skills">
      
      {/* Section Header */}
      <div className="mb-16 md:text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-[#f8f8f5] mb-4"
        >
          Technical <span className="italic text-primary">Arsenal</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#cbbc90] tracking-widest uppercase text-sm font-bold"
        >
          Tools & Technologies
        </motion.p>
      </div>

      {/* The Bento Box Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.id} 
            variants={cardVariants} 
            className="flex flex-col p-8 rounded-[2rem] bg-[#1a1812]/50 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-colors duration-500 relative overflow-hidden group"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

            {/* Category Header */}
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-serif text-[#f8f8f5] mb-2">{category.title}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#cbbc90]/70">
                {category.subtitle}
              </p>
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <skill.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="text-xs font-bold tracking-wider text-[#cbbc90] group-hover/pill:text-[#f8f8f5]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;