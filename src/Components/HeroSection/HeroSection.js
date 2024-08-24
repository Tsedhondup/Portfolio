import "./HeroSection.scss";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/image/tsering.png";
const HeroSection = (props) => {
  // Element reference
  const refElement = useRef(null);
  // const handleScroll = () => {
  //   const currentElement = refElement.current; // current ref element stored
  //   const rect = currentElement.getBoundingClientRect(); // get ref element position
  //   rect.top <= -0.5 ? props.setIsScroll(true) : props.setIsScroll(false);
  // };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <motion className="hero-container" ref={refElement}>
      <section className="hero-content">
        <div>
          <h1 className="hero-content__name">
            <span className="hero-content__name--first">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  ease: "easeOut",
                }}
                className="hero-content__name--first-a"
              >
                Hi,
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 2,
                  ease: "easeOut",
                }}
                className="hero-content__name--first-b"
              >
                I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 2.5,
                  ease: "easeOut",
                }}
                className="hero-content__name--first-c"
              >
                Tsering
              </motion.span>
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: 3,
                ease: "easeOut",
              }}
              className="hero-content__name--last"
            >
              Dhondup
            </motion.span>
          </h1>
          <motion.h3
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2.5,
              delay: 3.5,
              ease: "easeOut",
            }}
            className="hero-content__title"
          >
            A Front-End Developer from
            <motion.span
              initial={{ opacity: 0, x: screenWidth >= 950 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
                delay: 4,
                ease: "easeOut",
              }}
              className="hero-content__title--city"
            >
              Toronto
            </motion.span>
          </motion.h3>
        </div>

        <div className="image-container">
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.6,
              ease: "linear",
            }}
            src={profileImage}
            alt="profile-image"
            className="image-container__image"
          />
          <div className="image-container__shadow-element"></div>
        </div>
      </section>
    </motion>
  );
};
export default HeroSection;
