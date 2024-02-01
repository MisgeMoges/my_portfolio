import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane, FaHome } from "react-icons/fa";
import { GrProjects, GrContact } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { LuInfo } from "react-icons/lu";
import { AiTwotoneCustomerService } from "react-icons/ai";
import GoToTop from "./GoToTop";

function Footer() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0 });
  // }, [pathname]);

  

  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="" alt="Misge" />
        </div>
        <div className="footer--items">
          <motion.ul style={{ marginTop: "30px" }}>
            <motion.li
              whileHover={{
                border: "2px solid #e62872",
                borderRadius: "10%",
                padding: "10px 10px",
                textTransform: "uppercase",
              }}
              whileTap={{
                border: "2px solid #f02c0e",
                borderRadius: "10%",
                padding: "10px 10px",
              }}
            >
              <NavLink to="/" exact className="text-md" onClick={GoToTop}>
                <FaHome
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                border: "2px solid #e62872",
                borderRadius: "10%",
                padding: "10px 10px",
                textTransform: "uppercase",
              }}
              whileTap={{
                border: "2px solid #f02c0e",
                borderRadius: "10%",
                padding: "10px 10px",
              }}
            >
              <NavLink to="/about" className="text-md" onClick={GoToTop}>
                <LuInfo
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                border: "2px solid #e62872",
                borderRadius: "10%",
                padding: "10px 10px",
                textTransform: "uppercase",
              }}
              whileTap={{
                border: "2px solid #f02c0e",
                borderRadius: "10%",
                padding: "10px 10px",
              }}
            >
              <NavLink to="/skills" exact className="text-md" onClick={GoToTop}>
                <GiSkills
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                border: "2px solid #e62872",
                borderRadius: "10%",
                padding: "10px 10px",
                textTransform: "uppercase",
              }}
              whileTap={{
                border: "2px solid #f02c0e",
                borderRadius: "10%",
                padding: "10px 10px",
              }}
            >
              <NavLink to="/portfolio" className="text-md" onClick={GoToTop}>
                <GrProjects
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                border: "2px solid #e62872",
                borderRadius: "10%",
                padding: "10px 10px",
                textTransform: "uppercase",
              }}
              whileTap={{
                border: "2px solid #f02c0e",
                borderRadius: "10%",
                padding: "10px 10px",
              }}
            >
              <NavLink to="/testimonial" className="text-md" onClick={GoToTop}>
                <AiTwotoneCustomerService
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{
                border: "2px solid #e62872",
                borderRadius: "10%",
                padding: "10px 10px",
                textTransform: "uppercase",
              }}
              whileTap={{
                border: "2px solid #f02c0e",
                borderRadius: "10%",
                padding: "10px 10px",
              }}
            >
              <NavLink to="/contact" className="text-md" onClick={GoToTop}>
                <GrContact
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
          </motion.ul>
        </div>
        <div className="footer--social--icon" style={{ marginTop: "30px" }}>
          <motion.ul>
            <motion.li>
              <NavLink
                to="https://www.linkedin.com/in/misgan-moges-49230a235/"
                target="_blank"
                exact
                className="text-md"
              >
                <CiLinkedin
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
            <motion.li>
              <NavLink
                to="https://github.com/MisgeMoges"
                target="_blank"
                exact
                className="text-md"
              >
                <FiGithub
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
            </motion.li>
            <motion.li>
              <NavLink
                to="https://t.me/Bosena25"
                target="_blank"
                className="text-md"
              >
                <FaTelegramPlane
                  style={{ width: "25px", height: "25px", color: "#e62872" }}
                />
              </NavLink>
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
