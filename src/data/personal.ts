export interface PersonalData {
  name: string;
  role: string;
  semester: string;
  college: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  currentFocus: string;
  about: string;
  previousLearned: string[];
  currentLearning: string[];
}

export const personalData: PersonalData = {
  name: "Jay Dudhat",
  role: "Computer Engineering Student & Frontend Developer",
  semester: "03",
  college: "Bachelor of Engineering in Computer Engineering",
  email: "jaydudhat991@gmail.com",
  github: "jaydudhat1412",
  linkedin: "jay-dudhat-484041386",
  location: "Ahmedabad, Gujarat",
  currentFocus: "HTML, CSS, Bootstrap, JavaScript & Python (Semester 3)",
  about: "I am a 3rd-semester Computer Engineering student with a passion for software development. Having mastered Core Java (OOP) and Database Management Systems (DBMS & MySQL) during my 1st and 2nd semesters, I am currently diving deep into Frontend Web Technologies (HTML, CSS, Bootstrap, JavaScript) and Python programming in Semester 3. I enjoy building responsive web interfaces, designing relational databases, and solving algorithmic problems.",
  previousLearned: ["Core Java & OOP", "Database Management Systems (DBMS)", "MySQL & SQL Queries", "Data Structures Basics"],
  currentLearning: ["HTML5", "CSS3 & Responsive Design", "Bootstrap 5", "JavaScript (ES6+)", "Python Programming", "Tailwind CSS"],
};
