/* eslint-disable react/jsx-no-target-blank */
import { motion } from "framer-motion";
import portfolio from "../../assets/image/portfolio.jpg";
import brainflix from "../../assets/image/brainflix.jpg";
import jobTracker from "../../assets/image/job-tracker.jpg";
import quiz from "../../assets/image/quiz.jpg";
import bandsite from "../../assets/image/band-site.jpg";
import { useState } from "react";
import "./Works.scss";
const Works = () => {
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hoveredOne, setHoveredOne] = useState(false);
  const [hoveredTwo, setHoveredTwo] = useState(false);
  const [hoveredThree, setHoveredThree] = useState(false);
  const [hoveredFour, setHoveredFour] = useState(false);
  const [hoveredFive, setHoveredFive] = useState(false);

  return (
    <section className="project-container">
      <motion.h2 className="project-container__title">Projects</motion.h2>
      <section className="projects">
        <motion.a
          className="projects__content projects__content-portfolio"
          href="https://github.com/Tsedhondup/tsering-dhondup"
          target="_blank"
          onMouseEnter={() => setHoveredOne(true)}
          onMouseLeave={() => setHoveredOne(false)}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { dealy: 0.5, duration: 1, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={portfolio}
            alt="portfolio-website-image"
            className={`projects__content--img projects__content--portfolio-image ${
              hoveredOne ? "js-box-shadow" : ""
            }`}
          />
          <div className="projects__content--text projects__content--text-portfolio">
            <motion.h2
              className={`projects__content--project-name ${
                hoveredOne ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              portfolio website
            </motion.h2>
            <motion.p
              className={`projects__content--project-description ${
                hoveredOne ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              My Portfolio website deployed on Netlify, primarily built on
              React.js.
            </motion.p>
          </div>
        </motion.a>
        <motion.a
          className="projects__content projects__content-brainflix"
          href="https://brain-flix-app.netlify.app/"
          target="_blank"
          onMouseEnter={() => setHoveredTwo(true)}
          onMouseLeave={() => setHoveredTwo(false)}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { delay: 0.5, duration: 1, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={brainflix}
            alt="brainflix-app-image"
            className={`projects__content--img projects__content--brainflix-image ${
              hoveredTwo ? "js-box-shadow" : ""
            }`}
          />
          <div className="projects__content--text projects__content--text-brainflix">
            <motion.h2
              className={`projects__content--project-name ${
                hoveredTwo ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              BrainFlix
            </motion.h2>
            <motion.p
              className={`projects__content--project-description ${
                hoveredTwo ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Showcasing my web developing skills, a video streaming web
              application built on React,  connected to the backend server via
              RESTful API built using Express in Node js.
            </motion.p>
          </div>
        </motion.a>
        <motion.a
          className="projects__content projects__content-quiz"
          href="https://tseringdhondupgeographyquiz.netlify.app/"
          target="_blank"
          onMouseEnter={() => setHoveredThree(true)}
          onMouseLeave={() => setHoveredThree(false)}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { delay: 0.5, duration: 1, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={quiz}
            alt="brainflix-app-image"
            className={`projects__content--img projects__content--quiz-image ${
              hoveredThree ? "js-box-shadow" : ""
            }`}
          />
          <div className="projects__content--text projects__content--text-quiz">
            <motion.h2
              className={`projects__content--project-name ${
                hoveredThree ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Geography quiz
            </motion.h2>
            <motion.p
              className={`projects__content--project-description ${
                hoveredThree ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              A geography quiz is an interactive quiz game, that allows players
              to guess the correct answer within time allocation.
            </motion.p>
          </div>
        </motion.a>
        <motion.a
          className="projects__content projects__content-band-site"
          href="https://tseringdhondup-bandsite.netlify.app/"
          target="_blank"
          onMouseEnter={() => setHoveredFour(true)}
          onMouseLeave={() => setHoveredFour(false)}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { delay: 0.5, duration: 1, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={bandsite}
            alt="brainflix-app-image"
            className={`projects__content--img projects__content--band-site-image ${
              hoveredFour ? "js-box-shadow" : ""
            }`}
          />
          <div className="projects__content--text projects__content--text-band-site">
            <motion.h2
              className={`projects__content--project-name ${
                hoveredFour ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Band-Site
            </motion.h2>
            <motion.p
              className={`projects__content--project-description ${
                hoveredFour ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Bandsite is a static website built as a part of the School Project
              at BrainStation's Software Engineering Bootcamp.
            </motion.p>
          </div>
        </motion.a>
        <motion.a
          className="projects__content projects__content-email-reader"
          href="https://github.com/Tsedhondup/job-application-tracker"
          target="_blank"
          onMouseEnter={() => setHoveredFive(true)}
          onMouseLeave={() => setHoveredFive(false)}
          initial={{
            y: 60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { delay: 0.5, duration: 1, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={jobTracker}
            alt="job-application-tracker-image"
            className={`projects__content--img projects__content--email-image ${
              hoveredFive ? "js-box-shadow" : ""
            }`}
          />
          <div className="projects__content--text ">
            <motion.h2
              className={`projects__content--project-name projects__content--text-email ${
                hoveredFive ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Email Reader
            </motion.h2>
            <motion.p
              className={`projects__content--project-description ${
                hoveredFive ? "js-color-pewter" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Full-stack web application built on ReactJS that reads, and
              fetches emails from the Gmail mail server using IMAP and stores
              them in MySQL database.
            </motion.p>
          </div>
        </motion.a>
      </section>
    </section>
  );
};
export default Works;
