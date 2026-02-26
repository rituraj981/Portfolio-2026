import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  // 1. Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  // 2. Network Constellation Data
  // Using percentages (x, y) so it is perfectly responsive on any screen
  const nodes = [
    { id: 0, icon: Github, label: 'GitHub', x: 50, y: 15, href: "https://github.com/rituraj981" },
    { id: 1, icon: Linkedin, label: 'LinkedIn', x: 85, y: 35, href: "https://www.linkedin.com/in/riturajpandey07/" },
    { id: 2, icon: Twitter, label: 'Twitter', x: 75, y: 75, href: "https://twitter.com" },
    { id: 3, icon: Mail, label: 'Email', x: 25, y: 80, href: "mailto:riturajpandey981@gmail.com" },
    { id: 4, icon: Code2, label: 'Projects', x: 10, y: 40, href: "#projects" },
    { id: 5, icon: Terminal, label: 'Resume', x: 45, y: 50, href: "/" }, // Center Hub
  ];

  // Define which nodes connect to each other (drawing the lines)
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], // The Outer Ring
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], // Spokes connecting to the Center
  ];

  return (
    <section 
      className="w-full max-w-7xl px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh] mx-auto" 
      id="hero"
    >
      {/* LEFT COLUMN: Typographic Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start justify-center relative z-10"
      >
        <div className="flex flex-col gap-2 mb-4">
          <motion.span 
            variants={itemVariants}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            Frontend Developer
          </motion.span>
          <motion.div 
            variants={itemVariants}
            className="h-px w-20 bg-primary shadow-[0_0_10px_rgba(242,185,13,0.5)]" 
          />
        </div>

        {/* Adjusted clamp size so it fits perfectly in a 2-column layout */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.85] text-[#f8f8f5] tracking-tighter select-none"
        >
          Rituraj <br />
          <span className="italic text-primary inline-block hover:translate-x-4 transition-transform duration-500 cursor-default">
            Pandey
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-8 max-w-xl">
          <p className="text-lg md:text-xl text-[#cbbc90] font-light leading-relaxed">
            Bridging the gap between intelligent systems and intuitive design. I build high-performance web apps powered by 
            <span className="text-[#f8f8f5] font-medium mx-2">modern frameworks</span>and 
            <span className="text-[#f8f8f5] font-medium mx-2">seamless AI integrations.</span> 
            
          </p>
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN: The Interactive Network Constellation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative w-full aspect-square max-w-[500px] mx-auto mt-10 lg:mt-0"
      >
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[60%] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        {/* The SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map(([start, end], i) => (
            <motion.line
              key={i}
              x1={`${nodes[start].x}%`} 
              y1={`${nodes[start].y}%`}
              x2={`${nodes[end].x}%`} 
              y2={`${nodes[end].y}%`}
              stroke="rgba(203, 188, 144, 0.2)" // Gold color with low opacity
              strokeWidth="1.5"
              strokeDasharray="6 6" // Creates the dashed look
              animate={{
                strokeDashoffset: [0, -24], // Makes the dashes "flow"
                opacity: [0.3, 0.8, 0.3]    // Makes the lines pulse
              }}
              transition={{
                strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" },
                opacity: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}
        </svg>

        {/* The Interactive Nodes (Icons) */}
        {nodes.map((node) => (
          <motion.a
            key={node.id}
            href={node.href}
            target={node.href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            aria-label={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
            style={{ top: `${node.y}%`, left: `${node.x}%` }}
            // Floating animation for each node
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4 + (node.id % 2), repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Tooltip Label */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-[#1a1812] text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {node.label}
            </span>
            
            {/* The Icon Glass Card */}
            <div className={`
              p-3 sm:p-4 rounded-full glass-card transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]
              group-hover:bg-primary group-hover:text-[#1a1812] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(242,185,13,0.5)]
              ${node.id === 5 ? 'text-primary bg-primary/10 border-primary/30' : 'text-[#cbbc90]'}
            `}>
              <node.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;