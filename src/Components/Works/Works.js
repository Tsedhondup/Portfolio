import { motion } from "framer-motion";
import portfolio from "../../assets/image/portfolio.jpg";
import brainflix from "../../assets/image/brainflix.jpg";
import jobTracker from "../../assets/image/job-tracker.jpg";
import weatherApp from "../../assets/image/weather-app.jpg";
import fiserv from "../../assets/image/fiserv.jpg";
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
        {/* Personal */}
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
            {/* <motion.p className="projects__content--project-description">
              Weather App built
            </motion.p> */}
          </div>
        </div>
        {/* <motion.h2 className="projects__personal">Personal works</motion.h2> */}
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
            {/* <motion.p className="projects__content--project-description">
              App for fetching and reading email from mail server
            </motion.p> */}
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
            {/* <motion.p className="projects__content--project-description">
              Video streaming demo website
            </motion.p> */}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Works;
