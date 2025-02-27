import { m } from "framer-motion";
import {
  webdev,
  css,
  threejs_inverted,
  figma,
  sih,
  git,
  meta,
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
  shoestrideAR,
  webapp,
  aws,
  python,
  cpp,
  mcts,
  care,
  coforge,
  ombre,
  software_engineer,
  flutter,
  dart,
  postman,
  swift,
  mit,
} from "../assets";

export const navLinks = [
  {
    id: "projects",
    title: "Full Stack Projects",
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio",
    link: "https://nagargojeamar.lovable.app/"
  },
  // {
  //   id: "resume",
  //   title: "Resume",
  //   link: "https://drive.google.com/file/d/16XT-h_V-wTWIEl7fD6ej4eH4IzXs9YlF/view"
  // },
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
    title: "GenAI Developer",
    icon: webdev,
  },
  {
    title: "Full Stack Software Developer",
    icon: software_engineer,
  },
  {
    title: "Mobile App Developer",
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
    name: "Dart",
    icon: dart,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwindcss",
    icon: tailwind,
  },
  {
    name: "Mongodb",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Cognitive",
    icon: null,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      // "Integrated 20+ microservices addressing low-latency, scalability resulting in $240K+ revenue growth",
      // "Spearheaded development of dynamic web apps using Java & JavaScript, improving security & database querying, resulting in a 17% improvement in response time",
      // "Revamped resource-intensive SQL queries into joins, optimizing data retrieval efficiency by 30%",
      // "Demonstrated SDLC expertise by leading code reviews, testing, and cross-functional collaboration from design to production using AWS, Spring-boot framework, achieving an 80% faster delivery time",
      // "Developed and maintained clusters, enhancing system reliability and uptime. Adapted to changing client requirements, delivering high-quality solutions",
      // "Lead a group of 3, implemented scalable production code for car parks project led by Singapore govt, resulting in a 40% increase in efficiency and sign-off time",
      // "Spearheaded cross-regional collaboration with teams in India and Singapore to lead project-wide efforts in writing technical documentation for new features, resulting in an 80% reduction in customer support issues and a 25% increase in product utilization",
      // "Developed and debugged backend and frontend at a production level, collaborating with managers to ensure the robustness of applications and streamline processes. Acquired a strong understanding of software fundamentals, encompassing software design, specifications, CI/CD, code modularity, and maintainability",
    ],
  },{
    title: "Software Engineer",
    company_name: "Coforge",
    icon: coforge,
    iconBg: "#383E56",
    date: "June 2021 - Sept 2023",
    points: [
      // "Integrated 20+ microservices addressing low-latency, scalability resulting in $240K+ revenue growth",
      // "Spearheaded development of dynamic web apps using Java & JavaScript, improving security & database querying, resulting in a 17% improvement in response time",
      // "Revamped resource-intensive SQL queries into joins, optimizing data retrieval efficiency by 30%",
      // "Demonstrated SDLC expertise by leading code reviews, testing, and cross-functional collaboration from design to production using AWS, Spring-boot framework, achieving an 80% faster delivery time",
      // "Developed and maintained clusters, enhancing system reliability and uptime. Adapted to changing client requirements, delivering high-quality solutions",
      // "Lead a group of 3, implemented scalable production code for car parks project led by Singapore govt, resulting in a 40% increase in efficiency and sign-off time",
      // "Spearheaded cross-regional collaboration with teams in India and Singapore to lead project-wide efforts in writing technical documentation for new features, resulting in an 80% reduction in customer support issues and a 25% increase in product utilization",
      // "Developed and debugged backend and frontend at a production level, collaborating with managers to ensure the robustness of applications and streamline processes. Acquired a strong understanding of software fundamentals, encompassing software design, specifications, CI/CD, code modularity, and maintainability",
    ],
  },
  {
    title: "Co-founder",
    company_name: "AtherAR",
    icon: null,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: ["Building AR/VR products using swift"],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Ombre",
    icon: ombre,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - March 2021",
    points: [
      // "Built frontend, backend, and cloud deployments for mobile apps, resulting in a 20% improvement in application performance",
      // "Transformed notification systems minimizing frontend computation which effectuated a remarkable 20x upswing in appli- cation downloads over 4 months",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Webapp",
    description:
      "This project is designed to leverage cloud-native technologies to build a scalable, secure, and automated deployment infrastructure. With a focus on automation, security, and performance, it integrates CI/CD pipelines, serverless computing, and microservices architecture to create a robust and efficient system.",
    tags: [
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: webapp,
    source_code_link: "https://github.com/iaamar/webapp",
  },{
    name: "ShoeStrideAR",
    description:
      "The proposed mobile app aims to disrupt the traditional shoe shopping experience by introducing augmented reality (AR) technology to the process. In today's era of online shopping, one of the primary challenges faced by consumers, especially in the footwear industry, is the inability to physically try on products before making a purchase. This limitation often leads to uncertainty and dissatisfaction among shoppers and can result in lower conversion rates for retailers. To address this challenge, our project focuses on developing a mobile application that leverages AR to enable users to virtually try on shoes in real-time.",
    tags: [
      {
        name: "Swift",
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
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "AR/VR",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
    ],
    image: shoestrideAR,
    source_code_link: "https://github.com/iaamar/ShoeStrideAR",
  },
  {
    name: "Monte Carlo Tree Search (MCTS) for Tic-tac-toe and Connect Four",
    description:
      "This project implements the Monte Carlo Tree Search (MCTS) algorithm for two classic games: Tic-tac-toe and Connect Four. MCTS is a search technique used in decision processes, notably in AI applications for game-playing. This repository contains the implementation details, optimizations, performance evaluations, and all associated code.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
    ],
    image: mcts,
    source_code_link: "https://github.com/iaamar/INFO6205-MCTS-FinalProject",
  },
  {
    name: "Care+",
    description:
      "This app is build for checking and maintaining EGC Data and make Decision on Data using SVM (Simple Vector Machine) Model",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "red-text-gradient",
      },
    ],
    image: care,
    source_code_link: "https://github.com/iaamar/Health-AI2",
  },
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
      "Implemented production level MERN app, allowing users to perform CRUD on projects, users, workitems, drag and drop items in kanban board. Implemented sections, includes all REST API's: login, projects, and kanban board.",
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
    name: "MoneyBall : A Decision Making Process For Team's Success in Baseball",
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
];

const programs = [
  {
    company: "Meta Developers Community",
    title: "Hackathon Winner",
    icon: meta,
    date: "",
    description:
      "Meta Developers Community for Learn - an EdTech app for disabled children (AI/NLP/openCV)"
  },
  {
    company: "Smart India Hackathon",
    title: "Finalist",
    icon: sih,
    date: "",
    description:
      "Led a dynamic team in various hackathons, successfully developed innovative projects in machine learning, Python, and the MERN stack. Demonstrated strong leadership and technical expertise in project ideation, planning, and execution.",
  },
  {
    company: "MIT ADT University",
    title: "Academic Scholar",
    icon: mit,
    date: "",
    description: "Awarded for academic excellence in the field of Computer Science",
  },
  {
    company: "Google / Oracle",
    title: "GenAI, Machine Learning, Java, SQL, Python Certified",
    icon: mit,
    date: "",
    description: "https://tinyurl.com/5eduhme5",
  }
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  programs,
};
