import {
  webdev,
  css,
  threejs_inverted,
  figma,
  sih,
  git,
  close,
  html,
  javascript,
  mongodb,
  nodejs,
  menu,
  reactjs,
  redux,
  tailwind,
  typescript,
  baseball,
  mobiledev,
  iosdev,
  projectmanagement,
  railway,
  threejs,
  github,
  linkedin,
  outlook,
  me,
  resume,
  coforge,
  ombre,
  software_engineer,
  flutter,
  dart,
  postman,
  swift,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "programs",
    title: "Leadership",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

export const navMedia = [
  {
    id: "LinkedIn",
    image: linkedin,
    link: "https://www.linkedin.com/in/amar-nagargoje/",
  },
  {
    id: "GitHub",
    image: github,
    link: "https://github.com/iaamar",
  },
  {
    id: "Email",
    image: outlook,
    link: "mailto:nagargoje.a@northeastern.edu",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: software_engineer,
  },
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Developer (Android/iOS)",
    icon: mobiledev,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs_inverted,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "tailwindcss",
    icon: tailwind,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Software Engineer ",
    company_name: "Coforge",
    icon: coforge,
    iconBg: "#383E56",
    date: "July 2021 - Sept 2023",
    points: [
      "Lead a group of 3, implemented scalable production code for car parks project led by Singapore govt, resulting in a 40% increase in efficiency and sign-off time",
      "Built technical solutions in collaboration with creative directors and reviewed code with to meet business requirements, resulting in a 40% improvement in project delivery time",
      "Spearheaded cross-regional collaboration with teams in India and Singapore to lead project-wide efforts in writing technical documentation for new features, resulting in an 80% reduction in customer support issues and a 25% increase in product utilization",
      "Developed and debugged backend and frontend at a production level, collaborating with managers to ensure the robustness of applications and streamline processes. Acquired a strong understanding of software fundamentals, encompassing software design, specifications, CI/CD, code modularity, and maintainability",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Ombre",
    icon: ombre,
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
      "Built frontend, backend, and cloud deployments for mobile apps, resulting in a 20% improvement in application performance",
      "Transformed notification systems minimizing frontend computation which effectuated a remarkable 20x upswing in appli- cation downloads over 4 months",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Last Minute Ticket Reservation System [Sponsor - Indian Railways]",
    description:
      "Designed and implemented an online railway ticketing system for the Indian Government during the COVID-19 crisis for commuters. Handled enormous amounts of sensitive data, applying algorithms, regulating OTP systems, validation, and security measures, resulting in a 25% increase in customer trust, and providing reliable service to the commuters on the go",
    tags: [
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: railway,
    source_code_link: "https://github.com/iaamar/",
  },
  {
    name: "Work Wise - A Free Project Management Tool",
    description:
      "Implemented production level MERN app, allowing users to perform CRUD on projects, users, workitems, drag and drop items in kanban board. Implemented sections, includes all REST API’s: login, projects, and kanban board.",
    tags: [
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "REST",
        color: "blue-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "green-text-gradient",
      },
    ],
    image: projectmanagement,
    source_code_link: "https://github.com/iaamar/workwise",
  },
  {
    name: "MoneyBall : A Decision Making Process For Team’s Success in Baseball",
    description:
      "Built an algorithm to predict matches results of baseball for home win or away win and to determine what are the significant variables to win matches. Used data driven decision making process for evaluation of players/teams on previous experiences/perfomance",
    tags: [
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
      {
        name: "Educational",
        color: "pink-text-gradient",
      },
    ],
    image: baseball,
    source_code_link:
      "https://drive.google.com/drive/folders/1I5OcpzsKWeBalX_yiq7ki040db3mBfwc?usp=sharing",
  },
  {
    name: "Personal Website",
    description:
      "Welcome to my website! This is my first project using ThreeJS and React. I want to give special thanks to JavaScript Mastery for the ThreeJS template, which I heavily modified to my liking. I also modified the magical particles effect by Eli Shmerler to fit my website, learning about vertex and fragment shaders along the way. Hope you all enjoyed and learned a lot about me!",
    tags: [
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Shaders",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
    ],
    image: me,
  },
];

const programs = [
  {
    company: "Smart India Hackathon",
    title: "Team Lead",
    icon: sih,
    date: "Dec 2020 - Dec 2020",
    description:
      "Led a dynamic team in various hackathons, successfully developed innovative projects in machine learning, Python, and the MERN stack. Demonstrated strong leadership and technical expertise in project ideation, planning, and execution.",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  programs,
};
