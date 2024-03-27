import React from "react";
import { NavLink} from "react-router-dom";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane, FaHome } from "react-icons/fa";
import { GrProjects, GrContact, GrResume } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { LuInfo } from "react-icons/lu";
import { AiTwotoneCustomerService } from "react-icons/ai";
import GoToTop from "./GoToTop";

const myVariant = {
  hover: {
    rotate: 360,
    scale: 1.2,
    border: "2px solid #5e3bee",
    borderRadius: "10%",
    padding: "5px 5px",
    marginBottom:"10px",
    textTransform: "uppercase",
  },
  tap: {
    border: "2px solid #5e3bee",
    borderRadius: "10%",
    padding: "10px 10px",
  },
};
function Footer() {
  

  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <NavLink to="/">
            <img src="./img/final logo 1.png" alt="Misge" />
          </NavLink>
        </div>
        <div className="footer--items">
          <motion.ul style={{ marginTop: "0px" }}>
            <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
              <NavLink to="/" exact className="text-md" onClick={GoToTop}>
                <FaHome className="footer-icon" />
              </NavLink>
            </motion.li>
            <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
              <NavLink to="/about" className="text-md" onClick={GoToTop}>
                <LuInfo className="footer-icon" />
              </NavLink>
            </motion.li>
            <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
              <NavLink to="/skills" exact className="text-md" onClick={GoToTop}>
                <GiSkills className="footer-icon" />
              </NavLink>
            </motion.li>
            <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
              <NavLink to="/portfolio" className="text-md" onClick={GoToTop}>
                <GrProjects
                  className="footer-icon"
                />
              </NavLink>
            </motion.li>
            <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
              <NavLink to="/testimonial" className="text-md" onClick={GoToTop}>
                <AiTwotoneCustomerService className="footer-icon" />
              </NavLink>
            </motion.li>
            <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
              <NavLink to="/contact" className="text-md" onClick={GoToTop}>
                <GrContact className="footer-icon" />
              </NavLink>
            </motion.li>
            <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
              <NavLink to="/resume" className="text-md" onClick={GoToTop}>
                <GrResume className="footer-icon" />
              </NavLink>
            </motion.li>
          </motion.ul>
        </div>
        <div className="footer--social--icon" style={{ marginTop: "0px" }}>
          <motion.ul>
            <motion.li>
              <a
                href="https://www.linkedin.com/in/misgan-moges-49230a235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md"
              >
                <CiLinkedin
                  style={{ width: "25px", height: "25px", color: "#5e3bee" }}
                />
              </a>
            </motion.li>
            <motion.li>
              <a
                href="https://github.com/MisgeMoges"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md"
              >
                <FiGithub
                  style={{ width: "25px", height: "25px", color: "#5e3bee" }}
                />
              </a>
            </motion.li>
            <motion.li>
              <a
                href="https://t.me/Bosena25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md"
              >
                <FaTelegramPlane
                  style={{ width: "25px", height: "25px", color: "#5e3bee" }}
                />
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Misge</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <NavLink to="/privacy-policy" className="text-sm">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-service" className="text-sm">
                Terms of Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/cookies-settings" className="text-sm">
                Cookies Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


