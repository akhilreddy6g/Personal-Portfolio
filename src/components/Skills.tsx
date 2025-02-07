import { useState } from 'react';
import SkillBar from './common/SkillBar';
import { FaReact, FaNodeJs, FaPython, FaGit, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiPostman, SiMongodb, SiPostgresql, SiRedis, SiGoland } from 'react-icons/si';
import { MdOutlineSecurity } from 'react-icons/md';
import { BsPuzzle, BsChatText } from 'react-icons/bs';

const Skills = () => {
  const [viewMode, setViewMode] = useState<'proficiency' | 'projectQuota'>('proficiency');

  const skillCategories = {
    'Frontend': [
      { name: 'React', proficiency: 68, projectQuota: 63, icon: <FaReact color="#61DBFB" /> },
      { name: 'Next.js', proficiency: 63, projectQuota: 57, icon: <SiNextdotjs color="#000000" /> },
      { name: 'CSS/Tailwind', proficiency: 75, projectQuota: 72, icon: <SiTailwindcss color="#38BDF8" /> }
    ],
    'Backend': [
      { name: 'Node.js', proficiency: 65, projectQuota: 60, icon: <FaNodeJs color="#8CC84B" /> },
      { name: 'Python', proficiency: 85, projectQuota: 75, icon: <FaPython color="#FFD43B" /> },
      { name: 'Golang', proficiency: 58, projectQuota: 20, icon: <SiGoland color="#00ADD8" /> }
    ],
    'Database': [
      { name: 'MongoDB', proficiency: 60, projectQuota: 45, icon: <SiMongodb color="#47A248" /> },
      { name: 'PostgreSQL', proficiency: 70, projectQuota: 70, icon: <SiPostgresql color="#336791" /> },
      { name: 'Redis', proficiency: 50, projectQuota: 20, icon: <SiRedis color="#D82C20" /> }
    ],
    'Tools': [
      { name: 'Git', proficiency: 65, projectQuota: 60, icon: <FaGit color="#F05032" /> },
      { name: 'Postman', proficiency: 70, projectQuota: 68, icon: <SiPostman color="#FF6C37" /> },
      { name: 'PgAdmin/ MongoDB Compass', proficiency: 75, projectQuota: 64, icon: <FaDatabase color="#0064A5" /> }
    ],
    'Soft Skills': [
      { name: 'Team Leadership', proficiency: 70, projectQuota: 65, icon: <MdOutlineSecurity color="#FFD700" /> },
      { name: 'Problem Solving', proficiency: 85, projectQuota: 80, icon: <BsPuzzle color="#4CAF50" /> },
      { name: 'Communication', proficiency: 80, projectQuota: 80, icon: <BsChatText color="#2196F3" /> }
    ]
  };

  return (
    <section id="skills" className="py-20" data-animate="true">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Skills</h2>
        
        <div className="flex justify-center mb-8">
          <div className="bg-blue-900/30 p-1 rounded-lg shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)]">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                viewMode === 'proficiency'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setViewMode('proficiency')}
            >
              Proficiency
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                viewMode === 'projectQuota'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setViewMode('projectQuota')}
            >
              In Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-blue-900/20 to-black/20 p-6 rounded-xl shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)]"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={viewMode === 'proficiency' ? skill.proficiency : (skill.projectQuota)}
                    showYears={viewMode === 'projectQuota'}
                    years={skill.projectQuota}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;