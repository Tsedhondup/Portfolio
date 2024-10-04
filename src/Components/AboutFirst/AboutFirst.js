import { useEffect, useRef, useState } from "react";
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
  const [isBorderOne, setIsBorderOne] = useState(false);
  const [isBorderTwo, setIsBorderTwo] = useState(false);
  const [isBorderThree, setIsBorderThree] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsBorderOne(true);
    }, 3500);
    setTimeout(() => {
      setIsBorderTwo(true);
    }, 6500);
    setTimeout(() => {
      setIsBorderThree(true);
    }, 9500);
  }, []);

  return (
    <section className="about-first">
      <div className="about-frist__pop-up">
        <p>page under maintanance</p>
      </div>
      <div className="about-first__image-container" ref={refElement}>
        {/* --------------------------- About Desktop header --------------------------- */}
        <motion.h2
          className="about-first__image-container--text"
          initial={{
            scale: 0.2,
          }}
          whileInView={{
            scale: 1,
            transition: { ease: "linear", duration: 1 },
          }}
        >
          About me
        </motion.h2>
        <div className="about-first__image-container--img-wrapper">
          <motion.img
            className="about-first__image-container--img"
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { ease: "linear", duration: 1, delay: 1.5 },
            }}
            viewport={{ once: true, amount: 1 }}
            src={profilePic2}
            alt="author-photo"
          />
        </div>
      </div>

      <section className="about-text-container">
        {/* --------------------------- About Mobile header --------------------------- */}
        <motion.h2
          className="about-first__mobile-header"
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          About Me
        </motion.h2>
        {/* --------------------------- Education Section --------------------------- */}

        <motion.section
          className="about-text about-text-education"
          initial={{
            borderTop: "1px solid rgba(0,0,0,0)",
            borderLeft: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
          }}
          whileInView={{
            borderTop: "1px solid #8c8c8c",
            borderLeft: "1px solid #8c8c8c",
            borderBottom: "1px solid #8c8c8c",
            transition: {
              duration: 1.5,
              ease: "linear",
              borderTop: { duration: 1.5, delay: 0.8 },
              borderLeft: { duration: 1.5, delay: 1 },
              borderBottom: { duration: 1.5, delay: 3 },
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          {/* <motion.h2
            className="about-text__title"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            Education
          </motion.h2> */}
          {/* 
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
                duration: 1,
                delay: 2,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            First division botany graduates from University of Delhi
          </motion.p> */}
          {/* Icons */}
          <motion.div
            className="about-text__icon-container"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
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
        {/* --------------------------- Coding Journey --------------------------- */}

        <motion.section
          className="about-text about-text-journey"
          initial={{
            borderRight: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
          }}
          whileInView={
            isBorderOne
              ? {
                  borderRight: "1px solid #8c8c8c",
                  borderBottom: "1px solid #8c8c8c",
                  transition: {
                    ease: "linear",
                    borderRight: { duration: 1.5, delay: 2 },
                    borderBottom: { duration: 1.5, delay: 2.5 },
                  },
                }
              : { borderRight: "1px solid rgba(0,0,0,0)" }
          }
          viewport={{ once: true, amount: 1 }}
        >
          {/* <motion.h3
            className="about-text__title"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderOne
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 0.5,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
            Earliest coding journey
          </motion.h3> */}

          {/* <motion.p
            className="about-text__para"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderOne
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 1,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
            I came across a video on YouTube about a young and successful
            self-taught software developer. As influential and inspiring as the
            video was, I was rather excited to learn coding as a hobby.
          </motion.p> */}
          {/* Icons */}
          <motion.div
            className="about-text__icon-container about-text__icon-container-2"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderOne
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 1.5,
                    },
                  }
                : { opacity: 0 }
            }
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
        {/* --------------------------- Certification --------------------------- */}

        <motion.section
          className="about-text about-text-certification"
          initial={{
            borderLeft: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
          }}
          whileInView={
            isBorderTwo
              ? {
                  borderLeft: "1px solid #8c8c8c",
                  borderBottom: "1px solid #8c8c8c",
                  transition: {
                    ease: "linear",
                    borderRight: { duration: 1.5, delay: 0.5 },
                    borderBottom: { duration: 1.5, delay: 2.5 },
                  },
                }
              : { borderLeft: "1px solid rgba(0,0,0,0)" }
          }
          viewport={{ once: true, amount: 1 }}
        >
          {/* <motion.h3
            className="about-text__title"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderTwo
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 1,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
            Becoming a certified developer!
          </motion.h3> */}

          {/* <motion.p
            className="about-text__para"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderTwo
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 1.5,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
            Teaching myself to code was of great success, and it continues to be
            my greatest strength in keeping up with ever-changing technologies
            that are paramount. However, the need for a proper mentor to assist
            in honing my skills tailored to professional requirements was vital.
            I take pride in investing time and resources in joining the Software
            Engineering Boot Camp at BrainStation, Toronto'
          </motion.p> */}
          {/* Icons */}
          <motion.div
            className="about-text__icon-container "
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderTwo
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 2,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
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
          </motion.div>
        </motion.section>
        {/* --------------------------- Future Goal --------------------------- */}

        <motion.section
          className="about-text about-text-goals"
          initial={{
            borderRight: "1px solid rgba(0,0,0,0)",
            borderBottom: "1px solid rgba(0,0,0,0)",
          }}
          whileInView={
            isBorderThree
              ? {
                  borderRight: "1px solid #8c8c8c",
                  borderBottom: "1px solid #8c8c8c",
                  transition: {
                    ease: "linear",
                    borderRight: { duration: 1.5, delay: 2 },
                    borderBottom: { duration: 1.5, delay: 2.5 },
                  },
                }
              : { borderRight: "1px solid rgba(0,0,0,0)" }
          }
          viewport={{ once: true, amount: 1 }}
        >
          {/* <motion.h3
            className="about-text__title"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderThree
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 0.5,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
            What next
          </motion.h3> */}

          {/* <motion.p
            className="about-text__para"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderThree
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 1,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
            As a full-stack developer, I aim to secure a role in a dynamic tech
            company to enhance my skills in modern frameworks. I plan to
            continuously improve my knowledge through advanced courses,
            certifications, and hands-on projects. My long-term goal is to grow
            into a senior developer role and mentor others.
          </motion.p> */}
          {/* Icons */}
          <motion.div
            className="about-text__icon-container about-text__icon-container-4"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={
              isBorderThree
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: "linear",
                      duration: 1,
                      delay: 1.5,
                    },
                  }
                : { opacity: 0 }
            }
            viewport={{ once: true, amount: 1 }}
          >
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
          </motion.div>
        </motion.section>
      </section>
    </section>
  );
};
export default AboutFirst;
