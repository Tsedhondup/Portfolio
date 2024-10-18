/* eslint-disable react/jsx-no-target-blank */
import { motion } from "framer-motion";
import { useState } from "react";
import { projectData } from "../../utilities/data";
import gasStove from "../../assets/icons/gas-stove.png";
import pot from "../../assets/icons/pot.png";
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
    // IF PROJECT IS IN DEVELOPMENT STAGES
    if (projectName === "unavailable") {
      return (
        <div className="project-image-container__icon-container">
          <div className="icon-image-container">
            <img
              src={pot}
              alt="cooking-pot"
              className="icon-image-container__image"
            />
            <img
              src={gasStove}
              alt="gas-stove"
              className="icon-image-container__image"
            />
          </div>
          <p className="project-image-container__icon-container--text">
            Work in progress...
          </p>
        </div>
      );
    } else {
      // IF PROJECT IS IN PRODUCTION PHASE
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
          {/*
           *OVERLAY WILL HAVE TWO DYNAMIC CLASSES WHEN:
           * WHEN MOUSE ENTER IMAGE-CONTAINER
           * IF PROJECT IS IN PRODUCTION STAGE
           */}
          <span
            className={`project-image-container__overlay ${
              item.hover
                ? `js-show-over-lay ${
                    item.name === "unavailable" ? "js-background-image" : ""
                  }`
                : ""
            }`}
            onMouseEnter={() => onMouseEnterCallBack(item.id)}
            onMouseLeave={() => onMouseLeaveCallBack(item.id)}
          >
            {/*
             * PROJECT DESCRIPTION AND TECH SECTION WILL HAVE DYNAMIC CLASS IF PROJECT IS IN DEVELOPMENT STAGE
             */}
            <span
              className={`project-image-container__overlay--description ${
                item.name === "unavailable" ? "js-back-color-descript" : ""
              }`}
            >
              {`${item.description}`}
            </span>
            <span
              className={`project-image-container__overlay--tech ${
                item.name === "unavailable" ? "js-back-color-tech" : ""
              }`}
            >{`${item.tech}`}</span>
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
      <motion.h2
        className="project-container__title"
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "linear",
          },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        Projects
      </motion.h2>
      <section className="project-content">{projectListElement}</section>
    </section>
  );
};
export default Works;
