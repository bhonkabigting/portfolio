import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import type { Project } from './types/Project';
import './index.css';

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A web app for real-time chat.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'An API built with Node.js.',
    link: 'https://example.com/project-two',
  },
];

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors">
        <Navbar dark={dark} toggleDark={() => setDark(!dark)} />

        <main className="px-4 sm:px-6 lg:px-8 space-y-20 max-w-5xl mx-auto">
          <Section id="about" title="About Me">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Hello! I’m a software developer passionate about building scalable web apps.
            </p>
          </Section>

          <Section id="projects" title="Projects">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {projects.map((p, i) => (
                <ProjectCard key={i} project={p} />
              ))}
            </div>
          </Section>

          <Section id="resume" title="Resume">
            <a
              href="/resume.pdf"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Download Resume
            </a>
          </Section>

          <Section id="contact" title="Contact">
            <p className="text-sm sm:text-base">Email: johndoe@example.com</p>
            <p className="text-sm sm:text-base">
              GitHub: <a href="https://github.com/johndoe" className="underline text-blue-500 hover:text-blue-700">@johndoe</a>
            </p>
          </Section>
        </main>

        <footer className="text-center p-4 text-xs text-gray-500">© 2025 John Doe</footer>
      </div>
    </div>
  );
}
