import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  // 1. Define your social links here
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/riturajpandey07/'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/rituraj981'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:riturajpandey981@gmail.com' 
    }
  ];

  return (
    <footer className="w-full max-w-7xl px-6 md:px-12 py-32 mt-24 mb-12 bg-primary rounded-[3rem] text-[#1a1812] text-center flex flex-col items-center" id="contact">
      <span className="font-bold uppercase tracking-[0.4em] text-sm mb-6">Let's build something bold</span>
      
      {/* Primary Email Link */}
      <a 
        href="mailto:riturajpandey981@gmail.com" 
        className="text-3xl md:text-6xl font-serif font-black leading-tight mb-12 hover:scale-95 transition-transform block break-all px-4"
      >
        riturajpandey981@gmail.com
      </a>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
        {/* Call to Action Button */}
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#1a1812] text-primary px-12 py-5 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 hover:shadow-2xl transition-all cursor-pointer"
        >
          Let's connect
        </a>

        {/* Social Icons Mapping */}
        <div className="flex gap-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target={social.url.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              aria-label={social.name}
              className="size-12 rounded-full border-2 border-[#1a1812]/20 flex items-center justify-center hover:bg-[#1a1812] hover:text-primary transition-all group"
            >
              <social.icon size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-20 pt-8 border-t border-[#1a1812]/10 w-full flex flex-col md:flex-row justify-between text-[10px] font-bold uppercase tracking-widest opacity-60">
        <span>© 2026 Rituraj Pandey</span>
        <span>Built with React 19 & Tailwind v4</span>
      </div>
    </footer>
  );
};

export default Footer;