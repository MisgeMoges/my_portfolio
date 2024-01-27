// SkillsList.js
import React from "react";
import Skill from "./Skill";
import {motion} from "framer-motion"

const SkillsList = ({ skills }) => {
  return (
    <motion.div className="skills--section--container">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          className="skills--section--card"
          index={ index}
          title={skill.title}
          description={skill.description}
          image={skill.image}
          category={skill.category}
        />
      ))}
    </motion.div>
  );
};

export default SkillsList;
