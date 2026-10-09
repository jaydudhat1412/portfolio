export interface SkillItem {
  name: string;
  level: string;
  percentage: number;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  tags: string[];
}

export interface SkillCategory {
  title: string;
  categoryKey: 'frontend' | 'backend' | 'database' | 'tools';
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development (Sem 3)",
    categoryKey: "frontend",
    skills: [
      { 
        name: "HTML5", 
        level: "Active (Sem 3)", 
        percentage: 92, 
        description: "Semantic page structure, modern HTML5 web standards, forms, and accessibility.", 
        category: "frontend", 
        tags: ["Semantic HTML", "Forms", "Accessibility"] 
      },
      { 
        name: "CSS3", 
        level: "Active (Sem 3)", 
        percentage: 88, 
        description: "Modern CSS layouts, Flexbox, CSS Grid, media queries, and responsive design across all screen sizes.", 
        category: "frontend", 
        tags: ["Flexbox", "CSS Grid", "Responsive Design"] 
      },
      { 
        name: "Bootstrap 5", 
        level: "Active (Sem 3)", 
        percentage: 86, 
        description: "Mobile-first responsive framework, grid utilities, navigation bars, and pre-built component systems.", 
        category: "frontend", 
        tags: ["Mobile-first", "Grid System", "Components"] 
      },
      { 
        name: "JavaScript (ES6+)", 
        level: "Active (Sem 3)", 
        percentage: 84, 
        description: "Core programming language for the web, DOM manipulation, event handling, ES6+ features, and dynamic web interactivity.", 
        category: "frontend", 
        tags: ["DOM Manipulation", "ES6+", "Event Handling"] 
      },
      { 
        name: "Tailwind CSS", 
        level: "Active (Sem 3)", 
        percentage: 88, 
        description: "Utility-first modern CSS framework for rapid responsive interface design and custom dark mode themes.", 
        category: "frontend", 
        tags: ["Utility Classes", "Dark Mode", "Modern UI"] 
      },
    ]
  },
  {
    title: "Programming & Core CS",
    categoryKey: "backend",
    skills: [
      { 
        name: "Python", 
        level: "Active (Sem 3)", 
        percentage: 82, 
        description: "Versatile programming language learned in Semester 3 for algorithms, scripting, data simulation, and problem-solving.", 
        category: "backend", 
        tags: ["Scripting", "Data Simulation", "Algorithms"] 
      },
      { 
        name: "Java (Core & OOP)", 
        level: "Learned (Sem 1 & 2)", 
        percentage: 88, 
        description: "Mastered in Sem 1 & 2: Object-Oriented Programming (Inheritance, Polymorphism, Encapsulation, Abstraction), Collections framework, and Exception handling.", 
        category: "backend", 
        tags: ["OOP Concepts", "Collections", "Exception Handling"] 
      },
      { 
        name: "Data Structures & Algorithms", 
        level: "Learned & Practicing", 
        percentage: 82, 
        description: "Linear & non-linear structures: Arrays, Linked Lists, Stacks, Queues, Searching, and Sorting algorithms.", 
        category: "backend", 
        tags: ["Data Structures", "Sorting", "Searching"] 
      },
    ]
  },
  {
    title: "Database Management (DBMS)",
    categoryKey: "database",
    skills: [
      { 
        name: "DBMS Concepts", 
        level: "Learned (Sem 1 & 2)", 
        percentage: 86, 
        description: "Database Management Systems fundamentals: Relational model, Entity-Relationship (ER) diagrams, ACID properties, and normalization.", 
        category: "database", 
        tags: ["Relational Model", "Normalization", "ACID"] 
      },
      { 
        name: "MySQL & SQL Queries", 
        level: "Learned (Sem 1 & 2)", 
        percentage: 85, 
        description: "Writing relational SQL queries, table creation, joins, subqueries, primary/foreign key constraints, and data manipulation.", 
        category: "database", 
        tags: ["SQL Queries", "Joins", "Constraints"] 
      },
      { 
        name: "JDBC Connectivity", 
        level: "Learned (Sem 1 & 2)", 
        percentage: 82, 
        description: "Java Database Connectivity for executing SQL queries, managing prepared statements, and handling database connections from Java applications.", 
        category: "database", 
        tags: ["JDBC", "PreparedStatements", "CRUD"] 
      },
    ]
  },
  {
    title: "Development Tools",
    categoryKey: "tools",
    skills: [
      { 
        name: "Git & GitHub", 
        level: "Proficient", 
        percentage: 86, 
        description: "Version control system, Git commands, GitHub repository hosting, branch workflows, and code collaboration.", 
        category: "tools", 
        tags: ["Git Commands", "GitHub", "Version Control"] 
      },
      { 
        name: "VS Code", 
        level: "Proficient", 
        percentage: 90, 
        description: "Primary development IDE, extensions for web and Python, linting, and rapid debugging.", 
        category: "tools", 
        tags: ["IDE", "Debugging", "Extensions"] 
      },
    ]
  }
];

export const currentlyLearning = [
  { subject: "HTML5 & CSS3", status: "LEARNING", focus: "Semantic layouts, responsive design, Flexbox & CSS Grid" },
  { subject: "Bootstrap 5", status: "LEARNING", focus: "Mobile-first grids, component styling, and rapid responsive UI" },
  { subject: "JavaScript (ES6+)", status: "LEARNING", focus: "Dynamic web interactivity, DOM manipulation, and modern syntax" },
  { subject: "Python", status: "LEARNING", focus: "Programming fundamentals, problem-solving, and algorithmic scripts" },
  { subject: "Tailwind CSS", status: "PRACTICING", focus: "Utility-first modern styling, responsive layouts, and UI themes" },
];
