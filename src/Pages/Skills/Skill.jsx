
import React from "react";
import {motion} from "framer-motion"
// import Rating from "./Rating"; // Assuming you have a component for displaying ratings
const cardVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const cardVariantsRight = {
  initial: {
    opacity: 0,
    x: 800,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};
const Skill = ({ title, image, description, category, index, rating }) => {
  return (
    <motion.div
      className="skills--section--card "
      variants={index % 2 === 0 ? cardVariants : cardVariantsRight}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className={`skill-card ${category.toLowerCase()}`}
        variants={index % 2 === 0 ? cardVariants : cardVariantsRight}
        initial="initial"
        animate="animate"
      >
        <motion.div className="skill-image">
          <img src={image} alt={title} />
        </motion.div>
        <motion.div className="skill-details">
          <h3>{title}</h3>
          <p>{description}</p>
          {/* <div className="rating"></div> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skill;
