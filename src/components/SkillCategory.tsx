import React from 'react';
import { SkillBar } from './SkillBar';
import type { SkillCategory as ISkillCategory } from '../data/skills';

interface SkillCategoryProps {
  category: ISkillCategory;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500">
        {category.name}
      </h3>
      <div className="space-y-5">
        {category.skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
};