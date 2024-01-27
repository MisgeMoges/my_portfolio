// import data from "../data";
// import { motion } from "framer-motion";

// const textVariants = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       duration: 2,
//       staggerChildren: 0.5,
//     },
//   },
// };

// const cardVariants = {
//   initial: {
//     opacity: 0,
//     x: -500,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 2,
//     },
//   },
// };

// const cardVariantsRight = {
//   initial: {
//     opacity: 0,
//     x: 800,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 3,
//     },
//   },
// };

// export default function MySkills() {
//   return (
//     <motion.section
//       className="skills--section"
//       id="mySkills"
//       variants={textVariants}
//       initial="initial"
//       animate="animate"
//     >
//       <motion.div
//         className="portfolio--container"
//         variants={textVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <motion.h2 className="skills--section--heading" variants={textVariants}>
//           <span style={{ color: "#e62872" }}>My </span> Expertise
//         </motion.h2>
//       </motion.div>
//       <motion.div
//         className="skills--section--container"
//         variants={textVariants}
//         initial="initial"
//         animate="animate"
//       >
//         {data?.skills?.map((item, index) => (
//           <motion.div
//             key={index}
//             className="skills--section--card"
//             variants={index % 2 === 0 ? cardVariants : cardVariantsRight}
//             initial="initial"
//             animate="animate"
//           >
//             <div className="skills--section--img">
//               <img src={item.src} alt="Product Chain" />
//             </div>
//             <motion.div className="skills--section--card--content">
//               <h3 className="skills--section--title">{item.title}</h3>
//               <p className="skills--section--description">{item.description}</p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

import React, { useState } from "react";
import FilterButton from "./FilterButton";
import {motion} from "framer-motion"
import data from "../../data";
import SkillsList from "./SkillsList";
const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};


const categories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile-App",
  "Design",
  "Database",
  "Git-GitHub",
];

const SkillsContainer = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  const handleFilterClick = (category) => {
    setCurrentCategory(category);
  };

  const filteredSkills =
    currentCategory === "All"
      ? data?.skills
      : data?.skills?.filter((skill) => skill.category === currentCategory);
  console.log(filteredSkills);
  return (
    <div className="skills--section" id="mySkills">
      <motion.div
        className="portfolio--container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 className="skills--section--heading" variants={textVariants}>
          <span style={{ color: "#e62872" }}>My </span> Expertise
        </motion.h2>
      </motion.div>
      <div className="filter-buttons">
        {categories.map((category, index) => (
          <FilterButton
            key={index}
            category={category}
            onClick={handleFilterClick}
          />
        ))}
      </div>
      <hr className="divider"  />
      <SkillsList skills={filteredSkills} />
    </div>
  );
};

export default SkillsContainer;
