import React from 'react';
import { GitHub, ExternalLink } from '../icons';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
  };
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { title, description, image, technologies, github, live } = project;

  return (
    <div
      className="group bg-gradient-to-br from-blue-900/50 to-black/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)]"
      onClick={onClick}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white">Click to view details</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full">
              +{technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a
              href={github}
              className="flex items-center text-gray-300 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHub className="mr-2" size={20} />
              Code
            </a>
            {live && <a
              href={live}
              className="flex items-center text-gray-300 hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="mr-2" size={20} />
              Live Demo
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
