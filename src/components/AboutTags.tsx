import { useState } from 'react';
import { X } from 'lucide-react';

interface Tag {
  id: string;
  label: string;
  description: string;
}

const AboutTags = () => {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  const tags: Tag[] = [
    {
      id: 'problem_solver',
      label: '🧩 Problem Solver',
      description: 'Passionate about tackling complex challenges with efficient solutions. Solved 350+ coding problems on platforms like LeetCode, honing my skills in algorithms and data structures to optimize application performance.'
    },
    {
      id: 'team_collaborator',
      label: '🤝 Team Collaborator',
      description: 'Experience working in agile teams, and solving issues through active peer programming and code reviews, thus thriving in collaborative environments.'
    },
    {
      id: 'troubleshooter',
      label: '🔍 Troubleshooter',
      description: 'Proficient in identifying and resolving bugs and performance bottlenecks. Adept with tools like Chrome DevTools, Postman, and logging frameworks to debug frontend and backend issues efficiently.'
    },
    {
      id: 'full_stack_builder',
      label: '💻 Full Stack Developer',
      description: 'Developed scalable web applications with JavaScript, React, Node.js, Express, TypeScript, Next.js, Nest.js, Tailwind, MongoDB, and PostgreSQL, building platforms like Workspace and Eventseasy, demonstrating seamless frontend-backend integration.'
    },
    {
      id: 'tech_learner',
      label: '🚀 Consistent Learner',
      description: 'Constantly exploring emerging tools like Next.js, TypeScript, Golang, etc to build modern web applications. Quick to adapt, with hands-on projects bridging learning and application.'
    },
  ];

  return (
    <section id="more" className="py-20 opacity-0 translate-y-10" data-animate="true">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">More About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag)}
                className="px-4 py-2 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)]"
              >
                {tag.label}
              </button>
            ))}
          </div>

          {selectedTag && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
                <button
                  onClick={() => setSelectedTag(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedTag.label}</h3>
                <p className="text-gray-600 leading-relaxed">{selectedTag.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutTags;