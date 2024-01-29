
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
