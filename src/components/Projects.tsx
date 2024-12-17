import React, { useState } from 'react';
import ProjectCard from './common/ProjectCard';
import ProjectModal from './common/ProjectModal';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  metrics: Record<string, string>;
  timeline: { date: string; milestone: string }[];
  challenges: string[];
  category: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      title: 'Workspace',
      description: 'Your personal time management assistant that ensures work accomplishment with accountability and responsibility',
      image: './images/space1.jpg',
      technologies: ['Node.js', 'Express.js', 'React', 'PostgreSQL'],
      github: 'https://github.com/akhilreddy6g/Workspace',
      live: 'https://workspace-eikp.onrender.com/',
      metrics: {
        users: '10+',
        'average screen time': '20 min',
        uptime: '95%'
      },
      timeline: [
        { date: 'Aug 2024', milestone: 'Project Initiation' },
        { date: 'Nov 2024', milestone: 'MVP in Hand' },
        { date: 'Dec 2024', milestone: 'Website Launch & Serving 10+ Active Users' }
      ],
      challenges: [
        'Reducing and Optimizing frequent API calls',
        'Standard Authentication and Maintaining Persistent Sessions for Continued Activity',
        'Data Encryption, for Enhanced Privacy'
      ],
      category: 'fullstack'
    },
    {
      title: 'Portfolio',
      description: 'A portfolio application built using modern design principles and interactive UI',
      image: './images/portfolio.jpg',
      technologies: ['React', 'Typescript', 'Tailwind CSS'],
      github: 'https://github.com/akhilreddy6g/Personal-Portfolio',
      live: 'https://akhil-reddy-gaddam.onrender.com/',
      metrics: {
        visits: '100+',
        'Load Time': '< 2s',
        uptime: '98%'
      },
      timeline: [
        { date: 'Oct 2024', milestone: 'Project Initiation' },
        { date: 'Nov 2024', milestone: 'Core structure Developed' },
        { date: 'Dec 2024', milestone: 'Website Launch' }
      ],
      challenges: [
        'Responsive Design for Access across any Device',
        'Making the UI Interactive',
        'Content Management and Performance Optimization'
      ],
      category: 'frontend'
    },
    {
      title: 'Car Model Acquisition',
      description: 'Developed a Decision tree model to predict the optimal pre-owned cars for purchase and resale based on specifications like seats, engine condition, maintenance, etc.',
      image: './images/car.jpg',
      technologies: ['Keras', 'Scikit-Learn'],
      github: 'https://github.com/akhilreddy6g/Car-Model-Acquisition',
      live: '',
      metrics: {
        'dataset size': '10k+',
        'model accuracy': '96.7%',
        'precision': '95%'
      },
      timeline: [
        { date: 'May 2021', milestone: 'Project Initiation' },
        { date: 'June 2021', milestone: 'Data preprocessing, Model Exploration, Training, and Testing' }
      ],
      challenges: [
        'Handling Missing Data',
        'Choosing the Right Model',
        'Enhancing Precision and Accuracy via Reinforcement Learning'
      ],
      category: 'machinelearning'
    },
    {
      title: 'Glomeruli Image Classification ',
      description: 'The project develops a deep learning model using EfficientNetB3 to classify glomeruli images as globally sclerotic or non-globally sclerotic',
      image: './images/kidney.jpg',
      technologies: ['Tensorflow', 'Scikit-Learn'],
      github: 'https://github.com/akhilreddy6g/Glomeruli-Image-Classification',
      live: '',
      metrics: {
        'dataset size': '5k+ Images',
        'model accuracy': '96%',
        'Error rate': '<7%'
      },
      timeline: [
        { date: 'May 2024', milestone: 'Project Initiation' },
        { date: 'June 2024', milestone: 'Data preprocessing, Stratified Sampling, Model Exploration, Training, and Testing' },
      ],
      challenges: [
        'Generalizing Images to a Common Size',
        'Avoiding image/vector Squashing/distortion during resizing',
        'Model Training with Optimized Resources'
      ],
      category: 'deeplearning'
    },
    {
      title: 'Generative Expressive AI Agent',
      description: 'Utilizes the DistilRoBERTa model to interpret human emotions and dynamically expresses them through color and movement via a 3D flower avatar',
      image: './images/flower.jpg',
      technologies: ['Tensorflow', 'Scikit-Learn', 'Blender'],
      github: 'https://github.com/akhilreddy6g/Generative-Expressive-AI-Flower-Agent',
      live: '',
      metrics: {
        'Rendering Latency': '< 5s',
        'Response Time': '< 1s',
        'Frame Rate': '60fps'
      },
      timeline: [
        { date: 'Feb 2024', milestone: 'Design 3D Flower Model' },
        { date: 'March 2024', milestone: 'Establish Pipeline' },
        { date: 'April 2024', milestone: 'Integrate everything and Employ it for use' }
      ],
      challenges: [
        'Designing the 3D Model',
        'Computing Color and Animation Parameters based on User Emotion',
        'Setting up the 3D Model as per User Emotion'
      ],
      category: 'deeplearning'
    },
    {
      title: 'Road Traffic Sign Detection',
      description: 'Uses the ResNet34 model, trained on the GTSRB dataset, for traffic sign detection, while achieving an impressive accuracy of 99.67%',
      image: './images/traffic.jpg',
      technologies: ['Tensorflow', 'Scikit-Learn'],
      github: 'https://github.com/akhilreddy6g/Road-Traffic-Sign-Detection',
      live: '',
      metrics: {
        'dataset size': '40k+ Images',
        'model accuracy': '99.67%',
        'Precision': '98%'
      },
      timeline: [
        { date: 'March 2022', milestone: 'Project Initiation and Data Collection' },
        { date: 'May 2022', milestone: 'Establish pipeline, Model Exploration, Training, and Testing' },
        { date: 'July 2022', milestone: 'Model Optimization and Reinforcement Learning' }
      ],
      challenges: [
        'Handling Signs with Light Reflection/ Distorted Signs',
        'Hyperparameter Tuning',
        'Increasing Precision'
      ],
      category: 'deeplearning'
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    // { id: 'api', label: 'API Integration' },
    { id: 'deeplearning', label: 'Deep Learning'},
    { id: 'machinelearning', label: 'Machine Learning'}
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-colors shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)] ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-900/30 text-gray-300 hover:bg-blue-800/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
