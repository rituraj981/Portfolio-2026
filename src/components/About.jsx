import { motion } from 'framer-motion';
// 1. Import the image from your assets folder
import profileImg from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section className="w-full max-w-7xl px-6 md:px-12 py-24 bg-[#12110d]/50 rounded-3xl mb-24 mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Portrait Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group w-full max-w-md mx-auto md:max-w-none"
        >
          <div className="absolute -inset-4 border border-primary/30 rounded-2xl group-hover:inset-0 transition-all duration-500"></div>
          <div className="aspect-[4/5] bg-neutral-800 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            
            {/* 2. Use the imported variable in the inline style */}
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${profileImg})` }}
            />
            
          </div>
        </motion.div>

        {/* Text & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif dark:text-[#f8f8f5]">
            The Mind Behind <br /><span className="italic text-primary">the Code</span>
          </h2>
          <p className="text-lg text-gold leading-relaxed">
            I specialize in bridging the gap between robust backend architecture and sleek, performant frontend design. My approach is rooted in writing clean, scalable logic while ensuring every pixel serves a purpose.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-primary font-bold text-3xl">03+</h4>
              <p className="text-sm uppercase tracking-widest text-gold mt-1">Years Coding</p>
            </div>
            <div>
              <h4 className="text-primary font-bold text-3xl">15+</h4>
              <p className="text-sm uppercase tracking-widest text-gold mt-1">Projects Built</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;