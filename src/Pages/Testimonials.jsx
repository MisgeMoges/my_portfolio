import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Testimonial() {
  const [showRaindrop, setShowRaindrop] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = data?.testimonial || [];

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1

    );
    
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1
    );
  };

  console.log(currentSlide)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowRaindrop(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  

  const RaindropTextHappyClient = ({ text }) => (
    <AnimatePresence>
      {showRaindrop && (
        <motion.div
          className="show-happy-client"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              animate={{
                y: ["-50vh", "0vh"],
                x: ["50vw", "40vw", "30vw", "20vw", "10vw", "0vw"],
              }}
              transition={{
                delay: index * 0.1,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
      {!showRaindrop && (
        <div
          className="happy-clients"
        >
          <span >{text}</span>
        </div>
      )}
    </AnimatePresence>
  );

  const RaindropText = ({ text }) => (
    <AnimatePresence>
      {showRaindrop && (
        <motion.div
          className="show-testimonial-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              
              animate={{
                y: ["-50vh", "0vh"],
                x: ["-50vw", "0vw"],
              }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
      {!showRaindrop && (
        <div
          className="testimonial-text"
        >
          <span >{text}</span>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="testimonial--section" id="testimonial">
      {/* <div className="portfolio--container-box">
        <div className="portfolio--container"></div>
      </div> */}
      <div className="testimonial--header">
        <RaindropText text="TESTIMONIAL" />
        <RaindropTextHappyClient text="My Happy Clients" />
      </div>
      <hr
        className="divider testimonial-divider"
        style={{ color: "#f02c0e", marginTop: "60px" }}
      />
      <button
        className="testimonial-left-arrow"
        onClick={() => goToPrevSlide()}
      >
        <FaChevronLeft style={{ color: "#f02c0e" }} />
      </button>
      <div className="testimonial-carousel">
        <div className="testimonial--container">
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
            <p className="text-md">{sliderData[currentSlide]?.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={sliderData[currentSlide]?.src} alt="Avatar" />
              <div>
                <p className="testimonial--author--name">
                  {sliderData[currentSlide]?.author_name}
                </p>
                <p className="testimonial--author--designation">
                  {sliderData[currentSlide]?.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="testimonial-right-arrow" onClick={goToNextSlide}>
        <FaChevronRight style={{ color: "#f02c0e" }} />
      </button>
    </section>
  );
}
