import React from 'react';
import { X } from '../icons';

interface Project {
  title: string;
  description: string;
  image: string;
  metrics: Record<string, string>;
  technologies: string[];
  timeline: { date: string; milestone: string }[];
  challenges: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-blue-900/90 to-black/90 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-black p-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Image Section */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* Metrics and Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Metrics */}
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Project Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="bg-blue-900/30 p-4 rounded-lg">
                    <div className="text-gray-400 capitalize">{key}</div>
                    <div className="text-2xl font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Development Timeline */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Development Timeline</h4>
            <div className="relative">
              {project.timeline.map((milestone, index) => (
                <div key={index} className="flex items-start mb-4">
                  <div className="w-24 text-gray-400">{milestone.date}</div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-4 mt-1"></div>
                  <div className="flex-1 text-white">{milestone.milestone}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Challenges</h4>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-blue-900/30 p-4 rounded-lg text-gray-300"
                >
                  {challenge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
