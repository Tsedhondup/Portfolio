import "./HeroSection.scss";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/image/tsering.png";
const HeroSection = (props) => {
  // Element reference
  const refElement = useRef(null);
  const handleScroll = () => {
    const currentElement = refElement.current; // current ref element stored
    const rect = currentElement.getBoundingClientRect(); // get ref element position
    rect.top <= -0.5 ? props.setIsScroll(true) : props.setIsScroll(false);
  };

  return (
    <motion className="hero-container" ref={refElement}>
      <section className="hero-content">
        <div>
          <h1 className="hero-content__name">
            <span className="hero-content__name--first">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
              >
                Hi,
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                  ease: "easeOut",
                }}
              >
                Tsering
              </motion.span>
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.5,
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
              duration: 1.5,
              delay: 2,
              ease: "easeOut",
            }}
            className="hero-content__title"
          >
            A Front-End Developer from
            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.5,
                delay: 2.5,
                ease: "easeOut",
              }}
              className="hero-content__title--city"
            >
              Toronto
            </motion.span>
          </motion.h3>
        </div>

        <div className="image-container">
          <img
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
