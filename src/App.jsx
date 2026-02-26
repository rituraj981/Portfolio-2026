import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[#1a1812] text-slate-100 font-sans overflow-x-hidden selection:bg-primary selection:text-[#1a1812]">
      {/* Global Overlays */}
      <Navbar />
      <Header />
      
      {/* Main Content Flow */}
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <ProjectGrid />
        <Experience />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;