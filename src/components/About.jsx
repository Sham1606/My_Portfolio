import my_img from "../assets/projects/my_img.png";
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import { highlightWords } from "../utils/highlights";

const About = () => {
  const wordsToHighlight = {
    "Front-End": "#A25CBF",
    "Machine Learning": "#4DE18B",
    "React": "#61DAFB",
    "Next.js": "#FFFFFF",
    "three.js": "#FF6F61",
    "GSAP": "#88CE02",
    "MySQL": "#4479A1",
    "MongoDB": "#4DB33D",
    "Scikit-Learn": "#F7931E",
    "Tensorflow": "#F7931E",
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About 
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={my_img} alt="about" className="w-auto h-auto rounded-xl" />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {highlightWords(ABOUT_TEXT, wordsToHighlight)}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
