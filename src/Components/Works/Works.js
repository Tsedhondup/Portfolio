import { motion } from "framer-motion";
import portfolio from "../../assets/image/portfolio.jpg";
import brainflix from "../../assets/image/brainflix.jpg";
import jobTracker from "../../assets/image/job-tracker.jpg";
import { useState } from "react";
import "./Works.scss";
const Works = () => {
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(window.innerHeight);
  return (
    <section className="project-container">
      <motion.h2 className="project-container__title">Projects</motion.h2>
      <section className="projects">
        <div className="projects__content projects__content-email-reader">
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { duration: 1, ease: "linear" },
            }}
            viewport={{ once: false, amount: 0.5 }}
            src={jobTracker}
            alt="job-application-tracker-image"
            className="projects__content--img projects__content--email-image "
          />
          <div className="projects__content--text ">
            <motion.h2 className="projects__content--project-name projects__content--text-email">
              Personal Email Reader
            </motion.h2>
            <motion.p className="projects__content--project-description">
              Full-stack web application built on ReactJS that reads, and
              fetches emails from the Gmail mail server using IMAP and stores
              them in MySQL database.
            </motion.p>
          </div>
        </div>
        <div className="projects__content projects__content-portfolio">
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { duration: 1, ease: "linear" },
            }}
            viewport={{ once: false, amount: 0.5 }}
            src={portfolio}
            alt="portfolio-website-image"
            className="projects__content--img projects__content--portfolio-image "
          />
          <div className="projects__content--text projects__content--text-portfolio">
            <motion.h2 className="projects__content--project-name">
              portfolio
            </motion.h2>
            <motion.p className="projects__content--project-description">
              My Portfolio website deployed on Netlify, was primarily built on
              ReactJs with real-time data provided by a Node server.
            </motion.p>
          </div>
        </div>
        <div className="projects__content projects__content-brainflix">
          <motion.img
            initial={{ filter: "grayScale(100)", opacity: 0 }}
            whileInView={{
              filter: "grayScale(0)",
              opacity: 1,
              transition: { duration: 1, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            src={brainflix}
            alt="brainflix-app-image"
            className="projects__content--img projects__content--brainflix-image"
          />
          <div className="projects__content--text projects__content--text-brainflix">
            <motion.h2 className="projects__content--project-name">
              BrainFlix
            </motion.h2>
            <motion.p className="projects__content--project-description">
              Showcasing my web developing skills, a React video streaming web
              application connected to the backend server via RESTful API
              developed using Express.js in Node js.
            </motion.p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Works;
