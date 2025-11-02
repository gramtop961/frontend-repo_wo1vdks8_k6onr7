import React from 'react';
import { Bot, Cpu, CircuitBoard, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: Bot,
    title: 'Vision-Guided Pick & Place',
    desc: 'An articulated arm that detects, tracks, and sorts objects using a camera and real-time control.',
    tags: ['ROS2', 'OpenCV', 'PID', 'C++'],
    github: '#',
    demo: '#',
  },
  {
    icon: Cpu,
    title: 'Autonomous Rover',
    desc: 'Four-wheel differential drive rover with SLAM, path planning, and obstacle avoidance.',
    tags: ['SLAM', 'A*', 'Lidar', 'Python'],
    github: '#',
    demo: '#',
  },
  {
    icon: CircuitBoard,
    title: 'Custom Motor Driver',
    desc: 'Low-noise BLDC driver with current sensing and overcurrent protection, designed in KiCad.',
    tags: ['BLDC', 'KiCad', 'STM32', 'CAN'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Projects</h2>
          <p className="mt-3 max-w-3xl text-zinc-700">A selection of robotics builds and experiments.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ icon: Icon, title, desc, tags, github, demo }) => (
          <div key={title} className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-3 text-emerald-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
            <p className="mt-2 flex-1 text-sm text-zinc-700">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 ring-1 ring-zinc-200">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a href={github} className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-zinc-900">
                <Github className="h-4 w-4" /> Code
              </a>
              <a href={demo} className="inline-flex items-center gap-1 text-sm text-zinc-700 hover:text-zinc-900">
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
