import { Terminal, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-[60] bg-[#1a1812]/80 backdrop-blur-md border-b border-primary/10">
      
      {/* Adjusted padding on mobile (px-4 py-4) to give more breathing room */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 md:px-12">
        
        {/* Logo Section */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group cursor-pointer" aria-label="Go to home">
          <div className="size-8 sm:size-10 bg-primary flex items-center justify-center rounded transition-all duration-500 group-hover:rotate-[360deg] shadow-[0_0_15px_rgba(242,185,13,0.3)]">
            <Terminal className="text-[#1a1812] w-5 h-5 sm:w-6 sm:h-6 stroke-[3px]" />
          </div>
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-tighter text-[#f8f8f5]">
            RP<span className="text-primary">.</span>
          </h2>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Resume Download: Now visible on mobile! */}
          <a 
            href="/Rituraj-resume.pdf" 
            download="Rituraj-resume.pdf"
            className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-bold uppercase tracking-widest text-[#cbbc90] hover:text-primary transition-colors cursor-pointer group"
          >
            {/* "Download" word is hidden on mobile, visible on tablet/desktop */}
            <span className="hidden sm:inline">Download </span>
            Resume 
            <Download className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          {/* Hire Me Button */}
          <a 
            href="#contact"
            className="bg-primary text-[#1a1812] px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg font-bold text-[10px] sm:text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_5px_15px_rgba(242,185,13,0.2)] hover:shadow-[0_8px_25px_rgba(242,185,13,0.4)] block"
          >
            Hire Me
          </a>
          
        </div>
      </div>
    </header>
  );
};

export default Header;