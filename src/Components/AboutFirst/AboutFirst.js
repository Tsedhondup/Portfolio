import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import "./AboutFirst.scss";
import { aboutData } from "../../utilities/aboutData";
const AboutFirst = (props) => {
  // Element reference
  const refElement = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // FOR TOGGLING DYNAMIC CLASS OF HEADER COMPONENT
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (refElement.current) {
        const elementPosition = refElement.current.getBoundingClientRect();
        elementPosition.top <= 80
          ? props.setIsScroll(true)
          : props.setIsScroll(false);
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
  let counterDuration = 0.5;
  // CREATE ABOUT TEXT ELEMENTS
  const aboutTextElements = aboutData.map((item) => {
    /*
     * HEADER RENDERED FIRST, FOLLOWED BY BODY AND THEN ICONS
     */
    const headerDuration = counterDuration;
    const bodyDuration = counterDuration + 0.3;
    const iconDuration = bodyDuration + 0.3;
    counterDuration = iconDuration + 0.3;
    /*
     * RENDERING BORDER FOR EACH TEXT SECTION
     *
     * BORDERS ARE BEING RENDERED BASED ON ID OF AN ITEM
     */
    return (
      <motion.div key={item.id} className="about-testing__item">
        {/* TEXTC-CONTAINER */}
        <div>
          <motion.h2
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
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: iconDuration,
                ease: "linear",
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {item.icons.map((item, index) => {
              return (
                <span key={index}>
                  <FontAwesomeIcon icon={item} />
                </span>
              );
            })}
          </motion.div>
        </div>
        {/* IMAGE CONTAINER */}
        <div>
          <img src={item.image} alt={`${item.name}-image`} />
        </div>
      </motion.div>
    );
  });
  return (
    <section className="about-first">
      <div className="about-testing" ref={refElement}>
        {aboutTextElements}
      </div>
    </section>
  );
};
export default AboutFirst;
