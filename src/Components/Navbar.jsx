import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const myVariant = {
  hover: {
    rotate: 360,
    scale: 1.2,
    border: "2px solid #5e3bee",
    borderRadius: "10%",
    padding: "5px 5px",
    textTransform: "uppercase",
  },
  tap: {
    border: "2px solid #5e3bee",
    borderRadius: "10%",
    padding: "10px 10px",
  },
};
function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <NavLink to="/">
          <img src="./img/final logo 1.png" alt="Misge" />
        </NavLink>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <motion.ul>
          <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
            <NavLink
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/"
              exact
              className={`navbar--content ${
                isNavLinkActive("/") ? "navbar--content-active" : ""
              }`}
            >
              Home
            </NavLink>
          </motion.li>

          <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
            <NavLink
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/about"
              className={`navbar--content ${
                isNavLinkActive("/") ? "navbar--content-active" : ""
              }`}
            >
              About Me
            </NavLink>
          </motion.li>
          <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
            <NavLink
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/skills"
              exact
              className={`navbar--content ${
                isNavLinkActive("/") ? "navbar--content-active" : ""
              }`}
            >
              My Skills
            </NavLink>
          </motion.li>

          <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
            <NavLink
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/portfolio"
              className={`navbar--content ${
                isNavLinkActive("/") ? "navbar--content-active" : ""
              }`}
            >
              Portfolio
            </NavLink>
          </motion.li>

          <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
            <NavLink
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/testimonial"
              className={`navbar--content ${
                isNavLinkActive("/") ? "navbar-content-active" : ""
              }`}
            >
              Testimonials
            </NavLink>
          </motion.li>
          <motion.li whileHover="hover" whileTap="tap" variants={myVariant}>
            <NavLink
              onClick={closeMenu}
              activeClassName="navbar--active-content"
              to="/resume"
              className={`navbar--content ${
                isNavLinkActive("/") ? "navbar-content-active" : ""
              }`}
            >
              Resume
            </NavLink>
          </motion.li>
        </motion.ul>
      </div>
      <motion.div
        whileHover={{
          rotate: 360,
        }}
        whileTap={{
          border: "2px solid #5e3bee",
          borderRadius: "10%",
          padding: "10px 10px",
        }}
      >
        <NavLink
          onClick={closeMenu}
          activeClassName="navbar--active-content"
          to="/contact"
          className="btn btn-outline-primary"
        >
          Contact Me
        </NavLink>
      </motion.div>
    </nav>
  );
}

export default Navbar;

// import { useState, useEffect } from "react";
// import { NavLink } from "react-scroll";

// function Navbar() {
//   const [navActive, setNavActive] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   const closeMenu = () => {
//     setNavActive(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 500) {
//         closeMenu;
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth <= 1200) {
//       closeMenu;
//     }
//   }, []);

//   return (
//     <nav className={`navbar ${navActive ? "active" : ""}`}>
//       <div>
//         <img src="./img/logo.svg" alt="Logoipsum" />
//       </div>
//       <a
//         className={`nav__hamburger ${navActive ? "active" : ""}`}
//         onClick={toggleNav}
//       >
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//       </a>
//       <div className={`navbar--items ${navActive ? "active" : ""}`}>
//         <ul>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               to="heroSection"
//               className="navbar--content"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="MyPortfolio"
//               className="navbar--content"
//             >
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="AboutMe"
//               className="navbar--content"
//             >
//               About Me
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="testimonial"
//               className="navbar--content"
//             >
//               Testimonials
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <Link
//         onClick={closeMenu}
//         activeClass="navbar--active-content"
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//         to="Contact"
//         className="btn btn-outline-primary"
//       >
//         Contact Me
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;