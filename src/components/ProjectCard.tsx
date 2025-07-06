import type { Project } from '../types/Project';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.link}
      className="block border p-4 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="text-lg font-bold mb-1">{project.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
    </a>
  );
}