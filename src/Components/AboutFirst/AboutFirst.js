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
import { aboutData } from "../../utilities/aboutData";
const AboutFirst = (props) => {
  // Element reference
  const refElement = useRef(null);
  const [isBorderOne, setIsBorderOne] = useState(false);
  const [isBorderTwo, setIsBorderTwo] = useState(false);
  const [isBorderThree, setIsBorderThree] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  // CREATE ABOUT TEXT ELEMENTS
  const aboutTextElements = aboutData.map((item) => {
    return (
      <div>
        <h2>{item.header}</h2>
        <p>{item.body}</p>
        <div>
          {item.icons.map((item) => {
            return <FontAwesomeIcon icon={item} />;
          })}
        </div>
      </div>
    );
  });
  return (
    <section className="about-first">
      <div className="about-first__image-container">
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
      <div>{aboutTextElements}</div>
      <section className="about-text-container">
        {/* --------------------------- About Mobile header --------------------------- */}
        <motion.h2
          className="about-first__mobile-header"
          ref={windowWidth < 767 ? refElement : null}
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
          ref={windowWidth >= 767 ? refElement : null}
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
            Growing up, I was always fascinated by natural sciences,
            particularly plant biology, which led me to pursue botany at the
            University of Delhi. Now, I hope to translate my scientific inquiry
            in phytology into tech by specializing in web development.
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
            The story of an inspiring self-taught software developer on YouTube
            was enough to convince me to learn coding. However, what started as
            a hobby during my university years has evolved into a full-fledged
            passion, driving me to pursue a career transition in the tech
            industry.
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
            I begin to teach myself coding, only to be netted by Tutorial Hell.
            The need for a proper mentor to assist in honing my skills tailored
            to professional requirements was essential. I have committed time
            and resources to becoming a certified web developer by enrolling at
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
            I aim to master both front-end and back-end technologies. I aspire
            to stay updated with industry trends, adopt best practices, and
            collaborate and contribute effectively with cross-functional teams
            to deliver high-quality, secure, and efficient web solutions that
            meet both user and business needs.
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
