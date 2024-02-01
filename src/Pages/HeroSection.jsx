import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import GoToTop from "../Components/GoToTop";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};
const imageVariants = {
  initial: {
    x: 1500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {


  return (
    <motion.section id="heroSection" className="hero--section">
      <motion.div
        className="hero--section--content--box"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="hero--section--content"
          style={{ marginBottom: "50px" }}
        >
          <motion.p className="section--title" variants={textVariants}>
            Hey, I'm Misgan
          </motion.p>
          <motion.h2 className="hero--section--title" variants={textVariants}>
            <span
              className="hero--section-title--color"
              style={{ color: "#e62872" }}
            >
              Software
            </span>
            <br />
            Developer
          </motion.h2>
          <p className="hero--section-description">
            I'm a passionate Computer Engineer with expertise in a variety of
            programming languages. With this diverse skill
            set, I bring innovation to life through the power of code.
          </p>
        </motion.div>
        <motion.div variants={textVariants}>
          <motion.button
            className="btn btn-primary get_in_touch"
            whileHover={{
              rotate: 360,
              scale: 1.2,
              padding: "10px 10px",
            }}
            variants={textVariants}
          >
            <NavLink to="/contact" className="get_in_touch">
              Get In Touch
            </NavLink>
          </motion.button>
        </motion.div>
      </motion.div>
      
      <MovingBubbles />
      <motion.div className="hero--section--img" initial="initial" animate="animate" variants={imageVariants}>
        <img src="./img/hero.png" alt="Hero Section"  variants = {imageVariants}/>
      </motion.div>
    </motion.section>
  );
}


const MovingBubbles = () => {
  const bubbles = [
    { id: 1, x: 200, y: 100, directionX: 5, directionY: 5 },
    { id: 2, x: 300, y: 100, directionX: 10, directionY: 5 },
    { id: 3, x: 1200, y: 90, directionX: -10, directionY: 5 },
    { id: 4, x: 800, y: 50, directionX: -15, directionY: 10 },
    { id: 5, x: 500, y: 500, directionX: -10, directionY: -10 },
    { id: 6, x: 1200, y: 700, directionX: -8, directionY: -5 },
    { id: 7, x: 800, y: 800, directionX: -5, directionY: -1 },
  ];

  return (
    <div className="moving-bubbles-container">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="bubble"
          style={{ left: bubble.x, top: bubble.y }}
          animate={{
            x: bubble.x + 50 * bubble.directionX,
            y: bubble.y + 50 * bubble.directionY,
          }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
      ))}
    </div>
  );
};


