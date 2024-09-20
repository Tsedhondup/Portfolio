import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faCode,
  faLaptop,
  faDna,
  faSeedling,
  faVial,
  faBook,
  faHeadset,
  faCheckSquare,
  faHandPointRight,
  faLaptopHouse,
  faGlobeAmericas,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import profilePic2 from "../../assets/image/about-first.png";
import "./AboutFirst.scss";
const AboutFirst = () => {
  // Element reference
  const refElement = useRef(null);
  // const [isBorderOne, setIsBorderOne] = useState(false);
  // const [isBorderTwo, setIsBorderTwo] = useState(false);
  // const [isBorderThree, setIsBorderThree] = useState(false);
  // const [isBorderFour, setIsBorderFour] = useState(false);
  // const [isBorderFive, setIsBorderFive] = useState(false);
  // const [isBorderSix, setIsBorderSix] = useState(false);
  // const [isBorderSeven, setIsBorderSeven] = useState(false);
  // const [isBorderEight, setIsBorderEight] = useState(false);
  // const [isBorderNine, setIsBorderNine] = useState(false);
  let isBorderOne = false;
  let isBorderTwo = false;
  let isBorderThree = false;
  let isBorderFour = false;
  let isBorderFive = false;
  let isBorderSix = false;
  let isBorderSeven = false;
  let isBorderEight = false;
  let isBorderNine = false;
  // Border rendering function
  const renderBorders = (borderNumber) => {
    if (borderNumber === 1) {
      isBorderOne = true;
      return Number(1);
    }
  };
  return (
    <section className="about-first">
      <div className="about-first__image-container" ref={refElement}>
        <h2 className="about-first__image-container--text">About me</h2>
        <div className="about-first__image-container--img-wrapper">
          <img
            src={profilePic2}
            alt="author-photo"
            className="about-first__image-container--img"
          />
        </div>
      </div>

      <section className="about-text-container">
        <motion.h2
          className="about-first__mobile-header"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,

            transition: { duration: 1.5, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          About Me
        </motion.h2>
        {/* Untold story */}

        <motion.section
          className="about-text about-text-education"
          initial={{
            borderTop: "1px solid rgba(0,0,0,0)",
            borderLeft: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
          }}
          whileInView={{
            borderTop: "1px solid #d6d6d6",
            borderLeft: "1px solid #d6d6d6",
            borderBottom: "1px solid #d6d6d6",
            transition: {
              duration: 1.5,
              ease: "linear",
              borderTop: { duration: 1, delay: 0.5 },
              borderLeft: { duration: 1, delay: 1 },
              borderBottom: { duration: 1, delay: 3 },
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <motion.h2
            className="about-text__title"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.5,
                delay: 1.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            Education
          </motion.h2>

          <motion.p
            className="about-text__para"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.5,
                delay: 2,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            First division botany graduates from University of Delhi
          </motion.p>
          {/* Icons */}
          <motion.div
            className="about-text__icon-container"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.5,
                delay: 2.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faDna}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-dna"
            />
            <FontAwesomeIcon
              icon={faSeedling}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-leaf"
            />
            <FontAwesomeIcon
              icon={faVial}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-vial"
            />
          </motion.div>
        </motion.section>
        {/* Earliest coding journey */}
        <motion.section
          className="about-text about-text-journey"
          initial={{
            borderRight: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
          }}
          whileInView={{
            borderRight: "1px solid #d6d6d6",
            borderBottom: "1px solid #d6d6d6",
            transition: {
              ease: "linear",
              borderRight: { duration: 1.5, delay: 3.5 },
              borderBottom: { duration: 1.5, delay: 5.5 },
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <motion.h3
            className="about-text__title"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "linear",
                duration: 1.5,
                delay: 4,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            Earliest coding journey
          </motion.h3>

          <motion.p
            className="about-text__para"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "linear",
                duration: 1.5,
                delay: 4.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            I came across a video on YouTube about a young and successful
            self-taught software developer. As influential and inspiring as the
            video was, I was rather excited to learn coding as a hobby.
          </motion.p>
          {/* Icons */}
          <motion.div
            className="about-text__icon-container about-text__icon-container-2"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "linear",
                duration: 1.5,
                delay: 5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faLaptop}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-laptop"
            />
            <FontAwesomeIcon
              icon={faCode}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-code"
            />
            <FontAwesomeIcon
              icon={faCoffee}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-coffee"
            />
          </motion.div>
        </motion.section>
        {/* Becoming a certified developer! */}
        <section className="about-text about-text-certification">
          <h3 className="about-text__title">Becoming a certified developer!</h3>

          <p className="about-text__para">
            Teaching myself to code was of great success, and it continues to be
            my greatest strength in keeping up with ever-changing technologies
            that are paramount. However, the need for a proper mentor to assist
            in honing my skills tailored to professional requirements was vital.
            I take pride in investing time and resources in joining the Software
            Engineering Boot Camp at BrainStation, Toronto'
          </p>
          {/* Icons */}
          <div className="about-text__icon-container ">
            <FontAwesomeIcon
              icon={faBook}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-book"
            />
            <FontAwesomeIcon
              icon={faHeadset}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-head-set"
            />
            <FontAwesomeIcon
              icon={faCheckSquare}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-check-square"
            />
          </div>
        </section>
        {/* What next */}
        <section className="about-text about-text-goals">
          <h3 className="about-text__title">What next</h3>

          <p className="about-text__para">
            As a full-stack developer, I aim to secure a role in a dynamic tech
            company to enhance my skills in modern frameworks. I plan to
            continuously improve my knowledge through advanced courses,
            certifications, and hands-on projects. My long-term goal is to grow
            into a senior developer role and mentor others.
          </p>
          {/* Icons */}
          <div className="about-text__icon-container about-text__icon-container-4">
            <FontAwesomeIcon
              icon={faHandPointRight}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-point-right"
            />
            <FontAwesomeIcon
              icon={faLaptopHouse}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-house"
            />
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              transform="grow-2"
              className="about-text__icon-container--icons about-text__icon-container--icon-globe"
            />
          </div>
        </section>
      </section>
    </section>
  );
};
export default AboutFirst;
