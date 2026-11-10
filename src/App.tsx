// src/App.tsx
import "./App.css";

import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { useScrollRestoration } from "./hooks/useScrollRestoration";

import LiquidEther from "./components/LiquidEther";
import MainHeader from "./components/MainHeader";
import Menu from "./components/Menu";

import Home from "./pages/Home";
import Case01 from "./pages/Case01";
import Case02 from "./pages/Case02";
import Case03 from "./pages/Case03";
import Portfolio01 from "./pages/Portfolio01";
import Portfolio02 from "./pages/Portfolio02";
import Portfolio03 from "./pages/Portfolio03";
// import Portfolio04 from "./pages/Portfolio04";
// import Portfolio05 from "./pages/Portfolio05";
// import Portfolio06 from "./pages/Portfolio06";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Scroll restoration for SPA
  useScrollRestoration(mainRef);

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setMenuOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on mobile navigation
  useEffect(() => {
    if (isMobile) setMenuOpen(false);
  }, [location.pathname, isMobile]);

  return (
    <>
      <LiquidEther className="bg-stone-950" />

      <div className="flex flex-col h-screen w-screen">
        <a
          href="#main-content"
          onClick={(event) => {
            event.preventDefault();
            const main = mainRef.current;
            main?.focus({ preventScroll: true });
            main?.scrollTo(0, 0);
          }}
          className="fixed left-4 top-0 z-[100] -translate-y-full rounded-b-lg bg-cyan-300 px-4 py-2 font-semibold text-stone-950 transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <MainHeader toggleMenu={toggleMenu} menuOpen={menuOpen} />

        <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar menu */}
          <aside
            aria-hidden={isMobile && !menuOpen}
            inert={isMobile && !menuOpen}
            className={`w-56 shrink-0 h-full overflow-x-auto overflow-y-auto flex flex-col transition-transform duration-300
              ${isMobile ? "absolute" : "relative"} top-0 left-0 z-40 ${
                isMobile && !menuOpen ? "-translate-x-full" : "translate-x-0"
              }`}
          >
            <Menu />
          </aside>

          {/* Overlay for mobile */}
          {menuOpen && isMobile && (
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 w-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            />
          )}

          {/* Main scrollable content */}
          <main
            ref={mainRef}
            id="main-content"
            tabIndex={-1}
            className="flex-1 overflow-y-auto overscroll-contain ml-0 py-16"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case01" element={<Case01 />} />
              <Route path="/case02" element={<Case02 />} />
              <Route path="/case03" element={<Case03 />} />
              <Route path="/portfolio01" element={<Portfolio01 />} />
              <Route path="/portfolio02" element={<Portfolio02 />} />
              <Route path="/portfolio03" element={<Portfolio03 />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}
