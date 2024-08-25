import { motion } from "framer-motion";
import brainflix from "../../assets/image/brainflix.jpg";
import jobTracker from "../../assets/image/job-tracker.jpg";
import weatherApp from "../../assets/image/weather-app.jpg";
import fiserv from "../../assets/image/fiserv.jpg";
import "./Works.scss";
const Works = () => {
  return (
    <section className="project-container">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "linear" },
        }}
        viewport={{ once: true, amount: 1 }}
        className="project-container__title"
      >
        Projects
      </motion.h2>
      <section className="projects">
        {/* Personal */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="projects__personal"
        >
          Personal works
        </motion.h2>
        <div className="projects__content projects__content-email-reader">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 1 }}
            src={jobTracker}
            alt="job-application-tracker-image"
            className="projects__content--img projects__content--email-image"
          />
          <div className="projects__content--text ">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-name projects__content--text-email"
            >
              Personal Email Reader
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-description"
            >
              App for fetching reading email from mail server
            </motion.p>
          </div>
        </div>

        <div className="projects__content projects__content-brainflix">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 1 }}
            src={brainflix}
            alt="brainflix-app-image"
            className="projects__content--img projects__content--brainflix-image"
          />
          <div className="projects__content--text projects__content--text-brainflix">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-name"
            >
              BrainFlix
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-description"
            >
              Video streaming website built on React and Node
            </motion.p>
          </div>
        </div>
        {/* Collab */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "linear" },
          }}
          viewport={{ once: true, amount: 1 }}
          className="projects__collaboration"
        >
          Collaboration
        </motion.h2>
        <div className="projects__content projects__content-fiserv">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 1 }}
            src={fiserv}
            alt="fiserv-app-image"
            className="projects__content--img projects__content--fiserv-image"
          />
          <div className="projects__content--text ">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-name projects__content--text-fiserv"
            >
              Restaurent App UI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-description"
            >
              Restaurent App UI built on React, Node and MySQL
            </motion.p>
          </div>
        </div>
        <div className="projects__content projects__content-weather">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 1 }}
            src={weatherApp}
            alt="weather-app-image"
            className="projects__content--img projects__content--weather-app-image"
          />
          <div className="projects__content--text projects__content--text-weather">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-name"
            >
              Weather App
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "linear" },
              }}
              viewport={{ once: true, amount: 1 }}
              className="projects__content--project-description"
            >
              Weather App built on React using free weather API
            </motion.p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Works;
