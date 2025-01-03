import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          alt="Mithun M S"
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 rounded-full ring-2 ring-blue-500 ring-offset-4"></div>
      </div>
      
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Mithun M S</h3>
        <p className="text-lg text-blue-600 mb-4">AI/ML Enthusiast</p>
        <p className="text-lg text-gray-600 max-w-xl">
          I am a passionate AI/ML enthusiast with a strong foundation in computer science and a keen interest in developing
          intelligent systems. My journey in artificial intelligence has led me to work on various projects involving
          deep learning, natural language processing, and computer vision.
        </p>
      </div>
    </div>
  );
};

export default Profile;