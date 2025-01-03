export interface Education {
  school: string;
  year: string;
  percentage?: string;
  program?: string;
  institution?: string;
  duration?: string;
}

export const education = {
  highSchool: {
    school: "Vidhya Giri Hr. Sec. School, Karaikudi",
    year: "2022",
    percentage: "89.5%"
  },
  undergraduate: {
    program: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Saveetha Engineering College, Thandalam, Chennai",
    duration: "2022 – 2026"
  }
};