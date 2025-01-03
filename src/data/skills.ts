export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming and Tools',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 88 },
      { name: 'Jupyter Notebooks', level: 95 }
    ]
  },
  {
    name: 'AI and Machine Learning',
    skills: [
      { name: 'Supervised Learning', level: 90 },
      { name: 'Neural Networks', level: 88 },
      { name: 'Deep Learning', level: 85 },
      { name: 'NLP', level: 92 },
      { name: 'Transformer Models', level: 85 },
      { name: 'Agentic AI', level: 80 }
    ]
  },
  {
    name: 'Specialized Techniques',
    skills: [
      { name: 'RAG', level: 85 },
      { name: 'Large Language Models', level: 88 },
      { name: 'Data Engineering', level: 90 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Azure API Integration', level: 82 }
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Creativity', level: 95 },
      { name: 'Critical Thinking', level: 92 },
      { name: 'Leadership', level: 88 },
      { name: 'Problem Solving', level: 95 }
    ]
  }
];