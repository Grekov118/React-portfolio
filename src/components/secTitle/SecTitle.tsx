import { motionVariants } from "../utils/animation";
import "./SecTitle.css";
// eslint-disable-next-line
import { motion } from "motion/react";

interface SecTitleProps {
  title: string;
  subtitle: string;
}



function SecTitle({ title, subtitle }: SecTitleProps) {
  return (
    <>
      <motion.h2
        className="inner-title"
        custom={1}
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.h3
        className="inner-second-title"
        custom={2}
        variants={motionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {subtitle}
      </motion.h3>
    </>
  );
}

export default SecTitle;
