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
      { name: 'TensorFlow', level: 70 },
      { name: 'PyTorch', level: 70 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level:  90},
      { name: 'Jupyter Notebooks', level: 95 }
    ]
  },
  {
    name: 'AI and Machine Learning',
    skills: [
      { name: 'Supervised Learning', level: 95 },
      { name: 'Neural Networks', level: 80 },
      { name: 'Deep Learning', level: 80 },
      { name: 'NLP', level: 90 },
      { name: 'Transformer Models', level: 85 },
      { name: 'Agentic AI', level: 60 }
    ]
  },
  {
    name: 'Specialized Techniques',
    skills: [
      { name: 'RAG', level: 90 },
      { name: 'Large Language Models', level: 80 },
      { name: 'Data Engineering', level: 90 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Azure API Integration', level: 90 }
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Creativity', level: 95 },
      { name: 'Critical Thinking', level: 95 },
      { name: 'Leadership', level: 98 },
      { name: 'Problem Solving', level: 95 }
    ]
  }
];