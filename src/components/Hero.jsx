import { HERO_CONTENT } from "../constants";
import auro from "../assets/auro.jpg";
import { motion } from "framer-motion";
import { highlightWords } from "../utils/highlights";
import { Link as ScrollLink } from "react-scroll";
import { useRef } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  const aboutRef = useRef(null);

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

  const handleLearnMoreClick = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center border-b border-neutral-900 pb-4 lg:mb-40">
      <motion.h1
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center"
      >
        Sham Ganesh S
      </motion.h1>
      <motion.span
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center"
      >
        <span style={{ color: "#A25CBF" }}>Front-End</span> &amp;{" "}
        <span style={{ color: "#4DE18B" }}>Data Scientist</span>
      </motion.span>
      <motion.p
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="my-2 max-w-xl py-6 font-light tracking-tighter text-center"
      >
        {highlightWords(HERO_CONTENT, wordsToHighlight)}
      </motion.p>
      
      <div ref={aboutRef} className="flex justify-center w-full mt-8">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          src={auro}
          alt="Sham Ganesh S"
          className="w-[800px] h-[auto] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
