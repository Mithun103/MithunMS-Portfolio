import React, { useEffect, useRef, useState } from 'react';
import type { Skill } from '../data/skills';
import { useInView } from '../hooks/useInView';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isInView, skill.level, index]);

  return (
    <div ref={barRef} className="transform hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-blue-600 font-semibold">{width}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        >
          <div className="h-full w-full bg-opacity-30 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};