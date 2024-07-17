import VC from "../assets/projects/VC.jpeg"
import OF from "../assets/projects/OF.jpeg";
import Portfolio from "../assets/projects/Portfolio.jpeg";
import traffic from "../assets/projects/traffic.jpeg";

export const HERO_CONTENT = `I am a passionate front-end and Machine Learning developer, specializing in creating robust and scalable web applications with React and Next.js, and delving into the immersive worlds of three.js and gspa. My back-end expertise spans MySQL and MongoDB, while my data science prowess includes Machine Learning with Scikit-Learn and TensorFlow. I thrive on crafting innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As a sophomore college student passionate about web development, I'm committed to refining my skills in creating efficient and user-friendly web applications. Despite being in my second year, I've delved into various technologies like React, Next.js, Python, MySQL, MongoDB, as well as TensorFlow, Scikit-Learn, and OpenCV for machine learning. My journey into web development began with a curiosity for understanding how things work, evolving into a pursuit where I eagerly tackle new challenges. I thrive in collaborative environments, enjoy solving intricate problems, and contribute to open-source projects while nurturing my passion for coding.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Volume Controller",
    image: VC,
    description:
      "In this project we can able to adjust the volume setting with the gesture of our hand",
    technologies: ["Python", "Computer Vision"],
    repositoryUrl: "https://github.com/Sham1606/VC"
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
