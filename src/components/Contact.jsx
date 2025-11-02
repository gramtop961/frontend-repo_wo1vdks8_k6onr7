import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Get in touch</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          I’m open to internships, research collaborations, and interesting robotics projects. Reach out and let’s build something awesome.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <a
          href="mailto:your.email@example.com"
          className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="rounded-lg bg-emerald-50 p-3 text-emerald-700">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold text-zinc-900">Email</div>
            <div className="text-sm text-zinc-600">your.email@example.com</div>
          </div>
        </a>

        <div className="grid grid-cols-2 gap-6">
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <Github className="h-5 w-5 text-zinc-900" />
            <span className="font-medium text-zinc-900">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <Linkedin className="h-5 w-5 text-zinc-900" />
            <span className="font-medium text-zinc-900">LinkedIn</span>
          </a>
        </div>
      </div>

      <p className="mt-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
