import { Home, User, LayoutGrid, History, Mail, GraduationCap, Wrench } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Wrench, label: 'Skills' }, // Added
  { id: 'projects', icon: LayoutGrid, label: 'Work' },
  { id: 'experience', icon: History, label: 'Experience' },
  { id: 'education', icon: GraduationCap, label: 'Education' }, // Added
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navbar = () => {
  return (
    <>
      {/* Desktop Vertical Nav */}
      <nav className="fixed right-6 xl:right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 items-center p-4 rounded-full bg-[#1a1812]/50 backdrop-blur-md border border-primary/20 shadow-2xl">
        {navItems.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center gap-4">
            <a 
              href={`#${item.id}`} 
              aria-label={item.label}
              className="group relative p-2 flex items-center justify-center"
            >
              <item.icon className="w-6 h-6 text-[#cbbc90] group-hover:text-primary transition-colors duration-300" />
              
              <span className="absolute right-14 px-3 py-1 rounded bg-primary text-[#1a1812] text-[10px] font-bold uppercase tracking-widest pointer-events-none whitespace-nowrap opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {item.label}
              </span>
            </a>

            {/* Divider logic: places line before the last item (Contact) */}
            {index === navItems.length - 2 && (
              <div className="w-px h-10 bg-primary/20 my-1" />
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex lg:hidden items-center justify-between w-[92%] max-w-[500px] px-6 py-4 rounded-full bg-[#1a1812]/85 backdrop-blur-lg border border-primary/20 shadow-2xl">
        {navItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            aria-label={item.label}
            className="text-[#cbbc90] hover:text-primary active:scale-95 transition-all p-2"
          >
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;