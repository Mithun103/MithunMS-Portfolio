export interface Project {
  title: string;
  description: string;
  duration: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Power BI Dashboard for Sales Analysis',
    description: 'Designed an interactive Power BI dashboard for analyzing sales data from an e-commerce dataset. Created dynamic visualizations to track sales performance, customer demographics, and product trends.',
    duration: 'June 2024',
    tags: ['Power BI', 'Data Analysis', 'Business Intelligence'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    title: 'Medical Chatbot Using LLaMA',
    description: 'Developed a Flask-based chatbot integrating LLaMA 3.1 and Langchain-Chroma for extracting data from medical documents and providing detailed diagnoses.',
    duration: 'September 2024 – Present',
    tags: ['LLaMA', 'Flask', 'RAG', 'Langchain'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118'
  },
  {
    title: 'Handwritten Text to Digital Conversion',
    description: 'Worked on converting handwritten text into digital format using Azure Vision. Implemented validation and spell-check mechanisms to ensure transcription accuracy.',
    duration: 'August 2024',
    tags: ['Azure Vision', 'OCR', 'Text Processing'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1527168027773-0cc890c4f42e'
  },
  {
    title: 'Temperature Prediction Model',
    description: 'Built a temperature prediction model using machine learning with boosting and bagging models. Achieved MAE of 0.303 (training) and 1.28 (testing).',
    duration: 'September 2024',
    tags: ['LGBM', 'RandomForest', 'AdaBoost'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b'
  },
  {
    title: 'Contextual Spell Correction',
    description: 'Developed a contextual spell correction system using the LLaMA model for Excel datasets. Enhanced accuracy of handwritten text extraction and processing.',
    duration: 'July 2024',
    tags: ['LLaMA', 'NLP', 'Data Processing'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f'
  }
];