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
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },
  {
    title: 'Medical Chatbot Using LLaMA',
    description: 'Developed a Flask-based chatbot integrating LLaMA and Langchain-Chroma for extracting data from medical documents and providing detailed diagnoses.',
    duration: 'September 2024 – Present',
    tags: ['LLaMA', 'Flask', 'RAG', 'Langchain', 'Chatbot'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118'
  },
  {
    title: 'Verba Vision Pro',
    description: 'Worked on converting handwritten text into digital format using Azure Vision. Implemented validation and spell-check mechanisms to ensure transcription accuracy.',
    duration: 'August 2024',
    tags: ['Azure Vision', 'OCR', 'Text Processing',"LLM","Data Manipulation"],
    github: 'https://github.com/Mithun103/verba-vision-pro.git',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1527168027773-0cc890c4f42e'
  },
  {
    title: 'Temperature Prediction Model',
    description: 'Built a temperature prediction model using machine learning with boosting and bagging models. Achieved MAE of 0.303 (training) and 1.28 (testing).',
    duration: 'September 2024',
    tags: ['LGBM', 'RandomForest', 'AdaBoost', 'Regression'],
    linkedin: 'https://www.linkedin.com/posts/mithun-ms-5836b3297_iitshastra2-activity-7255794376260345857-mo_l?utm_source=share&utm_medium=member_desktop',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b'
  },
  {
    title: 'Contextual Spell Correction',
    description: 'Developed a contextual spell correction system using the LLaMA model for Excel datasets. Enhanced accuracy of handwritten text extraction and processing.',
    duration: 'July 2024',
    tags: ['LLaMA', 'NLP', 'Data Processing', 'Spell Correction','Document Processing'],
    github: 'https://github.com/Mithun103/digi_utils.git',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f'
  }
];