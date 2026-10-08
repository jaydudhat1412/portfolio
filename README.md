# Jay Dudhat — Personal Portfolio

This is a complete, production-quality personal portfolio website built for a Semester 3 Computer Engineering student. 
It features a "Developer Workspace" design concept that feels like a real digital studio, completely devoid of standard AI-generated tropes.

## 1. Project Overview
This portfolio highlights skills, projects, and learning journey in an interactive, minimal, and developer-focused way. Key features include:
- Interactive **Command Palette** (Press `CMD+K` or `CTRL+K`)
- **Project Explorer** with detailed case studies
- Categorized **Skills** with an interactive terminal-style popup
- Integration with **GitHub REST API** to fetch recent public repositories
- Real-world project placeholders tailored for a Semester 3 student

## 2. Technology Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel (Recommended)

## 3. Folder Structure
```
├── public/              # Static assets (favicon, resume placeholder)
├── src/
│   ├── components/      # React components (Navbar, Hero, ProjectExplorer, etc.)
│   ├── data/            # Local data files (projects.ts, skills.ts, etc.)
│   ├── hooks/           # Custom React hooks (useGitHub.ts)
│   ├── pages/           # Page layouts (Home.tsx)
│   ├── App.tsx          # Root application component
│   └── main.tsx         # Application entry point
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind design system configuration
└── vite.config.ts       # Vite configuration
```

## 4. Installation
Make sure you have [Node.js](https://nodejs.org/) installed.
1. Clone or download this repository.
2. Open terminal in the project directory.
3. Run `npm install` to install dependencies.

## 5. Development
Run the local development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

## 6. Production Build
To create an optimized production build:
```bash
npm run build
```
To preview the build:
```bash
npm run preview
```

## 7. Editing Personal Information
Open `src/data/personal.ts` to update your name, email, GitHub username, LinkedIn handle, and current focus. 
The application will dynamically update wherever this information is used.

## 8. Adding Projects
Open `src/data/projects.ts` to manage your projects. 
Each project follows a strict TypeScript interface to ensure consistency. 
You can add details like technologies, problem, solution, features, challenges, and links.

## 9. Adding Skills
Open `src/data/skills.ts` to update your categorized skills. 
You can add descriptions and related concepts which appear when a skill is clicked in the UI.

## 10. GitHub Configuration
The GitHub integration automatically uses the username provided in `src/data/personal.ts`.
It uses the public REST API, so no authentication tokens are required.

## 11. LinkedIn Configuration
Update your LinkedIn username in `src/data/personal.ts`.

## 12. Resume Configuration
Place your actual resume in the `public/` directory and name it `resume.pdf`. 
The "View Resume" buttons automatically link to this file.

## 13. Contact Form Configuration
The current contact form is a frontend simulation. To make it functional, you can integrate [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) into `src/components/Contact.tsx`.

## 14. Deployment to Vercel
1. Create a free account on [Vercel](https://vercel.com).
2. Install Vercel CLI (`npm i -g vercel`) or connect your GitHub repository.
3. Run `vercel` in the project root, or deploy via the Vercel dashboard.
Vercel will automatically detect Vite and configure the build settings.
