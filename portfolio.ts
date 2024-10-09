import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Mevin Perera",
  title: "Hi all, I'm Mevin Perera",
  description:
    "I'm a passionate Software Developer with experience developing Full Stack web applications with React Framework, NodeJS, Springboot, and Machine Learning Technologies such as Python and TensorFlow. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/drive/folders/1nbGGLG8abfBkamPHhmTQ9cykO_eCs174?usp=sharing",
};

export const openSource = {
  githubUserName: "DMevinPerera",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:mevin.dulanya2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/mevin-perera-228206208/",
  github: "https://github.com/DMevinPerera",
  instagram: "https://www.instagram.com/mevinperera/",
  facebook: 'https://web.facebook.com/profile.php?id=100059901467532',
  
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER ON A MISSION TO MASTER EVERY TECH STACK & DIVE INTO MACHINE LEARNING",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Website in React.js"),
        emoji("⚡ Building responsive Websites using Next.js"),
        emoji("⚡ Building backend to Websites using Node.js and SpringBoot"),
        emoji("⚡ Building UI/UX designs using Figma"),
        emoji("⚡ Building ML and CNN Models using Python and TensorFlow"),
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "C language",
          iconifyTag: "logos:c",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "ReactJS",
          iconifyTag: "logos:react",
        },
        {
          skillName: "NodeJS",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "Spring boot",
          iconifyTag: "logos:spring-icon",
        },
        {
          skillName: "NextJS",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
        {
          skillName: "TensorFlow",
          iconifyTag: "logos:tensorflow",
        },
        {
          skillName: "OpenCV",
          iconifyTag: "logos:opencv",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Trello",
          iconifyTag: "logos:trello",
        },
        {
          skillName: "Selenium",
          iconifyTag: "logos:selenium",
        },
        {
          skillName: "Figma",
          iconifyTag: "logos:figma",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};


export const educationInfo: EducationType[] = [
  {
    schoolName: "Sabaragamuwa University of Sri Lanka",
    subHeader: "BSc (Hons) in Software Engineering",
    duration: "May 2021 - August 2025",
    desc: "",
    grade: "Cumulative GPA - 3.61",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "De Mazenod College - Kandana",
    subHeader: "Advanced Level - Phsical Stream",
    duration: "January 2017 - October 2019",
    desc: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "St. Nicholas International School",
    subHeader: "Cambridge London O/L Examination",
    duration: "January 2007 - October 2017",
    desc: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Chartered Institute of Sri Lanka ",
    subHeader: "Chartered Accountancy Level 2",
    duration: "January 2020 - Present",
    desc: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Part-Time ICT Tutor",
    company: "E-TEC Computer Services (Pvt) Ltd",
    companyLogo: "/img/icons/common/group.jpg",
    date: "Aug 2019 - Present",
    desc: "I work part-time as an ICT tutor, helping students excel in Technology, Computer Science, and emerging innovations. My focus is on providing hands-on learning experiences, fostering problem-solving skills, and empowering students to stay ahead in the rapidly evolving tech landscape. Through personalized guidance, I aim to inspire a passion for innovation and equip learners with the essential knowledge they need to succeed in the digital world.",
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    companyLogo: "/img/icons/common/delivery.png",
    date: "Jan 2019 - Sept 2023",
    desc: "Specializing in creating visually compelling designs that communicate ideas effectively.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Derma Skin Application",
    desc: "In the development of Derma, a skin disease detection app, I was responsible for building the machine learning algorithm that powers the detection system. The app uses deep learning techniques to analyze a snapshot of the affected skin and accurately identify various skin diseases.",
    github: "https://github.com/kusha2000/Derma_Skin_App",
  },
  {
    name: "CareBridge",
    desc: "I developed CareBridge for a university project, a social media platform where cancer patients can share their experiences, learn from others, and connect with doctors. The platform fosters a supportive global community, helping patients find strength and guidance during their journey.",
    github: "https://github.com/DMevinPerera/Web-Project-CareBridge",
  },
  {
    name: "SabraNOW",
    desc: "I developed SabraNOW, a mobile application built using React Native and Node.js, which allows for easy updates of new events happening at the university. The app provides students with real-time access to event information, ensuring they stay informed and engaged with campus activities.",
    github: "https://github.com/DMevinPerera/SabraNow",
  },
  {
    name: "EventVibes",
    desc: "I worked on a project called EventVibe, a platform designed for event managers to showcase their skills and portfolios. It provides a convenient space for individuals to easily find and hire event managers for various projects, ranging from large events to smaller occasions like baby showers.",
    github: "https://github.com/kusha2000/EventVibe",
  },
  {
    name: "Campinga",
    desc: "I worked on Campinga, a website that helps users easily find camping equipment near their destination. The platform simplifies the process of locating and renting gear, making it more convenient for people planning camping trips to access the supplies they need.",
    github: "https://github.com/kusha2000/Campinga",
  },
  {
    name: "Selenium Automator",
    desc: "I built a Selenium WhatsApp Message Automator using Selenium and Python to explore the potential of automation. This project automated the process of sending messages on WhatsApp, showcasing the efficiency and power of automation tools.",
    github: "https://github.com/DMevinPerera/Selenium-WhatsApp-Message-Automator",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Mevin Perera",
  description: greetings.description,
  author: "Mevin Perera",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Mevin Perera",
    "Mevin Perera",
    "@DMevinPerera",
    "Mevin Perera ICT",
    "Portfolio",
    "Mevin Portfolio ",
    "Mevin Perera Portfolio",
  ],
};
