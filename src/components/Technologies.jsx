import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPython, SiPrisma, SiTensorflow, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

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

const hoverEffect = {
  scale: 1.2,
  transition: { duration: 0.3 }
};

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial" 
          animate="animate"
          whileHover={hoverEffect}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial" 
          animate="animate"
          whileHover={hoverEffect}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial" 
          animate="animate"
          whileHover={hoverEffect}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial" 
          animate="animate"
          whileHover={hoverEffect}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-lightblue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial" 
          animate="animate"
          whileHover={hoverEffect}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial" 
          animate="animate"
          whileHover={hoverEffect}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPrisma className="text-7xl text-blue-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial" 
          animate="animate"
          whileHover={hoverEffect}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
