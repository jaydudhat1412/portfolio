export interface JourneyStep {
  year: string;
  semester: string;
  title: string;
  institution: string;
  description: string;
  courses: string[];
  current?: boolean;
}

export const journeyData: JourneyStep[] = [
  {
    year: "2024 - 2025",
    semester: "SEM 01 & 02",
    title: "Core Java & Database Management Systems (DBMS)",
    institution: "Bachelor of Engineering (Computer Engineering)",
    description: "Built a solid computer science base by learning Object-Oriented Programming with Java, relational database theory (DBMS), SQL queries, MySQL schema design, and fundamental data structures.",
    courses: ["Core Java & OOP Concepts", "Database Management Systems (DBMS)", "MySQL & SQL Queries", "Data Structures Basics", "Engineering Mathematics"]
  },
  {
    year: "2025 - PRESENT",
    semester: "SEM 03",
    title: "Frontend Web Development & Python Programming",
    institution: "Bachelor of Engineering (Computer Engineering)",
    description: "Currently in Semester 3, actively mastering modern frontend web design and programming: building responsive pages with HTML & CSS, mobile-first layouts with Bootstrap, interactive logic with JavaScript, and problem-solving with Python.",
    courses: ["HTML5 & CSS3 Layouts", "Bootstrap 5 Framework", "JavaScript (ES6+)", "Python Programming", "Tailwind CSS"],
    current: true
  },
  {
    year: "UPCOMING",
    semester: "FUTURE GOAL",
    title: "Full Stack Web Applications & Software Engineering",
    institution: "Computer Engineering Degree",
    description: "Planning to connect strong Java & MySQL backend knowledge with modern frontend web skills to build end-to-end full stack web applications and production-ready software.",
    courses: ["Full Stack Development", "Advanced Database Systems", "Software Engineering Principles", "Project Architecture"]
  }
];
