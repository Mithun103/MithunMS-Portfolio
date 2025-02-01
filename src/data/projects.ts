import medicalChatbotImage from '../medical-chatbot-healthcare.jpg';
export interface Project {
  title: string;
  description: string;
  duration: string;
  tags: string[];
  github?: string; // Make github optional
  linkedin?: string; // Add linkedin field
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Power BI Dashboard for Sales Analysis',
    description: 'Designed an interactive Power BI dashboard for analyzing sales data from an e-commerce dataset. Created dynamic visualizations to track sales performance, customer demographics, and product trends.',
    duration: 'June 2024',
    tags: ['Power BI', 'Data Analysis', 'Business Intelligence'],
    linkedin: 'https://www.linkedin.com/posts/mithun-ms-5836b3297_powerbi-datavisualization-interactivedashboard-activity-7208096615218257920-0Umd?utm_source=share&utm_medium=member_desktop', // Add LinkedIn link
    
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    title: 'Medical Chatbot Using LLaMA',
    description: 'Developed a Flask-based AI chatbot integrating LLaMA and Langchain-Chroma to extract insights from medical documents and provide detailed diagnoses. Currently upgrading with Agentic AI, Langraph, and multi-model integration featuring live-performing agents for real-time, intelligent assistance. Stay tuned for the next-gen AI experience! coming soon',
    duration: 'September 2024 – Present',
    tags: ['LLaMA', 'Flask', 'RAG', 'Langchain', 'Chatbot'],
    image: medicalChatbotImage
  },
  {
    title: 'Verba Vision Pro',
    description: 'Worked on converting handwritten text into digital format using Azure Vision. Implemented validation and spell-check mechanisms to ensure transcription accuracy.',
    duration: 'August 2024',
    tags: ['Azure Vision', 'OCR', 'Text Processing',"LLM","Data Manipulation"],
    github: 'https://github.com/Mithun103/verba-vision-pro.git',
    image: 'Comment-creer-le-guide-dutilisation-parfait.png'
  },
  {
    title: 'Temperature Prediction Model',
    description: 'Built a temperature prediction model using machine learning with boosting and bagging models. Achieved MAE of 0.303 (training) and 1.28 (testing).',
    duration: 'September 2024',
    tags: ['LGBM', 'RandomForest', 'AdaBoost', 'Regression'],
    linkedin: 'https://www.linkedin.com/posts/mithun-ms-5836b3297_iitshastra2-activity-7255794376260345857-mo_l?utm_source=share&utm_medium=member_desktop',
    image: 'DALL·E 2025-02-01 21.14.06 - A futuristic and professional cover page for a portfolio project on temperature prediction. The design features a digital globe with heat map overlays.webp'
  },
  {
    title: 'Contextual Spell Correction',
    description: 'Developed a contextual spell correction system using the LLaMA model for OCR-generated Excel datasets. Leveraged LLMs to intelligently correct spelling errors within extracted text, improving data accuracy and consistency in tabular formats.',
    duration: 'July 2024',
    tags: ['LLaMA', 'NLP', 'Data Processing', 'Spell Correction','Document Processing'],
    github: 'https://github.com/Mithun103/digi_utils.git',
    image: 'Frame.png'
  },
  {
    "title": "AI-Powered Quiz Maker App",
    "description": "Developed an AI-driven quiz generation application using NLP and Large Language Models (LLMs). The system automatically generates multiple-choice questions (MCQs) based on given Pdf's. It supports by giving real time human level feedback which is dyanamically evaluated by Ai.Integrated Flask for backend processing and React for an interactive user interface.",
    "duration": "August 2024",
    "tags": ["NLP", "LLMs", "Quiz Generation", "AI", "Flask", "React","LLama"],
    "github": "https://github.com/Mithun103",
    "demo": "https://quizmakerai.netlify.app",
    "image": "quiz-1-o.avif"
  }
  
];
