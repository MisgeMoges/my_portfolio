import React, { useState } from "react";
import data from "../data";
import {motion, AnimatePresence} from "framer-motion"
import ParticleBg from "particles-bg"
import { FaRegCheckSquare } from "react-icons/fa";
const categories = [
  "Work Experience",
  "Education_and_Training",
  "Certificates",
];
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function AboutMe() {
  const [currentCategory, setCurrentCategory] = useState("Work Experience");

  const handleFilterClick = (category) => {
    setCurrentCategory(category);
  };

  const filteredData =
    currentCategory === "Work Experience"
      ? data.work_experience
      : data[currentCategory.toLowerCase()] || [];

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section-container">
        <div className="about--section--img">
          <img src="./img/about1.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h2 className="skills-section--heading">
              About <span style={{ color: "#5e3bee" }}>Me</span>
            </h2>
            <p className="hero--section-description">
              I'm a Computer Engineer with a deep passion for technology. My
              skill set spans a spectrum of programming languages, encompassing
              JavaScript, TypeScript, Python, C++, Java, and web technologies
              such as HTML, CSS, Bootstrap,Material Ui and dynamic libraries
              like React, Angular. On the server side, I'm well-versed in Node
              and Express, NestJs, while my mobile development capabilities
              extend to Flutter. These proficiencies empower me to bring
              innovation to life through the power of code.
            </p>
          </div>
        </div>
      </div>
      <motion.div className="experience-section">
        <motion.div
          className="filter-buttons"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <FilterButton
              key={index}
              category={category}
              onClick={handleFilterClick}
              variants={itemVariants}
            />
          ))}
        </motion.div>
        <AnimatePresence wait>
          <motion.div
            className="filtered-data"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h3 style={{ textAlign: "center", marginTop: "10px" }}>
              {currentCategory}
            </h3>
            {filteredData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                {currentCategory === "Work Experience" && (
                  <>
                    <div className="content-container">
                      <img src={item.image} className="image"></img>
                      <div className="content">
                        <h4>{item.position}</h4>
                        <p>
                          {item.start_date} - {item.end_date}
                        </p>
                        <p>{item.employer}</p>
                        <p style={{ marginTop: "10px", fontWeight: "500" }}>
                          Responsibilities:
                        </p>
                        <div
                          style={{
                            marginTop: "20px",
                            paddingLeft: "0px",
                          }}
                          className="responsibilities-container"
                        >
                          {item.responsibilities.map((resp, index) => (
                            <p key={index}>
                              <span style={{ marginRight: "10px" }}>
                                <FaRegCheckSquare
                                  style={{ color: "#5e3bee" }}
                                />
                              </span>
                              {resp}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentCategory === "Education_and_Training" && (
                  <>
                    <div
                      className="content-container"
                      style={{ width: "100%" }}
                    >
                      <img
                        src={item.image}
                        className="image"
                        style={{
                          objectFit: "contain",
                          height: "100px",
                          Right: "30px",
                        }}
                      ></img>
                      <div className="content">
                        <h4>{item.education}</h4>
                        <p>
                          {item.start_date} - {item.end_date}
                        </p>
                        <p>{item.institution}</p>
                      </div>
                      {/* Add more details as needed */}
                    </div>
                  </>
                )}
                {currentCategory === "Certificates" && (
                  <>
                    <div className="content-container">
                      <img
                        src={item.image_url}
                        className="image"
                        style={{ objectFit: "contain", height: "100px" }}
                      ></img>
                      <div className="content">
                        <h4>{item.certificate_name}</h4>
                        <p>{item.issue_date}</p>
                        <h5>{item.institution}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <ParticleBg type="cobweb" bg={true} num={50} color="#e62872" />
    </section>
  );
}

const FilterButton = ({ category, onClick }) => {
  return (
    <motion.button
      className="btn btn-outline-primary filter-button-about"
      onClick={() => onClick(category)}
    >
      {category}
    </motion.button>
  );
};

