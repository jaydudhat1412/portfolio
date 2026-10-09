export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  categoryKey: 'web' | 'backend' | 'iot';
  featured: boolean;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  challenges: string[];
  learning: string[];
  github: string;
  demo: string;
  image: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "music-player",
    number: "01",
    title: "Music Player Management System",
    description: "A terminal & database-driven music management ecosystem combining Core Java, JDBC, and MySQL with custom data structures for playlist queues.",
    category: "Software Application",
    categoryKey: "backend",
    featured: true,
    technologies: ["Java", "JDBC", "MySQL", "Data Structures", "OOP Architecture"],
    features: [
      "User authentication and multi-profile session management",
      "Dynamic song catalog, playlist creation, and nested tagging",
      "Real-time library searching, sorting, and genre filtering",
      "High-performance connection pooling with JDBC",
      "Custom doubly-linked list & priority queue for seamless playback sequencing"
    ],
    problem: "Managing extensive audio collections and custom playlists efficiently while maintaining low system overhead and ACID database integrity.",
    solution: "Engineered a modular backend architecture leveraging normalized relational schemas in MySQL and custom in-memory queuing logic in Java.",
    challenges: [
      "Designing optimized SQL schemas for many-to-many relationships among users, tracks, and playlists",
      "Handling transactional consistency and thread-safe queue updates during track transitions",
      "Optimizing query execution time across thousands of indexed song records"
    ],
    learning: [
      "Advanced Java Collections Framework, Generics, and custom Exception hierarchies",
      "Relational schema indexing, normalization (3NF), and query profiling",
      "Separation of concerns using clean DAO (Data Access Object) design patterns"
    ],
    github: "https://github.com/jaydudhat1412/Music_player_management_system_backend",
    demo: "",
    image: "/project-music.jpg",
    highlights: ["Custom Queue Structures", "Normalized MySQL Schema", "DAO Architecture"]
  },
  {
    id: "dental-clinic",
    number: "02",
    title: "Dental Clinic Web Platform",
    description: "Modern, high-performance responsive web portal built for healthcare practice discovery, service catalogs, patient testimonials, and appointment scheduling.",
    category: "Full Stack Web",
    categoryKey: "web",
    featured: true,
    technologies: ["JavaScript", "HTML5", "CSS3 / Modern Layouts", "Responsive UX", "Vercel"],
    features: [
      "Fluid responsive layout tested across mobile, tablet, and ultra-wide screens",
      "Interactive treatment and cosmetic dentistry service catalog",
      "Client-side appointment booking form with instant validation",
      "Interactive clinic location map, emergency contacts, and working hours"
    ],
    problem: "The clinic required a professional digital presence with sub-second loading times to convert visitors into booked patient consultations.",
    solution: "Designed and built an ultra-fast, accessible static web portal with intuitive mobile navigation and seamless appointment inquiry workflows.",
    challenges: [
      "Achieving flawless 100/100 Lighthouse performance metrics without heavy JS bundles",
      "Ensuring maximum accessibility (a11y) and readable contrast across dark and light displays"
    ],
    learning: [
      "Semantic HTML5 structure and SEO metadata optimization",
      "Modern CSS Grid & Flexbox architectural composition",
      "Production deployment pipelines and domain routing on Vercel"
    ],
    github: "https://github.com/jaydudhat1412/dental-clinic",
    demo: "https://xpertdental.vercel.app",
    image: "/project-dental.jpg",
    highlights: ["Live Production Site", "Sub-second Page Load", "100% Mobile Responsive"]
  },
  {
    id: "iot-traffic",
    number: "03",
    title: "Smart IoT Traffic Signal Optimization",
    description: "An algorithm-driven IoT traffic management system that simulates vehicular density and dynamically computes optimal green-signal windows.",
    category: "IoT / Systems",
    categoryKey: "iot",
    featured: true,
    technologies: ["Python", "IoT Protocols", "Data Simulation", "Algorithms", "Analytics"],
    features: [
      "Simulated multi-intersection vehicle density telemetry",
      "Dynamic signal duration calculation based on weighted traffic queues",
      "Emergency vehicle priority override mechanism",
      "Historical throughput logging and bottleneck analysis report"
    ],
    problem: "Static, timer-based traffic lights create avoidable congestion, idling fuel emissions, and emergency vehicle delays.",
    solution: "Architected a dynamic scheduling algorithm in Python simulating sensor input to adaptively extend or truncate signal intervals based on real-time density.",
    challenges: [
      "Balancing fairness across secondary streets without starving main thoroughfares",
      "Simulating asynchronous packet transmissions with simulated sensor packet loss"
    ],
    learning: [
      "Mathematical modeling of queueing systems and flow optimization",
      "Python data manipulation, logging, and asynchronous event loops",
      "Understanding embedded hardware constraints and IoT telemetry architectures"
    ],
    github: "https://github.com/jaydudhat1412/iot-traffic",
    demo: "",
    image: "/project-traffic.jpg",
    highlights: ["Density Algorithm", "Dynamic Signal Timers", "Telemetry Simulation"]
  },
  {
    id: "smart-classroom",
    number: "04",
    title: "Smart Classroom & Academic Portal",
    description: "Comprehensive educational management prototype supporting course tracking, assignment submissions, automated attendance logging, and student dashboards.",
    category: "Full Stack Web",
    categoryKey: "web",
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive UI"],
    features: [
      "Role-based views for students and faculty instructors",
      "Course schedule manager with automated class reminder indicators",
      "Assignment submission tracker with status badges and deadlines",
      "Real-time attendance percentage analytics and grade prediction"
    ],
    problem: "Academic tracking across multiple engineering courses is often fragmented across multiple disjointed spreadsheets and group chats.",
    solution: "Consolidated student course progression, timetable viewing, and project submission deadlines into a single intuitive web interface.",
    challenges: [
      "Designing responsive timetable grids that adapt gracefully to small smartphone screens",
      "Managing complex client-side state transitions across academic semesters"
    ],
    learning: [
      "Component-driven frontend architecture with reusable UI primitives",
      "State management best practices and responsive layout strategies",
      "UX hierarchy tailored specifically for busy college students"
    ],
    github: "https://github.com/jaydudhat1412",
    demo: "",
    image: "/project-classroom.jpg",
    highlights: ["Student Analytics", "Timetable Grid", "Role Management"]
  },
  {
    id: "developer-ecosystem",
    number: "05",
    title: "Developer Portfolio & Interactive Canvas",
    description: "Cutting-edge personal engineering portfolio featuring live background Particle Drift canvas, 3D interactive showcase, command palette, and terminal CLI.",
    category: "Full Stack Web",
    categoryKey: "web",
    featured: false,
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vite"],
    features: [
      "Live canvas particle simulation running on sandboxed background thread",
      "Full 3D project deck carousel with touch swipe gestures and grid view toggle",
      "Interactive developer CLI terminal emulator with command parser",
      "Keyboard-accessible Command Palette (`Ctrl/Cmd + K`) for instant navigation"
    ],
    problem: "Standard generic template portfolios fail to reflect true engineering craftsmanship, technical depth, and attention to micro-interactions.",
    solution: "Crafted a bespoke, lightning-fast dark mode portfolio engineered with custom motion physics, glassmorphic typography, and robust mobile ergonomics.",
    challenges: [
      "Achieving seamless 60fps animations across mobile browsers and low-power devices",
      "Integrating custom iframe particle mechanics without intercepting page touch events"
    ],
    learning: [
      "Advanced Framer Motion orchestration, spring physics, and gesture controls",
      "Tailwind CSS v4 `@theme` token customization and performant glassmorphism",
      "TypeScript type safety across complex multimodal interactive components"
    ],
    github: "https://github.com/jaydudhat1412/portfolio_project",
    demo: "https://xpertdental.vercel.app",
    image: "/project-future.jpg",
    highlights: ["Interactive Canvas", "Interactive CLI", "60 FPS Animations"]
  }
];
