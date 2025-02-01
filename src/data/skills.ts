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
    name:'Tools and Programmig languages',
    skills:[
      { name: 'Python', level: 90 },
      {name:"Java",level:60},
      { name: 'C programming', level: 80},
      { name: 'TensorFlow', level: 70 },
      { name: 'PyTorch', level: 70 },
      { name: 'Scikit-learn', level: 90 },
      {name:"Flask",level:95},
      {name:"MongoDB",level:95},
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level:  90},
    ]
  },
  {
    name: 'AI and Machine Learning',
    skills: [
      { name: 'Supervised Learning', level: 95 },
      { name: 'Neural Networks', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name:'Reinforcement Learning',level:90},
      { name: 'NLP', level: 70 },
      { name: 'Transformer Models', level: 85 },
      { name: 'Agentic AI', level: 80 }
    ]
  },
  {
    name: 'Specialized Techniques',
    skills: [
      { name: 'RAG', level: 90 },
      { name: 'PhiData', level: 95 },
      {name:'Langchain',level:80},
      {name:'langGraph',level:50},
      { name: 'Large Language Models', level: 85},
      { name: 'Data Engineering', level: 90 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Azure Cloud', level: 80 },
      {name:'Vercel Cloud',level:80}
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