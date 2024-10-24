import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import "./AboutFirst.scss";
import { aboutData } from "../../utilities/aboutData";
const AboutFirst = (props) => {
  // Element reference
  const refElement = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // FOR TOGGLING DYNAMIC CLASS OF HEADER COMPONENT
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (refElement.current) {
        const elementPosition = refElement.current.getBoundingClientRect();
        elementPosition.top <= -100
          ? props.setIsAboutPageScroll(true)
          : props.setIsAboutPageScroll(false);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  // COUNTER DURATION FOR RENDERING ABOUT TEXTS
  let counterDuration = 0.8;
  // CREATE ABOUT TEXT ELEMENTS
  const aboutTextElements = aboutData.map((item) => {
    /*
     * HEADER RENDERED FIRST, FOLLOWED BY BODY AND THEN ICONS
     */
    const headerDuration = counterDuration;
    const bodyDuration = counterDuration + 0.3;
    const iconDuration = bodyDuration + 0.3;
    const imageDuration = iconDuration + 0.3;
    counterDuration = imageDuration + 0.3;

    /*
     * RENDERING BORDER FOR EACH TEXT SECTION
     *
     * BORDERS ARE BEING RENDERED BASED ON ID OF AN ITEM
     */
    return (
      <motion.div
        key={item.id}
        // FLEX DIRECTION ARE BEING REVERSED FOR SECOND AND FOURTH ITEM FOR TABLET AND DESKTOP VIEW
        className={`about__item ${
          item.id === "02" || item.id === "04" ? "about__item-flex-reverse" : ""
        }`}
      >
        {/* TEXTC-CONTAINER */}
        <div className="about__text">
          <motion.h2
            className="about__text--header"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: headerDuration,
                ease: "linear",
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {item.header}
          </motion.h2>

          <motion.p
            className="about__text--body"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: bodyDuration,
                ease: "linear",
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {item.body}
          </motion.p>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="about__image-container">
          <motion.img
            className={`about__image-container--image ${item.name}`}
            src={item.image}
            alt={`${item.name}-image`}
            initial={{
              opacity: 0,
              x: item.id === "01" || item.id === "03" ? 100 : -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                duration: imageDuration,
                ease: "linear",
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </motion.div>
    );
  });
  return (
    <section className="about" ref={refElement}>
      <div>
        <motion.h2
          className="about__title"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "linear",
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My story
        </motion.h2>
      </div>

      <div className="about__content" r>
        {aboutTextElements}
      </div>
    </section>
  );
};
export default AboutFirst;
