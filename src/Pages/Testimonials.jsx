import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";

import data from "../data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Testimonial() {
  const [showRaindrop, setShowRaindrop] = useState(true);

  const sliderRef = useRef(null);
 const goToPrevSlide = () => {
   sliderRef.current.slickPrev();
 };

 const goToNextSlide = () => {
   sliderRef.current.slickNext();
 };

  useEffect(() => {
    // Set timeout to hide the raindrop animation after a delay
    const timeout = setTimeout(() => {
      setShowRaindrop(false);
    }, 5000); // Adjust this delay as needed
    return () => clearTimeout(timeout);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const RaindropTextHappyClient = ({ text }) => (
    <AnimatePresence>
      {showRaindrop && (
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{ fontSize: "2rem", margin: "0 4px" }}
              animate={{
                y: ["-50vh", "0vh"],
                x: ["50vw", "40vw", "30vw", "20vw", "10vw", "0vw"],
              }}
              transition={{
                delay: index * 0.1, // Time interval between each character
                duration: 2,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
      {/* Render the text statically after the animation is finished */}
      {!showRaindrop && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-999",
          }}
        >
          <span style={{ fontSize: "2rem" }}>{text}</span>
        </div>
      )}
    </AnimatePresence>
  );

  const RaindropText = ({ text }) => (
    <AnimatePresence>
      {showRaindrop && (
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              style={{ fontSize: "2rem", margin: "0 4px" }}
              animate={{
                y: ["-50vh", "0vh"],

                x: ["-50vw", "0vw"],
              }}
              transition={{
                delay: index * 0.1, // Time interval between each character
                duration: 1,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
      {/* Render the text statically after the animation is finished */}
      {!showRaindrop && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-999",
          }}
        >
          <span style={{ fontSize: "1rem", marginBottom: "30px" }}>{text}</span>
        </div>
      )}
    </AnimatePresence>
  );


  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container"></div>
      </div>
      <div className="testimonial--header">
        <RaindropText text="TESTIMONIAL" />
        <RaindropTextHappyClient text="My Happy Clients" />
        {/* <p className="trust--sentence">
          Don't just trust my word! See what recent clients said about working
          with me
        </p> */}
      </div>
      <hr className="divider" style={{ color: "#f02c0e" }} />
      <div className="testimonial-carousel" style={{ position: "relative" }}>
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "16px",
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize:"28px"
          }}
          whileHover={{ scale: 1.2 }}
          onClick={goToPrevSlide}
        >
          <FaChevronLeft />
        </motion.div>
        <Slider ref={sliderRef} {...settings}>
          {data?.testimonial?.map((item, index) => (
            <div key={index} className="testimonial--container">
              <div className="testimonial--section--card">
                <div className="testimonial--section--card--review">
                  {Array.from({ length: 5 }, (reviews, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="26"
                      viewBox="0 0 27 26"
                      fill="none"
                    >
                      <path
                        d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                        fill="#006B6A"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-md">{item.description}</p>
                <div className="testimonial--section--card--author--detail">
                  <img src={item.src} alt="Avatar" />
                  <div>
                    <p className="testimonial--author--name">
                      {item.author_name}
                    </p>
                    <p className="testimonial--author--designation">
                      {item.author_designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize:"28px"
          }}
          whileHover={{ scale: 1.2 }}
          onClick={ goToNextSlide}
        >
          <FaChevronRight />
        </motion.div>
      </div>
   
    </section>
  );
}
