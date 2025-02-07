import React from 'react';
import { Calendar } from '../icons';

interface ExperienceCardProps {
  role: string;
  company: string;
  website: string;
  period: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  website,
  period,
  description,
}) => (
  <div className="mb-8 bg-gradient-to-br from-blue-900/30 to-black/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-[0px_0px_0px_0.4px_rgba(250,200,146,0.4)]">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-white">{role}</h3>
      <div className="flex items-center text-blue-400">
        <Calendar size={16} className="mr-2" />
        {period}
      </div>
    </div>
    <div className="text-lg text-blue-300 mb-2"><a href={website} target="_blank">{company}</a></div>
    <p className="text-gray-300 text-justify">{description}</p>
  </div>
);

export default ExperienceCard;