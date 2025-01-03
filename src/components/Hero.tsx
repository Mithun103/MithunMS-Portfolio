import React from 'react';
import { Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Artificial Intelligence
              <span className="block text-blue-600">& Machine Learning</span>
              Enthusiast
            </h1>
            <p className="text-xl text-gray-600">
              An AI/ML enthusiast with hands-on experience in Python, TensorFlow, PyTorch, and Large Language Models.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <Brain size={300} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;