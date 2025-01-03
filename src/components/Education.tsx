import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { education } from '../data/education';

const EducationCard = ({ title, details }: { title: string; details: React.ReactNode }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-xl font-semibold mb-4 text-blue-600">{title}</h3>
    {details}
  </div>
);

const Education = () => {
  return (
    <div className="space-y-6">
      <EducationCard
        title="Higher Secondary Education"
        details={
          <div className="space-y-2">
            <div className="flex items-center">
              <School className="w-5 h-5 mr-2 text-gray-600" />
              <p className="text-gray-800">{education.highSchool.school}</p>
            </div>
            <p className="text-gray-600">Year: {education.highSchool.year}</p>
            <p className="text-gray-600">Percentage: {education.highSchool.percentage}</p>
          </div>
        }
      />
      
      <EducationCard
        title="Undergraduate Studies"
        details={
          <div className="space-y-2">
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-gray-600" />
              <p className="text-gray-800">{education.undergraduate.program}</p>
            </div>
            <p className="text-gray-600">{education.undergraduate.institution}</p>
            <p className="text-gray-600">Duration: {education.undergraduate.duration}</p>
          </div>
        }
      />
    </div>
  );
};

export default Education;