import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="w-full max-w-4xl px-6 py-24 mx-auto" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif text-bg-light mb-4">Get in <span className="italic text-primary">Touch</span></h2>
        <p className="text-gold tracking-widest uppercase text-xs font-bold">Have a project in mind? Let's talk.</p>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
        action="https://formspree.io/f/your-id" // Replace with your actual Formspree ID
        method="POST"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Name Input */}
          <div className="relative">
            <input type="text" name="name" id="name" placeholder=" " required
              className="peer w-full bg-transparent border-b-2 border-primary/20 py-4 outline-none focus:border-primary transition-colors text-bg-light" />
            <label htmlFor="name" className="absolute left-0 top-4 text-gold uppercase text-[10px] font-bold tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]">
              Full Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input type="email" name="email" id="email" placeholder=" " required
              className="peer w-full bg-transparent border-b-2 border-primary/20 py-4 outline-none focus:border-primary transition-colors text-bg-light" />
            <label htmlFor="email" className="absolute left-0 top-4 text-gold uppercase text-[10px] font-bold tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]">
              Email Address
            </label>
          </div>
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea name="message" id="message" rows="4" placeholder=" " required
            className="peer w-full bg-transparent border-b-2 border-primary/20 py-4 outline-none focus:border-primary transition-colors text-bg-light resize-none" />
          <label htmlFor="message" className="absolute left-0 top-4 text-gold uppercase text-[10px] font-bold tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-[10px]">
            Your Message
          </label>
        </div>

        <button type="submit" className="group flex items-center gap-3 bg-primary text-bg-dark px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all cursor-pointer">
          Send Message
          <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;