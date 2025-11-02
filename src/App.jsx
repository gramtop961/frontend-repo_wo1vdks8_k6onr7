import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            <span className="text-emerald-600">Robot</span>folio
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-700 sm:flex">
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#projects" className="hover:text-zinc-900">Projects</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
