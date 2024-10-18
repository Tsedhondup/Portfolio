/* eslint-disable react/jsx-no-target-blank */
import { motion } from "framer-motion";
import { useState } from "react";
import { projectData } from "../../utilities/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "./Works.scss";
const Works = () => {
  const [projects, setProjects] = useState(projectData);

  /*
  * Update project-data when cursor enters/leaves  project-image container
  * new key "hover" is being added that particular parent/project-item of project image
  * "hover" is assinged "true" when mouse enter project-image-container
  * "hover" is assinged "false" when mouse leaves project-image-container
  * projects state variable is set with new project data

   */
  const onMouseEnterCallBack = (itemId) => {
    const mappedData = projects.map((item) => {
      if (item.id === itemId) {
        item.hover = true;
      }
      return item;
    });
    setProjects(mappedData);
  };
  const onMouseLeaveCallBack = (itemId) => {
    const mappedData = projects.map((item) => {
      if (item.id === itemId) {
        item.hover = false;
      }
      return item;
    });
    setProjects(mappedData);
  };
  /*
   * RENDER PROJECT IMAGE BASED ON PROJECT AVAILABILITY
   * e.g: If project is still in development stage, render icon and text showing "Work in progress"
   */
  const handleProjectImage = (projectName, imgUrl) => {
    // If project in development statte
    if (projectName === "unavailable") {
      return (
        <div className="project-image-container__icon-container">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="project-image-container__icon-container--icon"
          />
          <p className="project-image-container__icon-container--text">
            Work in progress...
          </p>
        </div>
      );
    } else {
      // if project in production stage
      return (
        <img
          src={imgUrl}
          alt={`${projectName}-image`}
          className="project-image-container__image"
        />
      );
    }
  };
  // ANIMATION COUNTER DURATION
  let counterDuration = 0.5;
  const projectListElement = projects.map((item) => {
    // INITIAL VALUE OF ANIMATION DURATION TIME
    let durationTime = counterDuration;

    counterDuration = durationTime + 0.5; // increment after each loop/map
    return (
      <motion.div
        key={item.id}
        className="project-content__project"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: durationTime, ease: "linear" },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <a
          href={item.url}
          target="_blank"
          className={`project-image-container ${
            item.hover ? "js-scale-up" : ""
          }`}
          onMouseEnter={() => onMouseEnterCallBack(item.id)}
          onMouseLeave={() => onMouseLeaveCallBack(item.id)}
        >
          <span
            className={`project-image-container__overlay ${
              item.hover ? "js-show-over-lay" : ""
            }`}
            onMouseEnter={() => onMouseEnterCallBack(item.id)}
            onMouseLeave={() => onMouseLeaveCallBack(item.id)}
          >
            <span className="project-image-container__overlay--description">{`${item.description}`}</span>
            <span className="project-image-container__overlay--tech">{`${item.tech}`}</span>
          </span>
          {handleProjectImage(item.name, item.img)}
        </a>
        <div className="project-text-container">
          <div className="project-text-container__links">
            <h2 className="project-text-container__links--name">{item.name}</h2>
            <a
              href={item.repo}
              target="_blank"
              className="project-text-container__links--repo"
            >
              Open Repo
            </a>
          </div>
        </div>
      </motion.div>
    );
  });
  return (
    <section className="project-container">
      <motion.h2 className="project-container__title">Projects</motion.h2>
      <section className="project-content">{projectListElement}</section>
    </section>
  );
};
export default Works;
