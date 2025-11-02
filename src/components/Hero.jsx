import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white to-zinc-100 text-zinc-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-emerald-600" />
          Robotics • AI • Mechatronics
        </span>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
          Hi, I’m <span className="text-emerald-600">Your Name</span>
          <br />
          an aspiring Robotics Engineer
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-700 sm:text-lg">
          I build interactive robots and intelligent systems that blend mechanics, electronics, and code. Explore my projects, research, and the tools I use to bring ideas to life.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <Rocket className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-2 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-2 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
