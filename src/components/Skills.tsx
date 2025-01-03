import React from 'react';
import { SkillCategory } from './SkillCategory';
import { skillCategories } from '../data/skills';
import { Brain } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Brain className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Technical Expertise</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} 
                className="transform hover:-translate-y-1 transition-transform duration-300"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                }}
              >
                <SkillCategory category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;