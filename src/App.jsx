import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { SkillsShowcase } from './components/sections/SkillsShowcase';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <SkillsShowcase />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
        <BackToTop />
        <Analytics />
      </div>
    </>
  )
}

export default App;
