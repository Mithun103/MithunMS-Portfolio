import React from 'react';
import { Download } from 'lucide-react';
import Education from './Education';
import Profile from './Profile';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <Profile />
          
          <div className="bg-blue-50 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <Education />
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="src\data\MITHUN M S_RESUME.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;