import React, { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  showYears?: boolean;
  years?: number;
  icon: React.ReactNode;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, showYears, years, icon }) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentWidth(level); 
          }
        });
      },
      { threshold: 0.9 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, [level]);

  return (
    <div ref={skillRef} className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2 text-xl">
          {icon}
          <span className="text-gray-300">{name}</span>
        </div>
      </div>
      <div className="h-3 bg-blue-900/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-1000"
          style={{ width: `${currentWidth}%` }}
        />
      </div>
    </div>
  );
};


export default SkillBar;
