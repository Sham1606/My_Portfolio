import project1 from "../assets/projects/project-1.jpg";
import traffic from "../assets/projects/traffic.jpeg";
import auto from "../assets/projects/auto.jpeg";
import chirping_hub from "../assets/projects/chirping_hub.png"

export const HERO_CONTENT = `I am a passionate front-end and Machine Learning developer with a knack for 
                            crafting robust and scalable web applications and Machine Learning Models. 
                            With a good experience, I have honed my skills in front-end technologies like React and Next.js, and also with a quite a little knowledge of three.js and gspa
                            as well as back-end technologies like  MySQL and MongoDB. And in Data Science also involving in Machine Learning Technologies such as Scikit-Learn and Tensorflow for Machine Learning
                            My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As a college sophomore passionate about web development, I am dedicated to honing my skills in creating efficient and user-friendly web applications. Despite being in my second year, I have already begun exploring various technologies, including React, Next.js, Python, MySQL, MongoDB, and exciting machine learning modules like TensorFlow, scikit-learn, and OpenCV. My journey into the world of web development started with a fascination for understanding how things work, and it has blossomed into a pursuit where I eagerly embrace new challenges and learning opportunities. I thrive in collaborative settings and take joy in tackling intricate problems to deliver innovative solutions. Beyond academics, I enjoy staying active, experimenting with emerging technologies, and contributing to open-source projects, all while nurturing my passion for coding`;

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
    title: "Plaid - A Banking and also a payment website",
    image: project1,
    description:
      "A fully functional banking website for transactions and user's can also check their transactions by means of visualizing and also provides user authentication.Which is a prototype for my future ideas in terms of business and payments",
    technologies: ["HTML", "CSS", "React", "Next.js","TypeScript", "Banking API's"],
  },
  {
    title: "Chirping Hub",
    image: chirping_hub,
    description:
      "An application for posting our thoughts and ideas to the world for a better change",
    technologies: ["React", "Next.JS", "Tailwind CSS", "Prisma", "MongoDB", "Google OAuth"],
  },
  {
    title: "Alchemist (evokes the idea of transforming raw data into something valuable)",
    image: auto,
    description:
      "An Application where we will just upload the dataset or data in form of (URL, Local Path(.csv, .xlsx, .json etc..,), Databases(MongoDB, MySQL) even API where it will take the data and process and keep it ready for operations possible for both Data Science and Machine Learning or only for Data Science, which is a prototype and is still on development stage",
    technologies: ["HTML", "CSS", "Python",  "Machine Learning", "Flask"],
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
