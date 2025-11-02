import React from 'react';
import { Cpu, Bot, CircuitBoard } from 'lucide-react';

const skills = [
  {
    icon: Cpu,
    title: 'Control & Perception',
    items: ['ROS2', 'SLAM', 'OpenCV', 'Sensor Fusion'],
  },
  {
    icon: CircuitBoard,
    title: 'Mechatronics',
    items: ['CAD', '3D Printing', 'PCB Design', 'Motor Control'],
  },
  {
    icon: Bot,
    title: 'Intelligent Systems',
    items: ['Python', 'C++', 'RL', 'Path Planning'],
  },
];

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">About Me</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          I’m an aspiring robotics engineer passionate about building real-world robots that are safe, capable, and delightful to interact with. My work spans embedded systems, control, and machine learning – with a focus on rapid prototyping and thoughtful human-robot interfaces.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ icon: Icon, title, items }) => (
          <div key={title} className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-3 text-emerald-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700">
              {items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
