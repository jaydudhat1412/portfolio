export interface JourneyStep {
  year: string;
  title: string;
  description: string;
  current?: boolean;
}

export const journeyData: JourneyStep[] = [
  {
    year: "2025",
    title: "Started Engineering",
    description: "Began journey in Computer Engineering."
  },
  {
    year: "2025",
    title: "Semester 1 & 2 - Core Programming",
    description: "Learned Java programming and Database Management Systems (DBMS)."
  },
  {
    year: "CURRENT",
    title: "Semester 3 - Full Stack & Python",
    description: "Learning full stack development: HTML, CSS, Bootstrap, JavaScript, and Tailwind CSS. Also learning Python.",
    current: true
  }
];
