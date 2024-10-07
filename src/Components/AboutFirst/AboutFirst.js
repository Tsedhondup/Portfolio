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
  // const [popUpHideClass, setPopUpHideClass] = useState("");
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

  // Event handler
  // const handlePopUpClass = () => {
  //   setPopUpHideClass("about-first__pop-up-hide");
  // };
  return (
    <section className="about-first">
      {/* <div className={`about-first__pop-up ${popUpHideClass}`}>
        <motion.p
          className="about-first__pop-up--text"
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1,
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          page under maintanance !!
        </motion.p>
        <motion.button
          className="about-first__pop-up--button"
          onClick={handlePopUpClass}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1,
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          close
        </motion.button>
      </div> */}
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
              x: -30,
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
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
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
          <motion.h2
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
          </motion.h2>{" "}
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
            As a botany graduate from the University of Delhi, I am working to
            translate my background in scientific inquiry into the field of tech
            by specializing in web development. I am excited to leverage my
            skills in web development, building meaningful, responsive, and
            user-centric web applications.
          </motion.p>
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
          <motion.h3
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
          </motion.h3>

          <motion.p
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
            I found an inspiring video on YouTube about a young and successful
            self-taught software developer. What started as a curiosity and
            hobby has evolved into a full-fledged passion for coding to create
            digital solutions!
          </motion.p>

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
          <motion.h3
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
          </motion.h3>

          <motion.p
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
            My greatest strength comes from my self-learning ability. However,
            the need for a proper mentor to assist in honing my skills tailored
            to professional requirements was vital. I have committed time and
            resources to becoming a certified web developer by enrolling at
            BrainStation's Software Engineering Boot Camp in Toronto.
          </motion.p>

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
          <motion.h3
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
          </motion.h3>

          <motion.p
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
            I intend to master both front-end and back-end technologies by
            polishing my reach in designing and developing user-friendly and
            scalable web applications. I aim to continuously improve my coding
            skills, ensure seamless user experiences, and contribute to
            innovative projects that solve real-world problems. Furthermore, I
            aspire to stay updated with industry trends, adopt best practices,
            and collaborate effectively with cross-functional teams to deliver
            high-quality, secure, and efficient web solutions that meet both
            user and business needs.
          </motion.p>

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
