import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faCirclePlay,
  faEnvelopeCircleCheck,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import brainflix from "../../assets/image/brainflix.jpg";
import jobTracker from "../../assets/image/job-tracker.jpg";
import weatherApp from "../../assets/image/weather-app.jpg";
import fiserv from "../../assets/image/fiserv.jpg";
import "./Works.scss";
const Works = () => {
  return (
    <section className="project-container">
      <h2 className="project-container__title">Projects</h2>
      <section className="projects">
        {/* Personal */}
        <h2 className="projects__personal">Personal works</h2>
        <div className="projects__content projects__content-email-reader">
          <img
            src={jobTracker}
            alt="job-application-tracker-image"
            className="projects__content--img projects__content--email-image"
          />
          <div className="projects__content--text ">
            <h2 className="projects__content--project-name projects__content--text-email">
              Personal Email Reader
            </h2>
            <p className="projects__content--project-description">
              App for fetching reading email from mail server
            </p>
          </div>
        </div>

        <div className="projects__content projects__content-brainflix">
          <img
            src={brainflix}
            alt="brainflix-app-image"
            className="projects__content--img projects__content--brainflix-image"
          />
          <div className="projects__content--text projects__content--text-brainflix">
            <h2 className="projects__content--project-name">BrainFlix</h2>
            <p className="projects__content--project-description">
              Video streaming website built on React and Node
            </p>
          </div>
        </div>
        {/* Collab */}
        <h2 className="projects__collaboration">Collaboration</h2>
        <div className="projects__content projects__content-fiserv">
          <img
            src={fiserv}
            alt="fiserv-app-image"
            className="projects__content--img projects__content--fiserv-image"
          />
          <div className="projects__content--text ">
            <h2 className="projects__content--project-name projects__content--text-fiserv">
              Restaurent App UI
            </h2>
            <p className="projects__content--project-description">
              Restaurent App UI built on React, Node and MySQL
            </p>
          </div>
        </div>
        <div className="projects__content projects__content-weather">
          <img
            src={weatherApp}
            alt="weather-app-image"
            className="projects__content--img projects__content--weather-app-image"
          />
          <div className="projects__content--text projects__content--text-weather">
            <h2 className="projects__content--project-name">Weather App</h2>
            <p className="projects__content--project-description">
              Weather App built on React using free weather API
            </p>
          </div>
        </div>
      </section>
      {/* <section className="project-container__project-content">
        <section className="projects">
          <FontAwesomeIcon
            icon={faCloudSunRain}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCloudSunRain}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">Weather App</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faCirclePlay}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCirclePlay}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">BrainFlix</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">Job Application Tracker</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faCartFlatbed}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCartFlatbed}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">InStock</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
      </section> */}
    </section>
  );
};
export default Works;
