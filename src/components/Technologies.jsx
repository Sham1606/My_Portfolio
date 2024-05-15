import { RiReactjsLine } from "react-icons/ri";
import { SiFlask,SiMongodb, SiMysql, SiNumpy, SiPandas, SiPython, SiTypescript } from "react-icons/si";
import { SiTailwindcss } from 'react-icons/si';
import { SiOpencv } from "react-icons/si";
import '../index.css';
import { animate, motion } from "framer-motion";
import { SiPrisma, SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-purple-400" />  {/* Tailwind CSS - Purple */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial = "initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />  {/* MongoDB - Green */}
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-lightblue-400" />  {/* MySQL - Light Blue */}
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-blue-500" />  {/* Python - Blue */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial = "initial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNumpy className="text-7xl text-orange-500" />  {/* NumPy - Orange */}
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPandas className="text-7xl text-red-500" />  {/* Pandas - Red */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiOpencv className="text-7xl text-sky-700" />  {/* Node.js - Green */}
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl text-slate-700" />  {/* Node.js - Green */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPrisma className="text-7xl text-blue-900" />  {/* Node.js - Green */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiScikitlearn className="text-7xl text-orange-400" />  {/* Node.js - Green */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial = "initial" animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-7xl text-orange-500" />  {/* Node.js - Green */}
        </motion.div>


      </div>
    </div>
  );
};

export default Technologies;
