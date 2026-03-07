import './App.css'

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import LiquidEther from './components/LiquidEther';
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";
import Menu1 from "./components/Menu1";

import Home from './pages/Home';
import About from './pages/About';
import Case01 from './pages/Case01';
import Case02 from './pages/Case02';
import Case03 from './pages/Case03';
import Portfolio01 from './pages/Portfolio01';
import Portfolio02 from './pages/Portfolio02';
import Portfolio03 from './pages/Portfolio03';
import Portfolio04 from './pages/Portfolio04';
import Portfolio05 from './pages/Portfolio05';
import Portfolio06 from './pages/Portfolio06';
import Resume from './pages/Resume';
import Certification from './pages/Certification';

function App() {

  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {  
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setMenuOpen(false);
    }
  }, [location, isMobile]);

  return (
    <>
      <LiquidEther className='bg-zinc-950' />

      <div className="flex flex-col h-screen w-screen">

        <MainHeader toggleMenu={toggleMenu} />

        <div className="flex flex-1 overflow-hidden relative">

          <aside
            className={`w-56 h-full overflow-y-auto flex flex-col transition-all duration-300 
              ${menuOpen ? "ml-0" : "-ml-56"} top-0 left-0 z-40 relative`}
          >
            <Menu1 />
          </aside>

          {/* Overlay with inline style for transparency */}
          {menuOpen && isMobile && (
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            />
          )}

          <main className="flex-1 overflow-y-auto overscroll-contain ml-0">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/case01" element={<Case01 />} />
              <Route path="/case02" element={<Case02 />} />
              <Route path="/case03" element={<Case03 />} />

              {/*
              <Route path="/portfolio01" element={<Portfolio01 />} />
              <Route path="/portfolio02" element={<Portfolio02 />} />
              <Route path="/portfolio03" element={<Portfolio03 />} />
              <Route path="/portfolio04" element={<Portfolio04 />} />
              <Route path="/portfolio05" element={<Portfolio05 />} />
              <Route path="/portfolio06" element={<Portfolio06 />} /> 
              */}

              <Route path="/resume" element={<Resume />} />
              <Route path="/certification" element={<Certification />} />
            </Routes>
            
          </main>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
