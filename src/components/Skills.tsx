import { useState } from 'react';
import SkillBar from './common/SkillBar';
import { FaReact, FaNodeJs, FaPython, FaGit, FaDatabase, FaJava, FaAws, FaLinux } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiPostman, SiMongodb, SiPostgresql, SiRedis, SiGoland, SiTerraform, SiDocker, SiTypescript, SiMysql, SiGooglecloud, SiGithubactions, SiJest, SiCypress, SiJunit5, SiJirasoftware } from 'react-icons/si';
import { MdGroups } from 'react-icons/md';
import { BsPuzzle, BsChatText } from 'react-icons/bs';

const Skills = () => {
  const [viewMode, setViewMode] = useState<'proficiency' | 'projectQuota'>('proficiency');

  const skillCategories = {
    'Frontend': [
      { name: 'React', proficiency: 68, projectQuota: 75, icon: <FaReact color="#61DBFB" /> },
      { name: 'Next.js', proficiency: 63, projectQuota: 65, icon: <SiNextdotjs color="#000000" /> },
      { name: 'Javascript / TypeScript', proficiency: 65, projectQuota: 70, icon: <SiTypescript color="#3178C6" /> },
      { name: 'Tailwind/CSS', proficiency: 60, projectQuota: 60, icon: <SiTailwindcss color="#38BDF8" /> }
    ],
    'Backend': [
      { name: 'Java/Spring Boot', proficiency: 65, projectQuota: 55, icon: <FaJava color="#007396" /> },
      { name: 'Python / FastAPI / Flask', proficiency: 80, projectQuota: 70, icon: <FaPython color="#FFD43B" /> },
      { name: 'Node.js / Express / Nest', proficiency: 62, projectQuota: 60, icon: <FaNodeJs color="#8CC84B" /> },
      { name: 'Golang', proficiency: 55, projectQuota: 37, icon: <SiGoland color="#00ADD8" /> }
    ],
    'Database': [
      { name: 'PostgreSQL', proficiency: 67, projectQuota: 72, icon: <SiPostgresql color="#336791" /> },
      { name: 'MongoDB', proficiency: 62, projectQuota: 65, icon: <SiMongodb color="#47A248" /> },
      { name: 'Redis', proficiency: 55, projectQuota: 40, icon: <SiRedis color="#D82C20" /> },
      { name: 'MySQL', proficiency: 45, projectQuota: 25, icon: <SiMysql color="#4479A1" /> }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', proficiency: 62, projectQuota: 60, icon: <FaAws color="#FF9900" /> },
      { name: 'GCP', proficiency: 55, projectQuota: 50, icon: <SiGooglecloud color="#4285F4" /> },
      { name: 'Docker', proficiency: 63, projectQuota: 68, icon: <SiDocker color="#2496ED" /> },
      { name: 'Terraform', proficiency: 57, projectQuota: 48, icon: <SiTerraform color="#7B42BC" /> }
    ],
    'CI/CD & Testing': [
      { name: 'GitHub Actions', proficiency: 62, projectQuota: 68, icon: <SiGithubactions color="#2088FF" /> },
      { name: 'Jest', proficiency: 58, projectQuota: 55, icon: <SiJest color="#C21325" /> },
      { name: 'Cypress', proficiency: 52, projectQuota: 57, icon: <SiCypress color="black" /> },
      { name: 'JUnit', proficiency: 55, projectQuota: 40, icon: <SiJunit5 color="#25A162" /> }
    ],
    'Tools': [
      { name: 'Git', proficiency: 75, projectQuota: 75, icon: <FaGit color="#F05032" /> },
      { name: 'Postman', proficiency: 62, projectQuota: 60, icon: <SiPostman color="#FF6C37" /> },
      { name: 'Linux', proficiency: 60, projectQuota: 65, icon: <FaLinux color="#FCC624" /> },
      { name: 'PgAdmin/Compass', proficiency: 58, projectQuota: 55, icon: <FaDatabase color="#0064A5" /> }
    ],
    'Soft Skills': [
      { name: 'Cross-team Collaboration', proficiency: 70, projectQuota: 75, icon: <MdGroups color="#FF7043" /> },
      { name: 'Problem Solving', proficiency: 68, projectQuota: 72, icon: <BsPuzzle color="#4CAF50" /> },
      { name: 'Communication', proficiency: 75, projectQuota: 70, icon: <BsChatText color="#2196F3" /> },
      { name: 'Agile/SDLC', proficiency: 80, projectQuota: 85, icon: <SiJirasoftware color="#0052CC" /> }
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
              Projects/Experience
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