import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/contact';

export const SocialLinks = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Social Links</h3>
      <div className="flex space-x-4">
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};