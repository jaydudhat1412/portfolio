export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    description: string;
    related: string[];
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "LEARNING (SEM 3)",
    skills: [
      { name: "HTML & CSS", description: "Semantic markup and styling for web content.", related: ["Responsive Design", "Web"] },
      { name: "Bootstrap", description: "CSS framework for developing responsive and mobile-first websites.", related: ["CSS", "Frontend"] },
      { name: "JavaScript", description: "Core language for web interactions and frontend logic.", related: ["Web Development", "Frontend"] },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development.", related: ["CSS", "Design"] },
      { name: "Python", description: "Versatile language for scripting, automation, and backend.", related: ["Scripting", "Backend"] },
    ]
  },
  {
    title: "ALREADY LEARNT",
    skills: [
      { name: "Java", description: "Primary programming language learned in Sem 1 & 2.", related: ["OOP", "Logic"] },
      { name: "DBMS", description: "Database Management Systems concepts.", related: ["SQL", "Databases"] },
    ]
  }
];

export const currentlyLearning = [
  { subject: "Full Stack Development", status: "LEARNING" },
  { subject: "Python", status: "LEARNING" },
  { subject: "Tailwind CSS & Bootstrap", status: "PRACTICING" },
  { subject: "JavaScript", status: "BUILDING" },
];
