import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="portfolio--section--img">
          <img
            src={project.src}
            alt="Placeholder"
            style={{ height: "280px" }}
          />
        </div>
        <h3 style={{marginBottom:"10px"}}>{project.title}</h3>
        <p>{project.description}</p>
        <hr
          className="divider"
          style={{ marginTop: "50px", color: "#f02c0e" }}
        />
        <h4 style={{ marginTop: "20px", textAlign: "center" }}>
          Tech Stacks Used to Implement
        </h4>
        <div className="stack-container">
          {project.stacks.map((stack, index) => (
            <img key={index} src={stack}></img>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectModal;
