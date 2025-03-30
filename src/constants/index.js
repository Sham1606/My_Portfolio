// import VC from "../assets/projects/VC.jpeg"
import OF from "../assets/projects/OF.jpeg";
import Portfolio from "../assets/projects/Portfolio.jpeg";
import traffic from "../assets/projects/traffic.jpeg";
// import Technologies from "../components/Technologies";
import CB from "../assets/projects/clientsbridge.jpeg";
import DC from "../assets/projects/dietcraft.png"
import auth from "../assets/projects/auth.jpg";

export const HERO_CONTENT = `I am a passionate front-end and Machine Learning developer, specializing in creating robust and scalable web applications with React.JS, and delving into the immersive worlds of styling frameworks. My back-end expertise spans MySQL and MongoDB, while my data science prowess includes Machine Learning with Scikit-Learn and TensorFlow. I thrive on crafting innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Instead of Describing my Skills as Paragraph, I would love to showacase that through my skills`;

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contacts" },
];


export const EXPERIENCES = [
  {
    id: 1,
    company: "ClientsBridge",
    position: "Frontend Developer Intern",
    duration: "September 2024 - Present",
    description: "Working on cutting-edge web applications using React.JS, CSS. Collaborating with a fellow blooming developers to implement responsive designs and optimize performance.",
    skills: ["React", "CSS", "Socket-io-Client"],
    logo: CB
  },
  {
    id: 2,
    company: "DietCraft",
    position: "Frontend Developer Intern",
    duration: "October 2024 - Present",
    description: "Working on my known web application development skills to enhance an AI diet plan webiste using React.JS, CSS. Collaborating with Machine Learning and Artificial Intelligence",
    skills: ["React.JS", "Tailwind CSS", "OAuth", "MongoDB"],
    logo: DC
  }
];



export const PROJECTS = [
  {
    title: "Auth",
    image: auth,
    description:
      "In this project, I have built a full-stack authentication system with React.js, Node.js, Express.js, and MongoDB. The system uses JWT (JSON Web Token) for authentication and bcrypt.js for password hashing. The system also uses MongoDB with Mongoose for data storage. And also account verification and forgot password functionality",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB","JWT (JSON Web Token)", "bcrypt.js","MongoDB with Mongoose"],
    repositoryUrl: "https://github.com/Sham1606/Auth"
  },
  {
    title: "Analysis of Online Food Ordering",
    image: OF,
    description:
      "This is descriptive and visual analysis for recent trend analysis on the recent development of online food ordering",
    technologies: ["Python", "Plotly","Matplotlib","Seaborn"],
    repositoryUrl: "https://github.com/Sham1606/Analyzing_and_Visualizing_Online_Food_Ordering/blob/main/Online_foods.ipynb"
  },
  {
    title: "Sham's Byte - An Portfolio about Myself ",
    image: Portfolio,
    description:
      "This is a Portfolio Website about myself and my works, which shows that, I am not only a Data Scientist, but also a Front-End Developer",
    technologies: ["React JS", "Tailwind CSS", "Framer Motion"],
    repositoryUrl: "https://github.com/Sham1606/My_Portfolio"
  },
  {
    title: "Traffic Predicition",
    image: traffic,
    description:
      "A Website for predicting the traffic of a particular day by giving the data, weather, and whether it is any holiday or any auspicious day ",
    technologies: ["HTML", "CSS", "JS", "Numpy", "Pandas","Random Forest(ML)","Flask"],
    repositoryUrl: "https://github.com/Sham1606/Traffic_Prediction/tree/main/_01_Traffic_predicition"
  },
];

export const CONTACT = {
  address: "No. 11, Aurobindo Street, Heritage Town, Puducherry - 605 001 ",
  phoneNo: "+91 9003927447 ",
  email: "shamganesh1606@gmail.com",
};
