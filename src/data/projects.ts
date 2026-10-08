export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  challenges: string[];
  learning: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "music-player",
    number: "01",
    title: "Music Player Management System",
    description: "A terminal-based music management application created as an academic project combining Java-II, DBMS and Data Structures concepts.",
    category: "Software Application",
    technologies: ["Java", "JDBC", "MySQL", "Data Structures", "OOP"],
    features: [
      "User authentication and profile management",
      "Song and playlist CRUD operations",
      "Music library searching and filtering",
      "Database connectivity with JDBC",
      "Implementation of custom data structures for playlist queuing"
    ],
    problem: "Managing a large collection of music files and creating custom playlists efficiently without a heavyweight GUI application.",
    solution: "Developed a lightweight, terminal-based management system using Java and MySQL to organize songs, manage users, and handle playlist operations seamlessly.",
    challenges: [
      "Establishing secure and efficient database connections using JDBC",
      "Designing an optimized database schema for many-to-many relationships between users, songs, and playlists",
      "Implementing efficient data structures for the play queue"
    ],
    learning: [
      "Advanced Java concepts including Collections and Exception Handling",
      "SQL query optimization and database design",
      "Application architecture and separation of concerns"
    ],
    github: "https://github.com/jaydudhat1412/Music_player_management_system_backend",
    demo: "",
    image: "/project-music.jpg"
  },
  {
    id: "dental-clinic",
    number: "02",
    title: "Dental Clinic Website",
    description: "A responsive website for a local dental clinic to manage appointments and showcase services.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: [
      "Responsive layout for mobile and desktop",
      "Service catalog with descriptions",
      "Appointment booking form UI",
      "Contact and location information"
    ],
    problem: "The clinic needed a digital presence to allow patients to discover services and request appointments online.",
    solution: "Designed and built a clean, accessible, and fast-loading static website with a focus on user experience.",
    challenges: [
      "Ensuring accessibility across all devices",
      "Structuring CSS for maintainability without a framework"
    ],
    learning: [
      "Semantic HTML practices",
      "Advanced CSS layouts (Flexbox/Grid)",
      "Basic JavaScript DOM manipulation"
    ],
    github: "https://github.com/jaydudhat1412/dental-clinic",
    demo: "https://xpertdental.vercel.app",
    image: "/project-dental.jpg"
  },
  {
    id: "iot-traffic",
    number: "03",
    title: "IoT / Traffic System",
    description: "A conceptual IoT-based smart traffic management system designed to optimize traffic flow based on density.",
    category: "IoT / Systems",
    technologies: ["Python", "IoT Protocols", "Data Simulation"],
    features: [
      "Traffic density simulation",
      "Dynamic signal timing adjustment",
      "Data logging for analysis"
    ],
    problem: "Static traffic light timers causing unnecessary delays during off-peak hours or uneven traffic distribution.",
    solution: "Designed a system logic that adjusts green light duration dynamically based on simulated incoming traffic density.",
    challenges: [
      "Designing the logic algorithm for dynamic timing",
      "Simulating realistic data streams"
    ],
    learning: [
      "System design thinking",
      "Python data manipulation",
      "Understanding of IoT architectures"
    ],
    github: "https://github.com/jaydudhat1412/iot-traffic",
    demo: "",
    image: "/project-traffic.jpg"
  }
];
