import React, { useState } from "react";
import ProjectModal from "../Components/PortfolioModal";
import data from "../data";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
export default function MyPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">
            <span style={{ color: "#e62872" }}>My</span> Portfolio
          </h2>
        </div>
        <div className="portfolio--button-container">
          <Link
            className="btn btn-github"
            to="https://github.com/MisgeMoges"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            ></svg>
            
            Visit My GitHub
          </Link>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md" >{item.description}</p>
              </div>
              <motion.div className="button-row">
                <p className="text-sm portfolio--link">
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <motion.button
                  className="btn btn-details-text"
                  onClick={() => openModal(item)}
                  whileHover={{ scale: 1.5 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject || {}}
      />
    </motion.section>
  );
}
